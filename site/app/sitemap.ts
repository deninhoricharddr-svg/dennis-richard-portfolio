import type {MetadataRoute} from "next";
import {projects} from "@/lib/content";
import {siteUrl} from "@/lib/site-url";
export default function sitemap():MetadataRoute.Sitemap{
 const base=siteUrl;
 const pages=["","/about","/work","/projects","/contact",...projects.map(p=>"/projects/"+p.slug)];
 return pages.map(path=>({url:base+path,changeFrequency:"monthly",priority:path===""?1:.7}));
}
