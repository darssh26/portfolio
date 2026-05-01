export type SkillGroup = {
  heading: string;
  emphasis?: boolean; // visually larger / heavier — used for Mobile to reinforce hero positioning
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    heading: "Mobile & Frontend",
    emphasis: true,
    items: [
      "Flutter (6+ years)",
      "iOS delivery",
      "Android delivery",
      "Cross-platform development",
      "Figma",
    ],
  },
  {
    heading: "Leadership",
    items: [
      "Team leadership",
      "Mentoring",
      "Technical strategy",
      "Code review",
      "Roadmap planning",
      "Agile delivery",
      "Stakeholder communication",
    ],
  },
  {
    heading: "Languages",
    items: [
      "Dart",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "NoSQL",
      "ActionScript 3",
    ],
  },
  {
    heading: "Backend & Cloud",
    items: ["Node.js", "AWS", "Google Cloud", "RESTful APIs"],
  },
  {
    heading: "Engineering",
    items: [
      "CI/CD",
      "System design",
      "Architecture decisions",
      "Quality standards",
    ],
  },
  {
    heading: "AI / ML",
    items: [
      "Applied Machine Learning",
      "RAG architectures",
      "AI agent systems",
      "AWS ML Specialty",
    ],
  },
];
