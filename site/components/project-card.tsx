import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
const titles = {economics:"Economics", finance:"Financial analysis", analytics:"Data analytics"};
export function ProjectCard({project,index}:{project:Project;index?:number}){
  return <article className={"project-card track-"+project.track}>
    <div className="project-top"><span>{project.code} / {titles[project.track]}</span><span className="project-status">{project.status==="planned"?"Planned":project.status==="in-progress"?"In progress":"Completed"}</span></div>
    <div className="project-number" aria-hidden="true">{String(index??Number(project.code.slice(1))).padStart(2,"0")}</div>
    <h3>{project.title}</h3><p>{project.summary}</p>
    <div className="project-tech">{project.tools.slice(0,4).map(tool=><span key={tool}>{tool}</span>)}</div>
    <Link className="card-link" href={"/projects/"+project.slug}>View project brief <ArrowUpRight size={16}/></Link>
  </article>;
}