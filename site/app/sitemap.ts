import type {MetadataRoute} from "next";
import {projects} from "@/lib/content";
export default function sitemap():MetadataRoute.Sitemap{
 const base=(process.env.NEXT_PUBLIC_SITE_URL||"https://deninhoricharddr-svg.github.io/dennis-richard-portfolio/").replace(/\/$/,"");
 const pages=["","/about","/work","/projects","/contact",...projects.map(p=>"/projects/"+p.slug)];
 return pages.map(path=>({url:base+path,changeFrequency:"monthly",priority:path===""?1:.7}));
}
