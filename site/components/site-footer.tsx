import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";
export function SiteFooter(){
 return <footer className="site-footer"><div className="container">
  <div className="footer-top"><div><div className="footer-mark">dr<span>.</span></div><p>Independent economic thinking.<br/>Evidence-led analysis.<br/>Practical decisions.</p></div><div className="footer-links"><Link href="/projects">Projects <ArrowUpRight size={13}/></Link><Link href="/work">Selected work <ArrowUpRight size={13}/></Link><Link href="/contact">Contact <ArrowUpRight size={13}/></Link></div><div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13}/></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href={"mailto:"+profile.email}>Email <ArrowUpRight size={13}/></a></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} Dennis Richard</span><span>Lilongwe, Malawi · Open to international opportunities</span><span>Built with intention, not templates.</span></div>
 </div></footer>;
}