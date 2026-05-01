export type ProjectLink = {
  label: "iOS" | "Android" | "GitHub" | "Web";
  url: string;
};

export type Project = {
  name: string;
  description: string;
  links: ProjectLink[];
};

export type ProjectGroup = {
  heading: string;
  projects: Project[];
};

export const projectGroups: ProjectGroup[] = [
  {
    heading: "Leadership & Production Delivery",
    projects: [
      {
        name: "ShopX",
        description: "Led mobile team to ship global shopping app across stores.",
        links: [
          {
            label: "iOS",
            url: "https://apps.apple.com/eg/app/shopx-global-shopping/id1661978394",
          },
          {
            label: "Android",
            url: "https://play.google.com/store/apps/details?id=com.shopxco.shopx",
          },
        ],
      },
      {
        name: "Tank Payments",
        description: "Financial account product purpose-built for freight carriers.",
        links: [
          {
            label: "iOS",
            url: "https://apps.apple.com/us/app/tank-payments/id6467872756",
          },
        ],
      },
      {
        name: "BizBuradayız",
        description: "Roadside-assistance platform.",
        links: [
          {
            label: "iOS",
            url: "https://apps.apple.com/us/app/bizburaday%C4%B1z/id6468649321",
          },
        ],
      },
    ],
  },
  {
    heading: "IoT & Smart Devices",
    projects: [
      {
        name: "Thkey",
        description: "Smart access-control app.",
        links: [
          {
            label: "iOS",
            url: "https://apps.apple.com/us/app/thkey/id6740452628",
          },
          {
            label: "Android",
            url: "https://play.google.com/store/apps/details?id=com.meshkati.thkey",
          },
        ],
      },
      {
        name: "Rack",
        description: "Retail-store IoT automation.",
        links: [
          {
            label: "iOS",
            url: "https://apps.apple.com/us/app/rack/id6503873387?platform=iphone",
          },
          {
            label: "Android",
            url: "https://play.google.com/store/apps/details?id=com.meshkati.rack",
          },
        ],
      },
    ],
  },
  {
    heading: "EdTech & Consumer",
    projects: [
      {
        name: "MiSK",
        description: "Arabic learning for non-native children.",
        links: [
          {
            label: "iOS",
            url: "https://apps.apple.com/us/app/misk/id1548990632",
          },
          {
            label: "Android",
            url: "https://play.google.com/store/apps/details?id=com.miskarabic.MiSK1",
          },
        ],
      },
      {
        name: "Dalilak",
        description: "City-information app.",
        links: [
          {
            label: "iOS",
            url: "https://apps.apple.com/eg/app/%D8%AF%D9%84%D9%8A%D9%84%D9%83-dalilak/id6477162339",
          },
          {
            label: "Android",
            url: "https://play.google.com/store/apps/details?id=app.dalilak.dalilak",
          },
        ],
      },
      {
        name: "My Thinking Skills",
        description: "Educational app for thinking-skill development.",
        links: [
          {
            label: "Android",
            url: "https://play.google.com/store/apps/details?id=com.alcegypt.maryam",
          },
        ],
      },
      {
        name: "Skills",
        description: "Children's skill-development app.",
        links: [
          {
            label: "Android",
            url: "https://play.google.com/store/apps/details?id=com.alcegypt.skills",
          },
        ],
      },
      {
        name: "Ad3ia",
        description: "Arabic e-book reader.",
        links: [
          {
            label: "Android",
            url: "https://play.google.com/store/apps/details?id=com.alcegypt.ad3ia",
          },
        ],
      },
      {
        name: "Wisdom",
        description: "Interactive Arabic-learning activities.",
        links: [
          {
            label: "Android",
            url: "https://play.google.com/store/apps/details?id=com.alcegypt.wisdom_sample",
          },
        ],
      },
    ],
  },
  {
    heading: "Open Source & Capstone",
    projects: [
      {
        name: "AWS ML Exam Practice",
        description: "Community study tool for AWS ML Specialty candidates.",
        links: [
          { label: "GitHub", url: "https://github.com/darssh26/aws-ml-exam" },
        ],
      },
      {
        name: "AI Coder",
        description: "Computer Science Diploma capstone project.",
        links: [
          { label: "GitHub", url: "https://github.com/darssh26/AI-Coder" },
        ],
      },
    ],
  },
];
