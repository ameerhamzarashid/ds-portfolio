export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  points: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "System Analyst",
    company: "Drevoix",
    location: "Remote / UK",
    period: "July 2025 - May 2026",
    type: "Data, Systems and AI Workflow Development",
    points: [
      "Worked on system analysis, technical documentation and data-driven workflow improvement for digital product and operational processes.",
      "Analysed business requirements and translated them into structured technical tasks, process flows and system improvement recommendations.",
      "Supported AI and data-focused product thinking by connecting user needs, system behaviour, reporting requirements and implementation planning.",
      "Prepared clear documentation for system workflows, feature requirements, technical logic and delivery planning to support development decisions.",
    ],
  },
  {
    role: "Warehouse Operations / Quality Control Specialist",
    company: "Fenwick",
    location: "Newcastle upon Tyne, United Kingdom",
    period: "Nov 2024 - Present",
    type: "Operations, Quality Control and Data-Driven Process Improvement",
    points: [
      "Supported warehouse operations, stock movement, product handling and quality control activities within a fast-paced retail operations environment.",
      "Monitored product quality, supplier compliance and handling issues to help identify defects, damaged items and operational bottlenecks.",
      "Applied data-focused thinking to track recurring quality issues, improve reporting visibility and support faster inventory issue resolution.",
      "Worked with operational teams to improve accuracy, product flow and issue handling across warehouse and quality control processes.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Northumbria University",
    location: "Newcastle upon Tyne, United Kingdom",
    period: "Nov 2024 - Mar 2025",
    type: "Machine Learning, Research and Data Analysis",
    points: [
      "Worked on research-focused data analysis and predictive modelling tasks involving complex scientific and geophysical datasets.",
      "Supported model development, experimentation and evaluation using Python, machine learning methods and structured research workflows.",
      "Built and tested machine learning pipelines, including preprocessing, model training, evaluation and result interpretation.",
      "Created technical outputs and visual summaries to communicate model behaviour, findings and research progress to academic stakeholders.",
    ],
  },
  {
    role: "Business Development Analyst",
    company: "Linked Matrix",
    location: "Lahore, Pakistan",
    period: "2023 - 2024",
    type: "Business Analytics and Market Insight",
    points: [
      "Analysed business, market and customer information to support growth planning, lead generation and decision-making.",
      "Prepared reports and summaries using structured data analysis to identify opportunities, trends and business improvement areas.",
      "Supported stakeholder communication by translating data findings into clear business insights and practical recommendations.",
      "Worked across business development and analytics tasks, strengthening skills in communication, reporting and commercial problem-solving.",
    ],
  },
  {
    role: "User Insight Analyst",
    company: "The Startup Valley",
    location: "Lahore, Pakistan",
    period: "2021 - 2023",
    type: "User Research, Analytics and Product Insight",
    points: [
      "Collected, analysed and interpreted user behaviour data to support product improvement and customer-focused decision-making.",
      "Prepared insight reports using user feedback, engagement information and market observations to identify product opportunities.",
      "Supported early-stage product and business teams with research-backed recommendations for improving user experience and service design.",
      "Developed strong foundations in user analytics, stakeholder communication and evidence-based product thinking.",
    ],
  },
];