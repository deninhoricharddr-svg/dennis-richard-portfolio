import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft,ArrowUpRight,FileCheck,Lightbulb,Workflow} from "lucide-react";
import {projects,tracks} from "@/lib/content";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params;const project=projects.find(p=>p.slug===slug);
 return {title:project?.title??"Project not found",description:project?.summary};
}
export default async function ProjectDetail({params}:Props){
 const {slug}=await params; const p=projects.find(p=>p.slug===slug);if(!p)notFound();
 return <main id="main"><section className="subhero project-subhero"><div className="container"><Link className="back-link" href="/projects"><ArrowLeft size={16}/> All projects</Link><div className="eyebrow">{p.code} / {tracks[p.track].eyebrow}</div><h1>{p.title}</h1><p>{p.summary}</p><div className="planned-warning"><span className="status-bullet"></span> PROJECT STATUS: {p.status.toUpperCase()} — THIS IS A DEVELOPMENT BRIEF, NOT FINISHED ANALYSIS</div></div></section>
 <section className="section section-white"><div className="container project-detail-grid"><div className="detail-main"><div className="eyebrow">THE CORE QUESTION</div><h2>{p.question}</h2><div className="detail-section"><h3><Workflow size={21}/> Proposed approach</h3><ol className="numbered-steps">{p.approach.map((step,i)=><li key={step}><span>{String(i+1).padStart(2,"0")}</span><p>{step}</p></li>)}</ol></div><div className="detail-section"><h3><FileCheck size={21}/> Evidence required before publication</h3><ul className="evidence-list">{p.evidence.map(item=><li key={item}>{item}</li>)}</ul></div><div className="project-disclaimer"><Lightbulb size={22}/><p>This project will be developed through hands-on learning and original analysis. It will not be presented as completed until datasets, methods, findings and reproducibility files have been reviewed.</p></div></div><aside className="project-sidebar"><div className="sidebar-panel"><span>PLANNED TOOLCHAIN</span><div className="tool-pills">{p.tools.map(tool=><span key={tool}>{tool}</span>)}</div></div><div className="sidebar-panel"><span>POTENTIAL DATA SOURCES</span><div className="data-sources">{p.datasets.map(source=><a href={source.href} key={source.href} target="_blank" rel="noopener noreferrer">{source.label} <ArrowUpRight size={14}/></a>)}</div><p className="evidence-note">Source licensing, access and methodological fitness will be checked before analysis.</p></div><Link className="button button-dark" href="/contact">Discuss this work <ArrowUpRight size={17}/></Link></aside></div></section></main>;
}