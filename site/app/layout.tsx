import type { Metadata, Viewport } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/content";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dmsans" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://deninhoricharddr-svg.github.io/dennis-richard-portfolio/";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dennis Richard | Economics · Finance · Data", template: "%s | Dennis Richard" },
  description: "Portfolio of Dennis Richard, a Malawi-based economist and research professional working across economic research, developing financial-analysis capabilities and data analytics.",
  applicationName: "Dennis Richard Portfolio",
  keywords: ["Dennis Richard", "Economist Malawi", "Economic research", "Financial analysis", "Data analyst", "Lilongwe", "Econometrics"],
  openGraph: { title: "Dennis Richard | Economics · Finance · Data", description: "Research-led thinking. Financial insight. Decision-ready analytics.", type: "website", locale: "en_US", siteName: "Dennis Richard Portfolio" },
  robots: { index: true, follow: true }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#081b2a" };
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en" className={manrope.variable+" "+dmSans.variable}><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader/>{children}<SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Person","name":profile.name,"homeLocation":{"@type":"Place","name":profile.location},"alumniOf":{"@type":"CollegeOrUniversity","name":"Catholic University of Malawi"},"sameAs":[profile.github,profile.linkedin]})}}/></body></html>;
}