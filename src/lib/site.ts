export const site = {
  name: "Amplify HQ",
  legalName: "Amplify HQ",
  taxStatus: "A 501(c)(3) nonprofit",
  tagline: "The intersection of business and psychology, built for students.",
  description:
    "Amplify is an organization dedicated to helping students explore the intersection of business and psychology. Through guest speakers, community events, and internship and volunteer opportunities, we build a community of people curious about behavioral science, the brain, and how these fields connect to the business world.",
  concept: "Ask · Learn · Build",
  launchTerm: "Fall 2026",
  url: "https://amplifyhq.org",
  contactEmail: "hello@amplifyhq.org",
};

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Chapters", href: "/chapters" },
  { label: "Team", href: "/team" },
  { label: "Start a Chapter", href: "/start-a-chapter" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Organization",
    items: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
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
    name: "Fall",
    entries: [
      {
        months: "Aug / Sep",
        title: "Welcome & recruitment",
        detail:
          "Chapters open membership, host their first meeting, and set the year's goals with new members.",
        kind: "meeting",
      },
      {
        months: "October",
        title: "Why people buy",
        detail:
          "A workshop on consumer psychology — how attention, framing, and small design choices shape what people pick.",
        kind: "workshop",
      },
      {
        months: "November",
        title: "What makes a brand stick",
        detail:
          "Marketing and branding, and the behavioral reasons some brands live in your head while others disappear.",
        kind: "workshop",
      },
      {
        months: "December",
        title: "A conversation with someone doing the work",
        detail:
          "A guest from business, psychology, or somewhere in between — and time for the questions students actually want to ask.",
        kind: "speaker",
      },
    ],
  },
  {
    name: "Spring",
    entries: [
      {
        months: "January",
        title: "How people actually decide",
        detail:
          "Behavioral economics — biases, incentives, and why textbook rationality misses how choices really get made.",
        kind: "workshop",
      },
      {
        months: "February",
        title: "Case competition",
        detail:
          "Teams take on a real business problem and defend a recommendation in front of judges from the partner network.",
        kind: "competition",
      },
      {
        months: "March",
        title: "Building an argument that lands",
        detail:
          "Consulting fundamentals — structuring a case, building a deck, presenting to a room that pushes back.",
        kind: "workshop",
      },
      {
        months: "April",
        title: "Year-end showcase",
        detail:
          "Members present the year's projects, chapters recognize standout contributors, and next year's officers step up.",
        kind: "showcase",
      },
    ],
  },
];

/* ---------------------------------------------------------------- *
 * Homepage content
 * ---------------------------------------------------------------- */

export type Pillar = {
  index: string;
  title: string;
  lede: string;
  detail: string;
};

export const pillars: Pillar[] = [
  {
    index: "01",
    title: "Learn",
    lede: "Workshops on the questions your school doesn't teach.",
    detail:
      "Why people buy. What makes a leader worth following. How brands live in your head. The psychology behind the business, taught by students and professionals together.",
  },
  {
    index: "02",
    title: "Connect",
    lede: "Real conversations with the people doing the work.",
    detail:
      "Founders, marketers, researchers, and consultants — in rooms small enough that a student can ask a real question and get a real answer.",
  },
  {
    index: "03",
    title: "Build",
    lede: "Actual projects with actual audiences.",
    detail:
      "A case competition every February. Consulting projects with local businesses. A year-end showcase where members present the work they did.",
  },
];

/* Concrete curiosity questions — the beating heart of the site copy. */
export const openingQuestions = [
  "What makes someone choose one product over another?",
  "Why do some brands stick while others disappear?",
  "How do great leaders actually get people to follow them?",
  "What separates an idea people talk about from one they act on?",
  "Why do smart people make bad decisions?",
];

export type Field = {
  title: string;
  question: string;
};

