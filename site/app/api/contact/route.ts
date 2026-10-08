import {NextRequest,NextResponse} from "next/server";
import {z} from "zod";

export const runtime = "nodejs";
const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(180),
  subject: z.string().trim().min(3).max(160),
  message: z.string().trim().min(20).max(4000),
  turnstileToken: z.string().min(1).max(2048),
  website: z.string().max(200).optional().default("")
});

function respond(message:string,status:number){
  return NextResponse.json({message},{status,headers:{"Cache-Control":"no-store"}});
}
export async function POST(req:NextRequest){
  const apiKey=process.env.RESEND_API_KEY;
  const from=process.env.CONTACT_FROM_EMAIL;
  const to=process.env.CONTACT_TO_EMAIL;
  const secret=process.env.TURNSTILE_SECRET_KEY;
  if(!apiKey||!from||!to||!secret||!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY){
    return respond("Secure contact submission is not configured. Please use the published email address.",503);
  }
  const origin=req.headers.get("origin");
  const requestOrigin=new URL(req.url).origin;
  if(origin && origin!==requestOrigin)return respond("Invalid request origin.",403);
  const contentLength=Number(req.headers.get("content-length")||0);
  if(contentLength>12000)return respond("The message is too large.",413);
  let body:unknown;
  try {body=await req.json();}catch{return respond("Invalid request body.",400);}
  const parsed=contactSchema.safeParse(body);
  if(!parsed.success)return respond("Please check the required fields and message length.",400);
  const {name,email,subject,message,turnstileToken,website}=parsed.data;
  if(website){return respond("Message received.",200);}
  const challenge=new URLSearchParams({secret,response:turnstileToken});
  try {
    const verified=await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify",{
      method:"POST",body:challenge,cache:"no-store",signal:AbortSignal.timeout(9000)
    });
    if(!verified.ok)return respond("Security validation is temporarily unavailable.",503);
    const result=await verified.json() as {success?:boolean;hostname?:string};
    if(!result.success)return respond("Security verification failed. Refresh and try again.",403);
    const expectedHost=new URL(req.url).hostname;
    if(result.hostname && result.hostname!==expectedHost)return respond("Security verification hostname mismatch.",403);
  }catch{return respond("Security verification is unavailable. Please email directly.",503);}
  const payload={
    from:from,
    to:[to],
    reply_to:email,
    subject:"Portfolio enquiry: "+subject,
    text:["Portfolio enquiry","From: "+name,"Email: "+email,"Subject: "+subject,"","Message:",message].join("\n")
  };
  try{
    const sent=await fetch("https://api.resend.com/emails",{
      method:"POST",
      headers:{"Authorization":"Bearer "+apiKey,"Content-Type":"application/json"},
      body:JSON.stringify(payload),cache:"no-store",signal:AbortSignal.timeout(10000)
    });
    if(!sent.ok)return respond("Message could not be delivered. Please use the email link instead.",502);
    return respond("Your message has been sent.",200);
  }catch{return respond("Delivery is temporarily unavailable. Please email directly.",502);}
}
