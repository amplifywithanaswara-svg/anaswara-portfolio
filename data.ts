// All portfolio content lives here. Every fact comes from the resume, the LinkedIn profile
// or the brief. Edit this file to update the site. Items marked CONFIRM had conflicting sources.

export const site = {
  name: "Anaswara KC",
  title: "Digital Marketing Executive", // CONFIRM: resume says "Manager", LinkedIn says "Executive"
  location: "Kannur, Kerala, India",
  email: "anaswarakc77@gmail.com", // CONFIRM: LinkedIn lists amplifywithanaswara@gmail.com
  phone: "+91 8590340546",
  linkedin: "https://www.linkedin.com/in/anaswara-kc",
  website: "https://anaswarakc.com",
  resume: "/Anaswara-KC-Resume.pdf",
  url: "https://anaswarakc.com", // change if you deploy on a different domain
};

export const nav = [
  { href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" }, { href: "/experience", label: "Experience" }, { href: "/contact", label: "Contact" },
];

export const experience = [
  {
    company: "PVA Ayurvedic Hospital, Kannur", // CONFIRM: LinkedIn: "PVA Ayurvedic Multi Speciality Nursing Home"
    role: "Digital Marketing Executive", period: "March 2026 – Present", kind: "Full-time role",
    points: [
      "Manage SEO activities to improve website visibility and organic search performance.",
      "Keyword research, on-page SEO, content optimisation, technical SEO and performance tracking.",
      "Plan, launch and optimise Meta Ads campaigns for lead generation and brand awareness.",
      "Manage Google Ads campaigns and monitor leads, conversions and campaign performance.",
      "Handle social media: content planning, publishing and engagement management.",
      "Prepare campaign performance reports and use the insights to refine strategy.",
    ],
  },
  {
    company: "Opentutor Digital Academy, Kannur", role: "Digital Marketing Intern",
    period: "September 2025 – February 2026", kind: "Internship and training", // CONFIRM: resume says February 2026 only
    points: [
      "Keyword research, on-page optimisation and performance tracking for SEO tasks.",
      "Planned social media content calendars and assisted with Meta Ads campaigns.",
      "Supported WordPress website updates and kept site structures SEO-friendly.",
    ],
  },
  {
    company: "CCAN Solutions, Sreekandapuram", role: "Document Processor", period: "May 2024 – June 2025", kind: "Earlier role",
    points: [
      "Reviewed and verified documents for accuracy, completeness and compliance.",
      "Managed document workflows while meeting quality benchmarks and deadlines.",
    ],
  },
];

export type Project = {
  title: string; kind: "Professional" | "Training" | "Personal"; objective: string; role: string;
  activities: string[]; tools: string[]; result?: string;
};
export const projects: Project[] = [
  {
    title: "Healthcare SEO and search visibility", kind: "Professional",
    objective: "Improve website visibility and organic search performance for an Ayurvedic hospital.",
    role: "Digital Marketing Executive",
    activities: ["Keyword research", "On-page and content optimisation", "Technical SEO", "Performance tracking and reporting"],
    tools: ["SEO"],
  },
  {
    title: "Healthcare Meta Ads and Google Ads", kind: "Professional",
    objective: "Generate leads and build brand awareness through paid campaigns.",
    role: "Plan, launch, manage and optimise campaigns",
    activities: ["Meta Ads for lead generation and awareness", "Google Ads management", "Lead and conversion monitoring", "Campaign reporting"],
    tools: ["Meta Ads", "Google Ads"],
  },
  {
    title: "Healthcare social media management", kind: "Professional",
    objective: "Keep the hospital's social channels active and engaged.",
    role: "Content planning, publishing, engagement",
    activities: ["Content planning", "Publishing", "Engagement management"], tools: ["Social media platforms"],
  },
  {
    title: "AMSTER Movers (UAE) SEO", kind: "Training",
    objective: "Build SEO groundwork for a moving company in the UAE.", role: "SEO",
    activities: ["Keyword research", "Site audit", "On-page, off-page and technical SEO", "SEO performance reports"], tools: ["SEO"],
  },
  {
    title: "Google Search Ads for Opentutor Digital Academy", kind: "Training",
    objective: "Run Google Search Ads for the academy as a team project.", role: "Team member",
    activities: ["Keyword research", "Google Search Ads execution"], tools: ["Google Ads"],
  },
  {
    title: "Social media campaigns: Stayfree, Adidas, design school", kind: "Training",
    objective: "Practise strategy, content planning and paid engagement.", role: "Strategy, content calendar and ad execution",
    activities: ["Digital marketing strategy for Stayfree", "Demo content calendar for Adidas", "Social media engagement ad campaign for a design school"],
    tools: ["Social media", "Meta Ads"],
  },
  {
    title: "E-commerce and demo websites", kind: "Training",
    objective: "Build websites and landing pages to practise WordPress site management.", role: "Web design and build",
    activities: ["Model e-commerce site on WooCommerce and Shopify", "Multiple demo sites and landing pages in Elementor"],
    tools: ["WordPress", "Elementor", "WooCommerce", "Shopify"],
  },
  {
    title: "Personal SEO portfolio website", kind: "Personal",
    objective: "Rank my own website using SEO strategies.", role: "Owner and SEO",
    activities: ["Ranked on the first page of Google for multiple keywords"], tools: ["SEO", "WordPress"],
  },
];

export const skillGroups = [
  { name: "Used in my current role", tone: "pink", items: ["SEO (keyword research, on-page, technical)", "Google Ads", "Meta Ads", "Lead generation tracking", "Social media management", "Performance reporting"] },
  { name: "Practised in training and projects", tone: "purple", items: ["Off-page SEO", "Site audits", "WordPress", "Elementor", "WooCommerce and Shopify", "Content calendars", "Google Search Ads"] },
  { name: "Certified or trained", tone: "orange", items: ["Google Analytics", "HubSpot social media marketing", "Fundamentals of digital marketing"] },
  { name: "Listed on my LinkedIn profile", tone: "ink", items: ["Facebook Ads Manager", "LinkedIn marketing", "E-commerce", "Email marketing", "Content creation", "Web design"] },
];
export const tools = [
  { name: "Google Ads", use: "Used at work" }, { name: "Meta Ads Manager", use: "Used at work" },
  { name: "Google Analytics", use: "Certified" }, { name: "WordPress", use: "Used in projects" },
  { name: "Elementor", use: "Used in projects" }, { name: "WooCommerce", use: "Used in projects" },
  { name: "Shopify", use: "Used in projects" }, { name: "HubSpot", use: "Certified" },
];
export const awards = [
  { name: "Best Student Award", org: "Opentutor Academy", date: "February 2026" },
  { name: "Social Media Excellence Award", org: "Opentutor Academy", date: "February 2026" },
  { name: "SEO Topspot Award", org: "Opentutor Academy", date: "February 2026" },
];
export const education = [
  { name: "BCom Cooperation", org: "Kannur University", date: "August 2021 – March 2024" },
  { name: "Digital Marketing Training (4 months)", org: "Opentutor Digital Academy, Kannur", date: "Completed February 2026" },
];
export const certifications = [
  { name: "Professional Diploma in Digital Marketing", org: "Listed on LinkedIn" },
  { name: "4 Months of Digital Marketing Training Certificate", org: "Opentutor Digital Academy" },
  { name: "Fundamentals of Digital Marketing", org: "" },
  { name: "Google Analytics", org: "" },
  { name: "HubSpot Social Media Marketing", org: "" },
];
