export type ResourceLink = {
  label: string;
  description?: string;
  /** Omit while the destination is still being prepared: the row renders as "link pending". */
  href?: string;
  /** Opens in a new tab. Inferred for absolute URLs when left unset. */
  external?: boolean;
};

export type ResourceSection = {
  id: string;
  title: string;
  blurb: string;
  links: ResourceLink[];
};

export type ResourceHub = {
  slug: "admin" | "mentors" | "mentees";
  label: string;
  eyebrow: string;
  /** Shown on the public /resources index card. Never reveals hub contents. */
  description: string;
  /** Shown at the top of the unlocked hub. */
  intro: string;
  sections: ResourceSection[];
};

export const resourceHubs: ResourceHub[] = [
  {
    slug: "admin",
    label: "Admin Hub",
    eyebrow: "Program operations",
    description: "Planning, coordination, and shared program resources for the CSR-x administrative team.",
    intro:
      "Everything the admin team needs to run a cohort, in one place. Start with the operations calendar, then work down through the section that matches what you are doing this week.",
    sections: [
      {
        id: "start-here",
        title: "Start here",
        blurb:
          "New to the admin team, or coming back after a break? These four documents cover how CSR-x runs and what each admin is responsible for.",
        links: [
          { label: "Admin onboarding guide", description: "Roles, tools, and access checklist for new admins." },
          { label: "Operations handbook", description: "How the program runs, week by week, from applications to symposium." },
          { label: "Program Format", description: "The public description of the program structure.", href: "/program-format/" },
          { label: "Program Policy", description: "The public policy page, including conduct and expectations.", href: "/program-policy/" },
        ],
      },
      {
        id: "calendar",
        title: "Calendar and coordination",
        blurb:
          "The shared sources of truth for dates and ownership. Update these first when a deadline moves — the mentor and mentee hubs point at the same calendar.",
        links: [
          { label: "Master program calendar", description: "All cohort milestones, deadlines, and admin meetings." },
          { label: "Task board", description: "Current sprint of admin work and who owns each item." },
          { label: "Weekly meeting notes", description: "Running agenda and decision log." },
          { label: "Contact directory", description: "Admins, mentors, and institutional contacts." },
        ],
      },
      {
        id: "applications",
        title: "Applications and selection",
        blurb:
          "Materials for the annual intake cycle. Reviewers should read the rubric before opening the applicant tracker so scoring stays consistent across readers.",
        links: [
          { label: "Applicant tracker", description: "Live status of every application in the current cycle." },
          { label: "Review rubric", description: "Scoring criteria and calibration examples." },
          { label: "Interview guide", description: "Question bank and note-taking template." },
          { label: "Decision letter templates", description: "Acceptance, waitlist, and rejection copy." },
          { label: "Public application page", description: "What applicants see.", href: "/apply/" },
        ],
      },
      {
        id: "matching",
        title: "Mentors and mentees",
        blurb:
          "Rosters, matching, and the onboarding sequence for both sides of the program. Keep the roster current — the hub passwords are distributed from it.",
        links: [
          { label: "Mentor roster", description: "Contact details, availability, and cohort assignment." },
          { label: "Mentee roster", description: "Cohort membership and project topics." },
          { label: "Matching worksheet", description: "Interest and availability matrix used to pair mentors with mentees." },
          { label: "Onboarding email sequence", description: "Scheduled messages for both groups." },
          { label: "Escalation protocol", description: "What to do when a pairing or participant needs support." },
          { label: "2026 Mentors", description: "The public mentor directory.", href: "/2026-mentors/" },
        ],
      },
      {
        id: "symposium",
        title: "Symposium and events",
        blurb:
          "Planning documents for the end-of-program symposium and any mid-cycle events. Logistics owners are named at the top of each document.",
        links: [
          { label: "Symposium run-of-show", description: "Minute-by-minute schedule and speaker order." },
          { label: "Venue and logistics", description: "Bookings, AV, catering, and accessibility notes." },
          { label: "Abstract review queue", description: "Submissions awaiting admin and mentor review." },
          { label: "Program booklet source", description: "Editable layout for the printed program." },
          { label: "2026 Cohorts", description: "The public cohort page and published materials.", href: "/2026-cohorts/" },
        ],
      },
      {
        id: "comms",
        title: "Communications and brand",
        blurb:
          "Anything that goes out under the CSR-x name. Use the approved assets rather than re-exporting the logo, so the mark stays consistent everywhere.",
        links: [
          { label: "Brand assets", description: "Logos, colours, and typography." },
          { label: "Email templates", description: "Announcements, reminders, and newsletters." },
          { label: "Social media kit", description: "Post templates and the publishing calendar." },
          { label: "Website update guide", description: "How to edit and redeploy this site." },
          { label: "Statement on AI Usage", description: "The public position on AI tools.", href: "/ai-usage/" },
        ],
      },
      {
        id: "admin-ops",
        title: "Finance and records",
        blurb:
          "Budget, sponsorship, and the records we are obliged to keep. Anything containing participant data stays in the restricted folder — never attach it to email.",
        links: [
          { label: "Budget tracker", description: "Current-year spend against budget." },
          { label: "Reimbursement form", description: "For mentor and admin expenses." },
          { label: "Sponsor pipeline", description: "Outreach status and partnership agreements." },
          { label: "Data handling policy", description: "How participant data is stored, shared, and deleted." },
        ],
      },
    ],
  },
  {
    slug: "mentors",
    label: "Mentor Hub",
    eyebrow: "Teaching resources",
    description: "Guides, timelines, and materials for mentors leading CSR-x cohorts.",
    intro:
      "Your teaching toolkit for the cohort. The handbook and milestone timeline are the two documents worth reading in full before your first session; everything below is there when you need it.",
    sections: [
      {
        id: "start-here",
        title: "Start here",
        blurb:
          "Read these before your first meeting with your mentee. They set out what CSR-x expects of a mentor and what your mentee has already been told to expect of you.",
        links: [
          { label: "Mentor handbook", description: "Your responsibilities, time commitment, and support channels." },
          { label: "First meeting guide", description: "A structure for the first session, with prompts." },
          { label: "Program Format", description: "How the program is structured end to end.", href: "/program-format/" },
          { label: "Program Policy", description: "Conduct, expectations, and boundaries.", href: "/program-policy/" },
          { label: "Statement on AI Usage", description: "What mentees may and may not use AI tools for.", href: "/ai-usage/" },
        ],
      },
      {
        id: "running-cohort",
        title: "Running your cohort",
        blurb:
          "Session-by-session structure. The milestone timeline is the same one your mentees see, so you can plan against it without re-deriving deadlines.",
        links: [
          { label: "Milestone timeline", description: "Every deliverable and its due date." },
          { label: "Weekly session plans", description: "Suggested agendas and discussion prompts for each week." },
          { label: "Meeting log template", description: "Track attendance, progress, and follow-ups." },
          { label: "Scheduling and availability", description: "Book rooms and share your office hours." },
        ],
      },
      {
        id: "teaching",
        title: "Teaching research skills",
        blurb:
          "Material you can hand straight to a mentee or teach from. Each guide is short enough to work through inside a single session.",
        links: [
          { label: "Scoping a research question", description: "Narrowing a broad interest into a feasible project." },
          { label: "Literature review guide", description: "Searching, reading, and synthesising sources." },
          { label: "Methods primers", description: "Short introductions by discipline." },
          { label: "Data analysis resources", description: "Tooling and statistics refreshers." },
          { label: "Teaching scientific writing", description: "Structure, clarity, and revision technique." },
          { label: "Research ethics briefing", description: "Consent, attribution, and integrity." },
        ],
      },
      {
        id: "feedback",
        title: "Feedback and evaluation",
        blurb:
          "Shared rubrics keep feedback consistent across cohorts. Use the same rubric your mentee can see, and record check-ins so the admin team can spot who needs support.",
        links: [
          { label: "Abstract rubric", description: "Criteria used to assess abstracts." },
          { label: "Poster rubric", description: "Criteria used to assess posters." },
          { label: "Paper rubric", description: "Criteria used to assess final papers." },
          { label: "Midpoint check-in form", description: "Short progress report to the admin team." },
          { label: "Final evaluation form", description: "End-of-program assessment and mentee reference." },
          { label: "Giving written feedback", description: "Worked examples of useful and unhelpful comments." },
        ],
      },
      {
        id: "symposium",
        title: "Symposium preparation",
        blurb:
          "The last stretch of the program. Submission deadlines are firm — flag a mentee at risk of missing one with the admin team early rather than at the deadline.",
        links: [
          { label: "Submission deadlines", description: "Abstract, poster, and paper cut-offs." },
          { label: "Poster template", description: "The CSR-x poster layout." },
          { label: "Presentation coaching guide", description: "Rehearsal structure and question prep." },
          { label: "Past cohort materials", description: "Published abstracts, posters, and papers.", href: "/2026-cohorts/" },
        ],
      },
      {
        id: "support",
        title: "Support and admin",
        blurb:
          "Practical matters and where to turn when something is outside your remit. Anything involving a participant's wellbeing goes to the admin team the same day.",
        links: [
          { label: "Mentor FAQ", description: "Common questions, answered." },
          { label: "Hours and stipend form", description: "Log mentoring hours." },
          { label: "Contact the admin team", description: "Direct line for questions and escalations." },
          { label: "Raising a concern", description: "What to do if a mentee needs additional support." },
        ],
      },
    ],
  },
  {
    slug: "mentees",
    label: "Mentee Hub",
    eyebrow: "Research workspace",
    description: "Research guidance, milestones, and resources for CSR-x mentees.",
    intro:
      "Your working space for the program. If you are unsure what to do next, check the milestone timeline first — it lists every deadline — and bring anything unresolved to your mentor.",
    sections: [
      {
        id: "start-here",
        title: "Start here",
        blurb:
          "Read these in your first week. They explain how the program runs, what you are expected to produce, and the rules around using AI tools in your research.",
        links: [
          { label: "Mentee welcome guide", description: "What to expect, week by week." },
          { label: "Milestone timeline", description: "Every deadline in the program." },
          { label: "Program Format", description: "How the program is structured.", href: "/program-format/" },
          { label: "Program Policy", description: "What is expected of you.", href: "/program-policy/" },
          { label: "Statement on AI Usage", description: "Read this before using any AI tool in your work.", href: "/ai-usage/" },
        ],
      },
      {
        id: "research",
        title: "Doing your research",
        blurb:
          "Getting from a rough interest to a question you can actually answer. Work through these with your mentor rather than alone — narrowing a topic is the hardest part of the program.",
        links: [
          { label: "Choosing a research topic", description: "How to narrow a broad interest into a project." },
          { label: "Literature search guide", description: "Where to look and how to keep track of what you find." },
          { label: "Google Scholar", description: "General academic search.", href: "https://scholar.google.com" },
          { label: "PubMed", description: "Biomedical and life sciences literature.", href: "https://pubmed.ncbi.nlm.nih.gov" },
          { label: "arXiv", description: "Preprints in physics, maths, and computer science.", href: "https://arxiv.org" },
          { label: "Zotero", description: "Free reference manager for organising your sources.", href: "https://www.zotero.org" },
          { label: "Research ethics for students", description: "Consent, attribution, and academic integrity." },
        ],
      },
      {
        id: "writing",
        title: "Writing your paper",
        blurb:
          "Templates and guidance for each written deliverable. Start from the template rather than a blank document — the structure is what reviewers assess against.",
        links: [
          { label: "Paper template", description: "The CSR-x paper structure and formatting." },
          { label: "Writing an abstract", description: "What belongs in 250 words, with examples." },
          { label: "Citation style guide", description: "How to cite and reference correctly." },
          { label: "Revision checklist", description: "Read this before every submission." },
          { label: "Past cohort papers", description: "Published work from previous mentees.", href: "/2026-cohorts/" },
        ],
      },
      {
        id: "symposium",
        title: "Poster and presentation",
        blurb:
          "The symposium is where your project meets an audience. Give yourself more rehearsal time than feels necessary; most of the marks come from how clearly you explain the work.",
        links: [
          { label: "Poster template", description: "The CSR-x poster layout." },
          { label: "Poster design guide", description: "Layout, typography, and figures that read from a distance." },
          { label: "Presenting your research", description: "How to talk through a poster and handle questions." },
          { label: "Symposium schedule", description: "Date, venue, and running order." },
        ],
      },
      {
        id: "submissions",
        title: "Deadlines and submissions",
        blurb:
          "Where your work is handed in and how it is assessed. The rubrics are the same ones your mentor uses, so read them before you submit, not after.",
        links: [
          { label: "Submission portal", description: "Upload abstracts, posters, and papers." },
          { label: "Assessment rubrics", description: "Exactly what your work is marked against." },
          { label: "Extension request form", description: "Ask early if a deadline is not going to work." },
        ],
      },
      {
        id: "support",
        title: "Support",
        blurb:
          "You are not expected to work this out on your own. Reach out early — a question asked in week two is much easier to solve than the same question in week ten.",
        links: [
          { label: "Contact your mentor", description: "Availability and office hours." },
          { label: "Contact the admin team", description: "For anything your mentor cannot resolve." },
          { label: "Technical help", description: "Software, access, and account problems." },
          { label: "Wellbeing resources", description: "Support available to you during the program." },
        ],
      },
    ],
  },
];

export function getHub(slug: ResourceHub["slug"]): ResourceHub {
  const hub = resourceHubs.find((entry) => entry.slug === slug);
  if (!hub) throw new Error(`Unknown resource hub: ${slug}`);
  return hub;
}
