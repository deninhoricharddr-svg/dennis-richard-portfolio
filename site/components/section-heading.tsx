import type {ReactNode} from "react";
export function SectionHeading({eyebrow,children,aside}:{eyebrow:string;children:ReactNode;aside?:ReactNode}){
 return <div className="section-heading"><div><div className="eyebrow">{eyebrow}</div><h2>{children}</h2></div>{aside?<div className="section-aside">{aside}</div>:null}</div>;
}