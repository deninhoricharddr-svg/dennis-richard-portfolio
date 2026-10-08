import Link from "next/link";
import Image from "next/image";
import {ArrowRight, ArrowUpRight, BookOpenText, ChartNoAxesCombined, ChevronRight, CirclePlay, Database, Download, ExternalLink, Globe2, Landmark, Linkedin, MoveUpRight, Play, ScrollText, Sparkles} from "lucide-react";
import {featuredPublication, profile, projects, tracks} from "@/lib/content";
import {ProjectCard} from "@/components/project-card";
import {SectionHeading} from "@/components/section-heading";
export default function Home(){
 const featured = projects.filter(p=>p.feature);
 return <main id="main">
 <section className="hero">
  <div className="hero-noise" aria-hidden="true"></div>
  <div className="container hero-grid">
   <div className="hero-copy">
    <div className="eyebrow hero-eyebrow"><span className="live-dot"></span> ECONOMIST & APPLIED RESEARCH PROFESSIONAL · MALAWI</div>
    <h1>Complex questions.<br/><span className="highlight-italic">Clearer decisions.</span></h1>
    <p className="hero-subtitle">I&apos;m Dennis Richard. I bring economic reasoning, quantitative research and decision-focused communication to complex problems — while developing deeper capabilities in financial modelling, business intelligence and data science.</p>
    <div className="hero-actions"><Link className="button button-lime" href="/work">Explore my work <ArrowUpRight size={18}/></Link><Link className="button button-outline" href="/projects">Future projects <ArrowRight size={17}/></Link></div>
    <div className="hero-bottomline"><Globe2 size={15}/><span>Lilongwe, Malawi</span><span className="hero-divider"></span><span>Open to relevant international opportunities</span></div>
   </div>
   <div className="hero-portrait" aria-label="Professional portrait and personal identity">
    <div className="portrait-grid"></div><div className="portrait-orbit"></div>
    <div className="portrait-disc">{profile.photo ? <Image src={profile.photo} alt="Professional portrait of Dennis Richard" fill sizes="(max-width: 780px) 80vw, 420px" className="portrait-photo" priority/> : <div className="portrait-letters" aria-hidden="true"><span>D<span>R</span></span><small>DENNIS RICHARD</small></div>}</div>
    <div className="portrait-label one"><span className="label-spark">✳</span> INDEPENDENT THINKING</div>
    <div className="portrait-label two">ECONOMICS <span>×</span> FINANCE <span>×</span> DATA</div>
   </div>
  </div>
  <div className="container hero-foot"><span>001 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
 </section>

 <section className="signal-strip"><div className="container signal-grid"><div><strong>800+</strong><span>Infrastructure project records tracked in prior work</span></div><div><strong>13</strong><span>Quarterly and annual reporting contributions</span></div><div><strong>3×</strong><span>Dean&apos;s List recognitions</span></div><div><strong>2022</strong><span>Economics graduate</span></div></div></section>

 <section className="section section-white" id="disciplines">
  <div className="container"><SectionHeading eyebrow="01 / MY PERSPECTIVE" aside={<p>Research experience is the foundation. Finance and advanced analytics are developing extensions, supported by a transparent project-by-project learning path.</p>}>One perspective.<br/><span className="muted-title">Three connected disciplines.</span></SectionHeading>
   <div className="discipline-grid">
    <Link href="/projects?track=economics" className="discipline-card"><div className="discipline-top"><span>01 / ECONOMICS</span><Landmark size={26}/></div><div className="discipline-monogram">E<span>↗</span></div><h3>Economics &<br/>policy research</h3><p>{tracks.economics.description}</p><div className="discipline-foot">See the research roadmap <MoveUpRight size={17}/></div></Link>
    <Link href="/projects?track=finance" className="discipline-card discipline-dark"><div className="discipline-top"><span>02 / FINANCIAL ANALYSIS</span><ChartNoAxesCombined size={26}/></div><div className="discipline-monogram">F<span>↗</span></div><h3>Financial intelligence<br/>& modelling</h3><p>{tracks.finance.description}</p><div className="discipline-foot">See finance projects <MoveUpRight size={17}/></div></Link>
    <Link href="/projects?track=analytics" className="discipline-card"><div className="discipline-top"><span>03 / DATA ANALYTICS</span><Database size={26}/></div><div className="discipline-monogram">D<span>↗</span></div><h3>Data analytics<br/>& data science</h3><p>{tracks.analytics.description}</p><div className="discipline-foot">See analytics projects <MoveUpRight size={17}/></div></Link>
   </div>
  </div>
 </section>

 <section className="section section-cream">
  <div className="container"><SectionHeading eyebrow="02 / SELECTED EVIDENCE" aside={<Link className="eyebrow-link" href="/work">View all work <ArrowUpRight size={17}/></Link>}>Research. Reporting.<br/><span className="serif-word">Real experience.</span></SectionHeading>
   <div className="evidence-grid">
    <article className="evidence-card evidence-main"><div className="evidence-graphic graphic-editorial"><div className="graphic-tiny">ECONOMIC COMMENTARY / OCT 2026</div><div className="graphic-major">THE<br/>ENERGY<br/>QUESTION<span>.</span></div><div className="graphic-tiny">PUBLISHED IN THE MARAVI POST</div></div><div className="evidence-content"><span className="content-type">PUBLISHED COMMENTARY</span><h3>Malawi&apos;s fuel queues: the global and domestic picture</h3><p>Economic commentary examining energy-market pressures, foreign-exchange constraints and policy context.</p><a className="card-link" href={featuredPublication.href} target="_blank" rel="noopener noreferrer">Read published article <ExternalLink size={16}/></a></div></article>
    <article className="evidence-card"><div className="evidence-graphic graphic-roads"><span className="graphic-tiny">PLANNING / REPORTING</span><div className="bars-graphic" aria-hidden="true"><i/><i/><i/><i/><i/></div><span className="graphic-tiny">INFRASTRUCTURE DATA</span></div><div className="evidence-content"><span className="content-type">PROFESSIONAL EXPERIENCE</span><h3>Infrastructure monitoring and reporting</h3><p>Project tracking, validation and reporting support during my Roads Authority internship.</p><Link className="card-link" href="/work#infrastructure">Explore case study <ArrowUpRight size={16}/></Link></div></article>
    <article className="evidence-card"><div className="evidence-graphic graphic-model"><span className="graphic-tiny">APPLIED ECONOMETRICS</span><div className="formula-graphic">Δx<sub>t</sub> <span>↔</span> Δy<sub>t</sub></div><span className="graphic-tiny">RESEARCH / 2022</span></div><div className="evidence-content"><span className="content-type">ACADEMIC RESEARCH</span><h3>Oil prices and Malawi&apos;s exchange rate</h3><p>Undergraduate research on international oil prices and exchange-rate dynamics.</p><Link className="card-link" href="/work#dissertation">Research summary <ArrowUpRight size={16}/></Link></div></article>
   </div>
  </div>
 </section>

 <section className="section section-navy">
  <div className="container"><SectionHeading eyebrow="03 / BUILDING IN PUBLIC" aside={<p>Not completed projects. A deliberately challenging roadmap that I&apos;m working through with independent, documented analysis and validation.</p>}>Nine ambitions.<br/><span className="lime-title">One project at a time.</span></SectionHeading>
   <div className="project-grid home-project-grid">{featured.map((p,i)=><ProjectCard key={p.slug} project={p} index={i+1}/>)}</div><div className="section-action"><Link className="button button-lime" href="/projects">View the nine-project roadmap <ArrowUpRight size={18}/></Link></div>
  </div>
 </section>

 <section className="section section-white">
  <div className="container about-grid"><div><div className="eyebrow">04 / THE PERSON BEHIND THE WORK</div><h2>Trained in economics.<br/><span className="muted-title">Committed to evidence.</span></h2><p className="lead-para">I&apos;m a Malawi-based economist with practical exposure to public-sector planning, monitoring systems, structured research and analytical reporting.</p><p>My work has taught me that data matters when it can survive scrutiny and help people decide what to do next. I&apos;m expanding my capabilities in SQL, Python, financial modelling and business intelligence through real learning projects — with clear distinctions between current proficiency and work still in progress.</p><Link className="underlined-link" href="/about">More about my background <ArrowUpRight size={16}/></Link></div>
   <div className="about-panel"><div className="about-panel-title">PRACTICE & DEVELOPMENT</div><div><span>RESEARCH & ECONOMICS</span><p>Economic analysis · research design · Stata · SPSS · analytical reporting</p></div><div><span>DATA & FIELD METHODS</span><p>Excel · Google Sheets · KoboToolbox · ODK · data quality</p></div><div><span>PROJECT-BASED LEARNING</span><p>SQL · Python · Power BI · R · financial models · applied machine learning</p></div><div><span>ACADEMIC FOUNDATION</span><p>BSocSc Economics · Catholic University of Malawi · 2022</p></div></div>
  </div>
 </section>

 <section className="section section-cream">
  <div className="container video-grid">
   <div className="video-frame">{profile.video ? <video controls playsInline preload="metadata" className="intro-player" aria-label="Dennis Richard professional introduction"><source src={profile.video} type="video/mp4"/>Your browser does not support the video element.</video> : <div className="video-placeholder"><CirclePlay size={55} strokeWidth={1.2}/><span>MEET DENNIS RICHARD</span><strong>An introduction,<br/>in my own words.</strong><small>Video coming soon</small></div>}</div>
   <div><div className="eyebrow">05 / PERSONAL INTRODUCTION</div><h2>There&apos;s a person<br/><span className="muted-title">behind the analysis.</span></h2><p>A short introduction video will explain my professional direction, the problems I like to solve and the values guiding my work. The placeholder is intentional until a genuine video has been recorded.</p><Link className="underlined-link" href="/about">Get to know my approach <ArrowUpRight size={16}/></Link></div>
  </div>
 </section>

 <section className="section section-navy contact-cta"><div className="container contact-cta-grid"><div><div className="eyebrow">06 / START A CONVERSATION</div><h2>Need an analytical<br/><span className="lime-title">perspective?</span></h2><p>Open to appropriate research, economics, finance and data-related opportunities, local and international.</p></div><div className="contact-cta-right"><Link href="/contact">Let&apos;s connect <ArrowUpRight size={28}/></Link><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={"mailto:"+profile.email}>Email ↗</a>{profile.cv?<a href={profile.cv}>Download CV <Download size={13}/></a>:<a href={"mailto:"+profile.email+"?subject=Professional%20CV%20request"}>Request CV ↗</a>}</div></div></div></section>
 </main>;
}