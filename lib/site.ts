export const SITE = {
  name: "Beverly Web Design",
  url: "https://beverlywebdesign.com",
  phoneDisplay: "773-692-1952",
  phoneTel: "+17736921952",
  phoneSchema: "+1-773-692-1952",
  email: "info@beverlywebdesign.com",
  city: "Chicago",
  neighborhood: "Beverly",
  region: "IL",
  country: "US",
  tagline: "Chicago web design. AI systems that do the work.",
  ogTitle: "A site that brings in work. | Beverly Web Design",
  ogDescription:
    "Web design and AI workflows for Chicago businesses. Fast, clear, and set up so the right people can find you.",
} as const;

export const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const PROJECT_TYPES = [
  "New website",
  "Website redesign",
  "Store",
  "SEO",
  "AI workflow",
  "Something else",
] as const;

export const WORK = [
  {
    title: "Progressive Baptist Church",
    href: "https://progressivechicago.org",
    domain: "progressivechicago.org",
    blurb: "Full church site. Sundays, pastor, ministries, events, kids.",
    image: "/work-pbc.png",
    imageAlt: "Live Progressive Baptist Church homepage, progressivechicago.org",
  },
  {
    title: "Black Boy Literacy Campaign",
    href: "https://blackboylit.com",
    domain: "blackboylit.com",
    blurb: "Campaign site. Register, mentors, donate, mission.",
    image: "/work-bbl.png",
    imageAlt: "Live Black Boy Literacy Campaign homepage, blackboylit.com",
  },
] as const;

export const WEBSITE_BULLETS = [
  "Says what you do in one pass",
  "Ranks for the searches that matter locally",
  "Easy to update after launch",
] as const;

export const WORKFLOW_STEPS = [
  { num: "1", title: "Intake", detail: "form to CRM" },
  { num: "2", title: "Qualify", detail: "score and route" },
  { num: "3", title: "Follow-up", detail: "draft and send" },
  { num: "4", title: "Schedule", detail: "booked" },
] as const;

export const PROCESS_STEPS = [
  {
    num: "1",
    label: "Call",
    title: "Thirty minutes.",
    body: "What you sell, who should find you, what working looks like.",
  },
  {
    num: "2",
    label: "Build",
    title: "You see the real thing.",
    body: "Changes while still easy.",
  },
  {
    num: "3",
    label: "Launch",
    title: "Live, tracked.",
    body: "Set up so the next edit is not a project.",
  },
] as const;
