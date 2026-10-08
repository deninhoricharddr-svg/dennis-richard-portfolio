/** Canonical origin for Netlify previews and production; never points to the legacy Pages site. */
const configured=process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || "http://localhost:3000";
export const siteUrl=configured.replace(/\/$/,"");
