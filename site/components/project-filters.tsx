"use client";
import {useEffect,useMemo,useState} from "react";
import type {Project,Track} from "@/lib/content";
import {ProjectCard} from "./project-card";
const filters:[Track|"all",string][]=[["all","All projects"],["economics","Economics"],["finance","Financial analysis"],["analytics","Data analytics"]];
export function ProjectFilters({projects}:{projects:Project[]}) {
  const [current,setCurrent]=useState<Track|"all">("all");
  useEffect(()=>{const requested=new URLSearchParams(window.location.search).get("track");if(requested==="economics"||requested==="finance"||requested==="analytics")setCurrent(requested);},[]);
  const filtered=useMemo(()=>projects.filter(p=>current==="all"||p.track===current),[projects,current]);
  return <><div className="filter-row" role="group" aria-label="Filter projects by area">{filters.map(([key,label])=><button key={key} type="button" className={current===key?"selected":""} aria-pressed={current===key} onClick={()=>setCurrent(key)}>{label}</button>)}</div><p className="result-count" aria-live="polite">{filtered.length} planned {filtered.length===1?"project":"projects"} · learning-led and evidence-first</p><div className="project-grid">{filtered.map((p,i)=><ProjectCard key={p.slug} project={p} index={i+1}/>)}</div></>;
}