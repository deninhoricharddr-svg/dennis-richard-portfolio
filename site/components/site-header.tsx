"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
const nav = [{href:"/",label:"Home"},{href:"/work",label:"Experience & writing"},{href:"/projects",label:"Projects"},{href:"/about",label:"About"}];
export function SiteHeader() {
  const pathname = usePathname();
  const [open,setOpen] = useState(false);
  return <header className="site-header">
    <div className="container nav-inner">
      <Link className="brand" href="/" aria-label="Dennis Richard homepage" onClick={()=>setOpen(false)}>
        <span className="brand-mark">dr<span className="brand-dot">.</span></span>
        <span className="brand-text">DENNIS RICHARD <small>ECONOMICS / FINANCE / DATA</small></span>
      </Link>
      <button type="button" className="menu-button" aria-label={open?"Close menu":"Open menu"} aria-controls="main-menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={23}/>:<Menu size={23}/>}</button>
      <nav id="main-menu" className={"main-nav"+(open?" is-open":"")} aria-label="Main navigation">
        {nav.map(item=><Link key={item.href} href={item.href} className={pathname===item.href?"active":""} aria-current={pathname===item.href?"page":undefined} onClick={()=>setOpen(false)}>{item.label}</Link>)}
        <Link className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>Get in touch <ArrowUpRight size={15}/></Link>
      </nav>
    </div>
  </header>;
}