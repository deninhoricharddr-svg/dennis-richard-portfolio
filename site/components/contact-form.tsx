"use client";
import {useState,type FormEvent} from "react";
import Script from "next/script";
import {ArrowUpRight,CheckCircle2} from "lucide-react";
type Status="idle"|"sending"|"success"|"error";
export function ContactForm({siteKey}:{siteKey:string}){
 const [status,setStatus]=useState<Status>("idle");
 const [feedback,setFeedback]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  if(status==="sending")return;
  const form=e.currentTarget;
  const data=new FormData(form);
  const turnstileToken=String(data.get("cf-turnstile-response")??"");
  if(!turnstileToken){setStatus("error");setFeedback("Please complete the security check before sending.");return;}
  setStatus("sending");setFeedback("");
  const body={name:String(data.get("name")??""),email:String(data.get("email")??""),subject:String(data.get("subject")??""),message:String(data.get("message")??""),website:String(data.get("website")??""),turnstileToken};
  try{
   const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
   const result=await response.json() as {message?:string};
   if(!response.ok)throw new Error(result.message??"Submission failed.");
   setStatus("success");setFeedback("Thank you. Your message has been sent.");form.reset();
  }catch(error){setStatus("error");setFeedback(error instanceof Error?error.message:"Something went wrong. Please email directly.");}
 }
 return <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive"/>
 <form className="contact-form" onSubmit={submit}>
  <div className="form-grid"><label>Your name<input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Full name"/></label><label>Email address<input type="email" name="email" required maxLength={180} autoComplete="email" placeholder="you@organization.com"/></label></div>
  <label>What is this about?<input name="subject" required minLength={3} maxLength={160} placeholder="Opportunity, collaboration or question"/></label>
  <label>Your message<textarea name="message" required minLength={20} maxLength={4000} rows={7} placeholder="Share the context and what you have in mind..."/></label>
  <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" name="website"/></label></div>
  <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" data-appearance="always"></div>
  <div className="submit-row"><button className="button button-dark" type="submit" disabled={status==="sending"||status==="success"}>{status==="sending"?"Sending...":status==="success"?"Sent":"Send message"} <ArrowUpRight size={16}/></button><span className="form-disclaimer">Messages go directly to my professional email. No analytics or visitor profiling is enabled.</span></div>
  {feedback&&<p role="status" aria-live="polite" className={"form-feedback "+status}>{status==="success"?<CheckCircle2 size={17}/>:null}{feedback}</p>}
 </form></>;
}
