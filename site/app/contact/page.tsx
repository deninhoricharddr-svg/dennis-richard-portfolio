import type {Metadata} from "next";
import {ArrowUpRight,Mail,MapPin,MessageSquareText} from "lucide-react";
import {ContactForm} from "@/components/contact-form";
import {profile} from "@/lib/content";
export const metadata:Metadata={title:"Contact",description:"Contact Dennis Richard for relevant employment, economics, financial analysis, research and data analytics enquiries."};
export const dynamic="force-dynamic";
export default function ContactPage(){
 const key=process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
 const ready=Boolean(key&&process.env.TURNSTILE_SECRET_KEY&&process.env.RESEND_API_KEY&&process.env.CONTACT_FROM_EMAIL&&process.env.CONTACT_TO_EMAIL);
 return <main id="main"><section className="subhero"><div className="container"><div className="eyebrow">LET'S CONNECT / PROFESSIONAL ENQUIRIES</div><h1>Good work starts<br/><em>with a conversation.</em></h1><p>Available to discuss relevant opportunities, evidence-led projects, academic research and professional collaborations.</p></div></section><section className="section section-white"><div className="container contact-page-grid"><div><div className="eyebrow">CONTACT INFORMATION</div><h2>Start here.</h2><p>Whether the subject is economic research, analytical reporting or an opportunity to contribute to your team, please provide enough context for a meaningful response.</p><div className="contact-info"><a href={"mailto:"+profile.email}><Mail size={22}/><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight size={18}/></a><div><MapPin size={22}/><span><small>LOCATION</small>Lilongwe, Malawi</span></div><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><MessageSquareText size={22}/><span><small>PROFESSIONAL PROFILE</small>LinkedIn</span><ArrowUpRight size={18}/></a></div></div>
 <div className="contact-form-panel"><h3>Send a message</h3><p>If the secure form has not been activated, email is available immediately.</p>{ready&&key?<ContactForm siteKey={key}/>:<div className="email-fallback"><p><strong>Contact form not activated yet.</strong><br/>The server-side email and anti-spam credentials are not configured. For now, please use the direct email link below.</p><a className="button button-dark" href={"mailto:"+profile.email+"?subject=Portfolio%20enquiry"}>Email Dennis directly <ArrowUpRight size={16}/></a></div>}</div>
 </div></section></main>;
}
