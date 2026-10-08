export type Track = "economics" | "finance" | "analytics";
export type ProjectStatus = "planned" | "in-progress" | "completed";

export interface Project {
  slug: string;
  code: string;
  track: Track;
  title: string;
  summary: string;
  question: string;
  approach: string[];
  evidence: string[];
  tools: string[];
  datasets: { label: string; href: string }[];
  status: ProjectStatus;
  feature?: boolean;
}

export const tracks: Record<Track, { eyebrow: string; title: string; description: string; capabilities: string[] }> = {
  economics: {
    eyebrow: "01 / ECONOMICS & POLICY",
    title: "Economics & empirical research",
    description: "Economic reasoning, applied econometrics and development policy grounded in transparent evidence.",
    capabilities: ["Macroeconomics", "Econometrics", "Impact & policy analysis", "Applied research"]
  },
  finance: {
    eyebrow: "02 / FINANCIAL ANALYSIS",
    title: "Financial intelligence & modelling",
    description: "Developing technical finance capability through auditable models, budgeting, valuation and risk analysis.",
    capabilities: ["FP&A", "Financial statements", "Valuation", "Risk scenarios"]
  },
  analytics: {
    eyebrow: "03 / DATA ANALYTICS",
    title: "Data analytics & data science",
    description: "Developing rigorous workflows spanning data quality, SQL, visual intelligence and predictive modelling.",
    capabilities: ["SQL & Python", "Power BI", "Pipelines", "Machine learning"]
  }
};