/* Replaces the abstract "intersection points of study" grid. */
export const fields: Field[] = [
  {
    title: "Consumer behavior",
    question: "What actually happens in someone's head before they buy?",
  },
  {
    title: "Brand & marketing",
    question: "Why do you remember one ad and forget a thousand others?",
  },
  {
    title: "Product & design",
    question: "How do you build something people don't have to be taught to use?",
  },
  {
    title: "Entrepreneurship",
    question: "What separates a business people love from one they tolerate?",
  },
  {
    title: "Leadership",
    question: "Why do people follow one person and quietly ignore another?",
  },
  {
    title: "Behavioral economics",
    question: "Why do people make choices that don't match what they want?",
  },
];

/* Who chapters bring into the room. */
export const professionalRoles = [
  "Founders",
  "Marketers",
  "Consultants",
  "Researchers",
  "Product designers",
  "Executives",
];

/* Ways different audiences can participate — for the "who's this for" section. */
export type Audience = {
  label: string;
  question: string;
  cta: string;
  href: string;
};

export const audiences: Audience[] = [
  {
    label: "For students",
    question: "Curious about business, brands, marketing, or how people work?",
    cta: "Find your chapter",
    href: "/chapters",
  },
  {
    label: "For future chapter leads",
    question: "Want to build this at your own high school?",
    cta: "Apply to lead",
    href: "/start-a-chapter",
  },
  {
    label: "For professionals",
    question: "Willing to spend an hour telling students what you actually do?",
    cta: "Speak to a chapter",
    href: "/partners",
  },
  {
    label: "For businesses",
    question: "Have a real problem a team of sharp students could take a swing at?",
    cta: "Host a project",
    href: "/partners",
  },
  {
    label: "For supporters",
    question: "Believe high schoolers deserve this kind of exposure?",
    cta: "Support the work",
    href: "/donate",
  },
];

/* ---------------------------------------------------------------- *
 * Chapter Lead responsibilities (from official Amplify docs)
 * ---------------------------------------------------------------- */

export type ChapterLeadArea = {
  title: string;
  actions: string[];
};

export const chapterLeadAreas: ChapterLeadArea[] = [
  {
    title: "Build partnerships in your community",
    actions: [
      "Look at the organizations in your school and neighborhood — who can you collaborate with?",
      "Connect with local businesses to explore sponsorships or partnerships that can support your events.",
    ],
  },
  {
    title: "Grow your chapter's leadership team",
    actions: [
      "Identify students at your school who are passionate about behavioral science and business.",
      "Help recruit and mentor peers to take on leadership roles at the local level.",
    ],
  },
  {
    title: "Create opportunities for your members",
    actions: [
      "Connect students with internship and volunteer opportunities in related fields.",
      "Partner with local organizations to provide meaningful ways for members to apply what they learn.",
    ],
  },
  {
    title: "Organize events and speakers",
    actions: [
      "Reach out to professionals working at the intersection of business and psychology, and invite them to speak.",
      "Host in-person events at places like your local library or student center.",
      "Create community touchpoints — booths at local carnivals or farmers markets, with infographics about Amplify.",
    ],
  },
];

/* Real chapter roles from official Amplify structure. */
export const chapterRoles = [
  "1–2 Chapter Leads / Presidents",
  "1 Vice President",
  "1 Secretary",
  "2 Social Media Chairs",
  "2 Events Chairs",
];

/* Real national board roles. */
export type NationalRole = {
  title: string;
  detail: string;
};

export const nationalRoles: NationalRole[] = [
  {
    title: "VP of Marketing",
    detail: "Lead Amplify's branding, design, and social media presence.",
  },
  {
    title: "VP of Strategy",
    detail: "Shape Amplify's long-term vision and national initiatives.",
  },
  {
    title: "VP of Outreach",
    detail: "Build partnerships with schools, organizations, and sponsors nationwide.",
  },
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
      "Tell students what your work actually looks like — the path in, the parts nobody warns you about, what you wish someone had told you.",
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
  { label: "Businesses", note: "Consulting hosts, internships, project sponsors." },
  { label: "Professionals", note: "Speakers, mentors, competition judges." },
  { label: "Schools & universities", note: "Faculty sponsors, campus partners." },
  { label: "Community organizations", note: "Nonprofits and civic groups on joint work." },
];
