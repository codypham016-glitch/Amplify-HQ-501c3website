export const site = {
  name: "Amplify HQ",
  legalName: "Amplify HQ",
  taxStatus: "A 501(c)(3) nonprofit",
  tagline: "Business × Psychology for the next generation.",
  description:
    "Amplify HQ connects high school students with businesses, professionals, and real-world opportunities at the intersection of business and human behavior.",
  concept: "Think · Connect · Amplify",
  launchTerm: "Fall 2026",
  url: "https://amplifyhq.org",
  contactEmail: "hello@amplifyhq.org",
};

export type NavItem = {
  label: string;
  href: string;
};

/** Flat, no dropdowns. Recruitment roles get top-level placement. */
export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Chapters", href: "/chapters" },
  { label: "Start a Chapter", href: "/start-a-chapter" },
  { label: "Partners", href: "/partners" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Organization",
    items: [
      { label: "About", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Impact", href: "/impact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Participate",
    items: [
      { label: "Find a chapter", href: "/chapters" },
      { label: "Start a chapter", href: "/start-a-chapter" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    heading: "Support",
    items: [
      { label: "Partner with us", href: "/partners" },
      { label: "Donate", href: "/donate" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

/* ---------------------------------------------------------------- *
 * Chapters
 * ---------------------------------------------------------------- */

export type Chapter = {
  slug: string;
  school: string;
  shortName: string;
  monogram: string;
  city: string;
  state: string;
  district: string;
  status: "founding";
};

export const chapters: Chapter[] = [
  {
    slug: "dulles",
    school: "Dulles High School",
    shortName: "Dulles",
    monogram: "D",
    city: "Sugar Land",
    state: "TX",
    district: "Fort Bend ISD",
    status: "founding",
  },
  {
    slug: "austin",
    school: "Stephen F. Austin High School",
    shortName: "Austin",
    monogram: "A",
    city: "Sugar Land",
    state: "TX",
    district: "Fort Bend ISD",
    status: "founding",
  },
  {
    slug: "clements",
    school: "William P. Clements High School",
    shortName: "Clements",
    monogram: "C",
    city: "Sugar Land",
    state: "TX",
    district: "Fort Bend ISD",
    status: "founding",
  },
  {
    slug: "elkins",
    school: "Elkins High School",
    shortName: "Elkins",
    monogram: "E",
    city: "Missouri City",
    state: "TX",
    district: "Fort Bend ISD",
    status: "founding",
  },
];

/* ---------------------------------------------------------------- *
 * Program calendar — the actual chapter year.
 * Chapters meet once per month; each chapter adapts the focus to
 * the resources available in its own community.
 * ---------------------------------------------------------------- */

export type CalendarEntry = {
  months: string;
  title: string;
  detail: string;
  kind: "meeting" | "workshop" | "speaker" | "competition" | "showcase";
};

export type Semester = {
  name: string;
  entries: CalendarEntry[];
};

export const programCalendar: Semester[] = [
  {
    name: "Fall Semester",
    entries: [
      {
        months: "Aug / Sep",
        title: "Recruitment & welcome meeting",
        detail:
          "Chapters open membership, hold their first meeting, and introduce the Amplify HQ model to new members.",
        kind: "meeting",
      },
      {
        months: "October",
        title: "Consumer psychology workshop",
        detail:
          "How buying decisions actually get made — attention, framing, and the psychology behind what people choose.",
        kind: "workshop",
      },
      {
        months: "November",
        title: "Marketing & branding workshop",
        detail:
          "What separates a brand people remember from one they scroll past, and the behavioral principles underneath it.",
        kind: "workshop",
      },
      {
        months: "December",
        title: "Guest speaker & semester reflection",
        detail:
          "A professional from business, psychology, or a field between them — followed by a chapter debrief on the term.",
        kind: "speaker",
      },
    ],
  },
  {
    name: "Spring Semester",
    entries: [
      {
        months: "January",
        title: "Behavioral economics workshop",
        detail:
          "Cognitive biases, incentives, and why rational-actor models miss how people really decide.",
        kind: "workshop",
      },
      {
        months: "February",
        title: "Business case study competition",
        detail:
          "Teams analyze a real business problem and defend a recommendation in front of judges.",
        kind: "competition",
      },
      {
        months: "March",
        title: "Consulting & presentation workshop",
        detail:
          "Structuring an argument, building a deck, and presenting to an audience that asks hard questions.",
        kind: "workshop",
      },
      {
        months: "April",
        title: "Member showcase & officer transition",
        detail:
          "Members present the year's work, chapters recognize standout contributors, and next year's officers step up.",
        kind: "showcase",
      },
    ],
  },
];

/* ---------------------------------------------------------------- *
 * Homepage content
 * ---------------------------------------------------------------- */

export type WhatWeDo = {
  index: string;
  title: string;
  lede: string;
  detail: string;
};

export const whatWeDo: WhatWeDo[] = [
  {
    index: "01",
    title: "Learn",
    lede: "Workshops in consumer psychology, marketing, and behavioral economics.",
    detail:
      "Monthly sessions cover the material most high schools never offer — how attention works, why people buy, and what actually drives a decision.",
  },
  {
    index: "02",
    title: "Connect",
    lede: "Guest speakers and professionals from business and behavioral fields.",
    detail:
      "Chapters bring in people already doing the work, in formats small enough that a student can ask a real question and get a real answer.",
  },
  {
    index: "03",
    title: "Build",
    lede: "Case competitions, consulting projects, and a year-end showcase.",
    detail:
      "Members produce work with an audience — analyses, recommendations, and presentations defended in front of judges and partners.",
  },
];

export type Intersection = {
  title: string;
  detail: string;
};

export const businessXPsychology: Intersection[] = [
  { title: "Consumer behavior", detail: "Why people buy, and how attention gets earned." },
  { title: "Marketing psychology", detail: "Framing, narrative, and persuasion in modern brands." },
  { title: "Product & UX", detail: "Designing for how people actually think and decide." },
  { title: "Entrepreneurship", detail: "Building around real human problems." },
  { title: "Leadership", detail: "Motivation, culture, and the psychology of teams." },
  { title: "Behavioral economics", detail: "Incentives, biases, and decision architecture." },
  { title: "Decision-making", detail: "Frameworks for hard calls under uncertainty." },
];

/* ---------------------------------------------------------------- *
 * Partner pathways
 * ---------------------------------------------------------------- */

export type PartnerPathway = {
  index: string;
  title: string;
  detail: string;
  commitment: string;
};

export const partnerPathways: PartnerPathway[] = [
  {
    index: "01",
    title: "Speak to a chapter",
    detail:
      "Share what your work actually looks like — the path in, the parts nobody warns you about, and what you'd tell a student starting now.",
    commitment: "One hour, once",
  },
  {
    index: "02",
    title: "Judge a case competition",
    detail:
      "Evaluate student recommendations in February and give the kind of feedback that only comes from someone who's made the call for real.",
    commitment: "One evening",
  },
  {
    index: "03",
    title: "Host a consulting project",
    detail:
      "Hand a chapter team a real problem — a market question, a positioning challenge, a customer you don't understand yet.",
    commitment: "A few hours across a term",
  },
  {
    index: "04",
    title: "Offer shadowing or an internship",
    detail:
      "Give a student a day, a week, or a summer inside your organization.",
    commitment: "Varies",
  },
];

export type PartnerCategory = { label: string; note: string };

export const partnerCategories: PartnerCategory[] = [
  { label: "Business partners", note: "Consulting hosts, internships, project sponsors." },
  { label: "Professional partners", note: "Guest speakers, mentors, competition judges." },
  { label: "Educational partners", note: "Schools, universities, faculty sponsors." },
  { label: "Community partners", note: "Nonprofits and civic groups on joint initiatives." },
];
