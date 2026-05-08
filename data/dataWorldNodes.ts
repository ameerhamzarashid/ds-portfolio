export type DataWorldNode = {
  id: string;
  label: string;
  type: "Skill Hub" | "Project Node" | "Workflow";
  short: string;
  description: string;
  tools: string[];
  projects: string[];
  x: string;
  y: string;
};

export const dataWorldNodes: DataWorldNode[] = [
  {
    id: "python",
    label: "Python",
    type: "Skill Hub",
    short: "Core language for analysis, ML and automation.",
    description:
      "Python is the main language I use for data cleaning, modelling, automation, machine learning and AI workflow development.",
    tools: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch"],
    projects: ["SkillLens AI", "AI Race Engineer", "Alzheimer Detection"],
    x: "18%",
    y: "26%",
  },
  {
    id: "sql",
    label: "SQL",
    type: "Skill Hub",
    short: "Structured querying and analytics.",
    description:
      "SQL is used for extracting, joining, filtering and shaping data before it becomes analysis, dashboards or model input.",
    tools: ["PostgreSQL", "MySQL", "SQLite", "Data Modelling"],
    projects: ["SkillLens AI", "Analytics Dashboards", "Portfolio Data Visuals"],
    x: "76%",
    y: "24%",
  },
  {
    id: "ml",
    label: "Machine Learning",
    type: "Skill Hub",
    short: "Models that turn data into predictions.",
    description:
      "Machine learning is used across my work for classification, forecasting, pattern discovery and decision-support systems.",
    tools: ["scikit-learn", "XGBoost", "TensorFlow", "PyTorch"],
    projects: ["Alzheimer Detection", "Dengue Prediction", "6G FL MEC"],
    x: "12%",
    y: "58%",
  },
  {
    id: "dashboards",
    label: "Dashboards",
    type: "Workflow",
    short: "Making results easy to understand.",
    description:
      "Dashboards and visual summaries help turn technical analysis into something stakeholders can read, compare and act on.",
    tools: ["Power BI", "Tableau", "Excel", "Recharts"],
    projects: ["AI Race Engineer", "Data Visuals", "Quality Dashboards"],
    x: "82%",
    y: "58%",
  },
  {
    id: "genai",
    label: "Generative AI",
    type: "Skill Hub",
    short: "AI workflows for smarter products.",
    description:
      "Generative AI helps build assistants, recommendation flows, retrieval systems and user-facing AI products.",
    tools: ["OpenAI", "LangChain", "RAG", "Embeddings", "Vector Databases"],
    projects: ["SkillLens AI", "AI Career Assistant", "Portfolio AI Concepts"],
    x: "34%",
    y: "78%",
  },
  {
    id: "mlops",
    label: "MLOps",
    type: "Workflow",
    short: "Taking models closer to production.",
    description:
      "MLOps connects experiments, versioning, deployment and reproducible workflows so models can move beyond notebooks.",
    tools: ["Docker", "Kubernetes", "GitHub Actions", "MLflow", "FastAPI"],
    projects: ["SkillLens AI", "6G FL MEC", "Model Deployment Workflows"],
    x: "64%",
    y: "78%",
  },
  {
    id: "skilllens",
    label: "SkillLens AI",
    type: "Project Node",
    short: "AI career intelligence platform.",
    description:
      "SkillLens AI analyses user skills, compares them with target job requirements and recommends personalised upskilling paths.",
    tools: ["Next.js", "TypeScript", "Python", "FastAPI", "Docker"],
    projects: ["Skill Gap Analysis", "Career Intelligence", "AI Product"],
    x: "50%",
    y: "15%",
  },
  {
    id: "research",
    label: "6G Research",
    type: "Project Node",
    short: "Federated learning for edge networks.",
    description:
      "Research project focused on communication-efficient federated learning for dynamic task offloading in 6G-oriented mobile edge computing.",
    tools: ["Python", "C++", "ns-3", "Federated Learning", "DQN"],
    projects: ["6G MEC", "Federated Learning", "Task Offloading"],
    x: "50%",
    y: "88%",
  },
];