export const projects: Project[] = [
  {
    slug: "commercial-intelligence", code: "D1", track: "analytics",
    title: "Commercial Intelligence System",
    summary: "Transform real transaction and delivery data into tested commercial metrics, operational insight and management decisions.",
    question: "Which operational friction points are linked to poor customer outcomes and lower repeat purchase rates?",
    approach: ["Model a relational ecommerce dataset in SQL.", "Build validated transformations and documented business metrics.", "Analyze customer outcomes and delivery performance with a BI dashboard.", "Separate measured outcomes from hypothetical profitability assumptions."],
    evidence: ["SQL scripts and data-quality tests", "Documented semantic model and dashboard", "Executive decision memo", "Reproducible project README"],
    tools: ["PostgreSQL", "SQL", "Python", "Power BI", "dbt (optional)"],
    datasets: [{ label: "Olist Brazilian Ecommerce Dataset", href: "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }],
    status: "planned", feature: true
  },
  {
    slug: "transport-operations", code: "D2", track: "analytics",
    title: "Predictive Transport Operations",
    summary: "Investigate transport delays and evaluate whether predictions can inform capacity and resource decisions.",
    question: "When can delay forecasts improve operational planning compared with straightforward baselines?",
    approach: ["Prepare real operational data and define the prediction horizon.", "Establish baselines and time-aware holdout sets.", "Evaluate model accuracy, stability and calibration.", "Explore constrained resource scenarios without claiming realized savings."],
    evidence: ["Python and SQL pipeline", "Model evaluation report", "Interactive risk dashboard", "Scenario decision note"],
    tools: ["Python", "SQL", "scikit-learn", "Optimization"],
    datasets: [{ label: "US Bureau of Transportation Statistics", href: "https://www.transtats.bts.gov/" }],
    status: "planned"
  },
  {
    slug: "marketing-uplift", code: "D3", track: "analytics",
    title: "Marketing Experimentation & Causal Uplift",
    summary: "Use randomized marketing evidence to estimate incrementality and test whom a campaign should target.",
    question: "Which groups show the greatest incremental response to marketing treatment?",
    approach: ["Establish experimental design, randomization and measurement definitions.", "Estimate average treatment effect and uncertainty.", "Compare targeting strategies and uplift models.", "Stress-test ROI using disclosed economic assumptions."],
    evidence: ["Reproducible experiment notebook", "Causal effect estimates", "Uplift and uncertainty charts", "Targeting strategy memo"],
    tools: ["Python", "SQL", "Experiment design", "Causal inference"],
    datasets: [{ label: "Criteo Uplift Prediction Dataset", href: "https://ailab.criteo.com/criteo-uplift-prediction-dataset/" }],
    status: "planned"
  },
  {
    slug: "equity-valuation", code: "F1", track: "finance",
    title: "Institutional-Style Equity Research & Valuation",
    summary: "Build an auditable integrated valuation model from primary financial disclosures.",
    question: "What range of value is defensible under alternative operating and capital assumptions?",
    approach: ["Read original financial statements and reconcile figures.", "Forecast drivers, working capital and free cash flows.", "Estimate valuation ranges and compare alternative multiples.", "Write an investment research note with assumptions and downside risks."],
    evidence: ["Three-statement Excel model", "Assumption audit and sensitivity grids", "DCF valuation and peer comparison", "Investment research memorandum"],
    tools: ["Excel", "Python", "Accounting", "DCF"],
    datasets: [{ label: "US SEC EDGAR APIs", href: "https://www.sec.gov/search-filings/edgar-application-programming-interfaces" }],
    status: "planned"
  },
  {
    slug: "enterprise-fpa", code: "F2", track: "finance",
    title: "Enterprise FP&A & Capital Allocation",
    summary: "Create a driver-based planning environment connecting operational assumptions to financial forecasts.",
    question: "How should management adjust investment, operating costs and working capital under changing demand?",
    approach: ["Build a transparent operating-driver model.", "Reconcile income, cash flow and working capital.", "Compare rolling forecasts with budgets and actuals.", "Create alternative capital allocation and demand scenarios."],
    evidence: ["Auditable Excel forecasting model", "Power BI variance dashboard", "Documented scenario assumptions", "CFO-style decision brief"],
    tools: ["Excel", "Power Query", "Power BI", "DAX", "SQL"],
    datasets: [{ label: "Microsoft Financial Sample", href: "https://learn.microsoft.com/en-us/power-bi/create-reports/sample-financial-download" }],
    status: "planned", feature: true
  },
  {
    slug: "bank-resilience", code: "F3", track: "finance",
    title: "Banking Resilience & Stress Testing",
    summary: "Analyze public bank disclosures and build transparent stress scenarios for capital, profitability and liquidity.",
    question: "Which risk characteristics are associated with weaker resilience under explicitly hypothetical shocks?",
    approach: ["Collect regulatory bank measures and assess comparability.", "Define capital, earnings, asset quality and liquidity indicators.", "Construct clearly labelled illustrative stress scenarios.", "Present bank comparisons with limitations and data quality controls."],
    evidence: ["Reproducible regulatory data pipeline", "Banking performance dashboard", "Scenario workbook", "Risk methodology memorandum"],
    tools: ["Python", "SQL", "Excel", "Power BI"],
    datasets: [{ label: "FDIC BankFind", href: "https://banks.data.fdic.gov/bankfind-suite/bulkdata" }],
    status: "planned"
  },
  {
    slug: "economic-convergence", code: "E1", track: "economics",
    title: "Economic Convergence & Structural Transformation",
    summary: "Assess why some economies converge toward global income levels while others remain behind.",
    question: "How have productivity, investment and economic structure shaped Malawi's trajectory relative to peers?",
    approach: ["Construct comparable long-run GDP and productivity indicators.", "Select defensible comparison economies and periods.", "Evaluate convergence, structural change and growth contributions.", "Present cautious forecasts and alternative policy scenarios."],
    evidence: ["Stata/Python replication scripts", "Comparative development dashboard", "Methodology appendix", "Policy research paper"],
    tools: ["Stata", "Python", "Excel", "Econometrics"],
    datasets: [{ label: "World Bank World Development Indicators", href: "https://databank.worldbank.org/source/world-development-indicators" }],
    status: "planned", feature: true
  },
  {
    slug: "inflation-transmission", code: "E2", track: "economics",
    title: "Commodity Shocks & Inflation Transmission",
    summary: "Compare how external commodity-price changes relate to domestic inflation across economies.",
    question: "Why can similar global price movements coincide with different domestic inflation responses?",
    approach: ["Build a cross-country inflation, price and macro-controls panel.", "Investigate alternative dynamic specifications and diagnostics.", "Report uncertainty, robustness and possible endogeneity.", "Explain policy interpretations without claiming unsupported causality."],
    evidence: ["Econometric specification and code", "Robustness and sensitivity tables", "Country comparisons", "Policy briefing"],
    tools: ["Stata", "R", "Time series", "Panel methods"],
    datasets: [{ label: "World Bank Commodity Markets", href: "https://www.worldbank.org/en/research/commodity-markets" }],
    status: "planned"
  },
  {
    slug: "ai-jobs-inequality", code: "E3", track: "economics",
    title: "AI, Work & Economic Inequality",
    summary: "Examine occupational AI exposure and structural differences in digital and labour-market readiness.",
    question: "Which economies and occupations appear more exposed to AI, and which are better positioned to adapt?",
    approach: ["Distinguish exposure, adoption and displacement in a measurement framework.", "Combine occupational exposure and public development indicators.", "Analyze between-country distributions and sensitivity to assumptions.", "Document uncertainty and publish an accessible policy interpretation."],
    evidence: ["Transparent country-level research dataset", "Replicable code and methods", "Interactive comparative charts", "Original economics working paper"],
    tools: ["Python", "R", "Econometrics", "Data visualization"],
    datasets: [{ label: "Anthropic Economic Index", href: "https://huggingface.co/datasets/Anthropic/EconomicIndex" }],
    status: "planned"
  }
];

export const featuredPublication = {
  title: "Malawi's fuel queues: what is global, what is domestic, and what changed between Chakwera and Mutharika?",
  source: "The Maravi Post",
  date: "4 October 2026",
  href: "https://www.maravipost.com/malawis-fuel-queues-what-is-global-what-is-domestic-and-what-changed-between-chakwera-and-mutharika/",
  type: "Published economic commentary"
};

export const profile = {
  name: "Dennis Richard",
  location: "Lilongwe, Malawi",
  email: "deninhorichard.dr@gmail.com",
  github: "https://github.com/deninhoricharddr-svg",
  linkedin: "https://www.linkedin.com/in/dennis-richard-2477a4236/",
  // Add real media assets under /public/media then set these paths.
  photo: null as string | null,
  video: null as string | null,
  // Upload a cleared, public-facing CV under /public/media to enable downloads.
  cv: null as string | null
};
