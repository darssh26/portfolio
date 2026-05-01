export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Engineer, IoT",
    company: "MST",
    location: "Riyadh, KSA · Remote",
    start: "Dec 2023",
    end: "Present",
    bullets: [
      "Lead Flutter and embedded-integration work on IoT product lines, owning architecture decisions across mobile, device, and backend boundaries.",
      "Drive technical direction for new modules and review designs from peer engineers; raise the quality bar for testing, error handling, and release readiness.",
      "Mentor 3 engineers across mobile and firmware.",
    ],
  },
  {
    role: "Flutter Team Lead",
    company: "Walturn",
    location: "USA · Remote, Contract",
    start: "Mar 2024",
    end: "Jun 2024",
    bullets: [
      "Led the Flutter team through delivery of a critical project phase under tight timelines, owning technical direction and day-to-day delegation across the engagement.",
      "Partnered with project leadership and product to keep the milestone on schedule; made architecture and implementation calls on scope, code structure, and review standards.",
      "Led 11 mobile developers to ship features across four applications.",
    ],
  },
  {
    role: "Flutter Team Lead",
    company: "ShopX",
    location: "Cairo, Egypt",
    start: "Nov 2022",
    end: "Dec 2023",
    bullets: [
      "Led the mobile team for a global shopping platform: set team goals, broke down roadmap, delegated tasks, and held the team accountable to delivery dates.",
      "Owned end-to-end release pipeline; shipped iOS and Android apps to Google Play and App Store across multiple regions.",
      "Established code-review standards and CI/CD practices; mentored mid-level engineers on Flutter architecture, state management, and platform-specific concerns.",
      "Led a team of 5 mobile engineers; reduced crash-free rate from 30% to 2%.",
    ],
  },
  {
    role: "Mobile Engineer",
    company: "Age Language",
    location: "Cairo, Egypt · Remote",
    start: "Jan 2017",
    end: "Oct 2022",
    bullets: [
      "Built and maintained a portfolio of educational and consumer apps using Flutter, ActionScript 3, and JavaScript.",
      "Shipped products across Google Play covering school-management, edtech, and city-information categories — gaining end-to-end exposure from product spec to store release.",
    ],
  },
];
