import type { ProjectVisual } from "@/components/ProjectVisualGallery";

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  workflow: string[];
  outcomes: string[];
  visuals: ProjectVisual[];
  github: string;
  demo?: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "skilllens-ai",
    title: "SkillLens AI",
    category: "Generative AI / Career Intelligence",
    summary:
      "A full-stack workforce intelligence and career analytics platform for job market trends, CV matching, salary prediction, skill gap analysis and personalised learning roadmaps.",
    problem:
      "Job seekers often struggle to understand which skills they already have, which skills are missing and how their profile compares with target roles. SkillLens AI turns that into a structured data and AI workflow.",
    solution:
      "SkillLens AI combines data engineering, databases, machine learning, FastAPI, Next.js, dashboards, Docker and CI/CD into one complete AI career intelligence product.",
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "scikit-learn",
      "Recharts",
      "Docker",
      "GitHub Actions",
    ],
    features: [
      "Workforce market intelligence dashboard",
      "CV skill extraction",
      "CV-to-job matching",
      "Skill gap analysis",
      "Personalised learning roadmap generation",
      "Salary prediction model",
      "Job category classification model",
      "FastAPI backend with modular routes",
      "Next.js frontend with dashboard pages",
      "Docker full-stack setup",
    ],
    workflow: [
      "Generate or ingest job market data",
      "Run data quality checks and store data",
      "Extract skills from CV and job descriptions",
      "Compare user skills with target roles",
      "Predict salary and classify job categories",
      "Generate skill gap recommendations and roadmaps",
      "Expose outputs through FastAPI and Next.js frontend",
    ],
    outcomes: [
      "Shows end-to-end AI product development",
      "Demonstrates data engineering, ML, backend and frontend integration",
      "Shows MLOps thinking through Docker and CI/CD",
      "Presents a practical career-tech product rather than a simple chatbot",
    ],
    visuals: [
      {
        title: "Career Intelligence Dashboard",
        subtitle:
          "Market trends, job categories, salary ranges and in-demand skills are presented as a dashboard-style product view.",
        type: "dashboard",
        metrics: ["Skill Match", "Market Fit", "Roadmap"],
      },
      {
        title: "Full-Stack System Architecture",
        subtitle:
          "The project connects a Next.js frontend, FastAPI backend, data platform, ML services and database layer.",
        type: "architecture",
        flow: ["Frontend", "API", "ML Services", "Database"],
      },
      {
        title: "CV Matching Workflow",
        subtitle:
          "The CV matching flow extracts skills, compares them with job requirements and returns matched and missing skills.",
        type: "workflow",
        flow: ["CV Input", "Skill Extraction", "Job Matching", "Roadmap"],
      },
      {
        title: "Machine Learning Layer",
        subtitle:
          "Salary prediction and job category classification models support the intelligence layer of the product.",
        type: "model",
      },
    ],
    github: "https://github.com/ameerhamzarashid/skilllens-ai",
    demo: "",
  },
  {
    slug: "ai-race-engineer",
    title: "AI Race Engineer",
    category: "Data Analytics / Telemetry",
    summary:
      "A Formula 1 telemetry analytics project focused on race performance analysis, lap comparison and visual storytelling.",
    problem:
      "Racing telemetry is difficult to understand without structured analysis. The project focuses on turning speed, lap and sector signals into clear performance insights.",
    solution:
      "The project uses Python-based analysis and visual summaries to explore lap performance, telemetry behaviour and race patterns.",
    stack: [
      "Python",
      "Pandas",
      "Telemetry Analysis",
      "Data Visualisation",
      "Performance Analytics",
    ],
    features: [
      "Telemetry data analysis",
      "Lap comparison",
      "Driver performance insight",
      "Speed and sector analysis",
      "Race analytics storytelling",
    ],
    workflow: [
      "Load telemetry data",
      "Clean and structure race data",
      "Compare lap and driver performance",
      "Generate visual summaries",
      "Explain insights in a readable format",
    ],
    outcomes: [
      "Shows applied analytics beyond generic datasets",
      "Demonstrates Python data analysis",
      "Highlights visual storytelling",
      "Connects data science with a real-world sports context",
    ],
    visuals: [
      {
        title: "Telemetry Dashboard",
        subtitle:
          "A visual summary of racing performance using lap, speed and sector-style metrics.",
        type: "dashboard",
        metrics: ["Lap Pace", "Speed", "Sector"],
      },
      {
        title: "Race Analysis Workflow",
        subtitle:
          "Telemetry data moves through cleaning, comparison, visualisation and insight generation.",
        type: "workflow",
        flow: ["Telemetry", "Cleaning", "Comparison", "Insight"],
      },
    ],
    github: "https://github.com/ameerhamzarashid/ai-race-engineer",
    demo: "",
  },
  {
    slug: "6g-federated-learning",
    title: "Communication-Efficient Federated Learning for 6G MEC",
    category: "Research / Machine Learning",
    summary:
      "A research project on federated learning for dynamic task offloading in 6G-oriented multi-server mobile edge computing networks.",
    problem:
      "Mobile edge computing needs efficient task offloading while reducing latency, energy use and communication overhead in distributed network environments.",
    solution:
      "The project investigates communication-efficient federated learning for task offloading, comparing performance and communication trade-offs in a simulated 6G MEC setting.",
    stack: [
      "Python",
      "C++",
      "ns-3",
      "Federated Learning",
      "DQN",
      "MEC",
      "6G Networks",
      "Simulation",
    ],
    features: [
      "Federated task offloading setup",
      "Communication-efficient update strategy",
      "Latency and energy evaluation",
      "Multi-user multi-server setting",
      "Research-focused experiment design",
    ],
    workflow: [
      "Define the MEC simulation setup",
      "Model users, servers and task demands",
      "Train offloading decision logic",
      "Apply federated learning updates",
      "Evaluate communication and performance trade-offs",
    ],
    outcomes: [
      "Shows research-level ML and networking work",
      "Demonstrates edge computing and 6G understanding",
      "Connects federated learning with simulation",
      "Supports dissertation and academic portfolio strength",
    ],
    visuals: [
      {
        title: "6G MEC Architecture",
        subtitle:
          "Users, edge servers and federated learning updates are represented as a distributed edge intelligence workflow.",
        type: "architecture",
        flow: ["User Tasks", "Edge Servers", "FL Updates", "Global Model"],
      },
      {
        title: "Federated Learning Workflow",
        subtitle:
          "Local learning and communication-efficient aggregation are used to study latency, energy and communication trade-offs.",
        type: "workflow",
        flow: ["Local Training", "Sparse Update", "Aggregation", "Evaluation"],
      },
      {
        title: "Performance Evaluation",
        subtitle:
          "The research focuses on measuring model performance, latency, energy and communication cost.",
        type: "model",
      },
    ],
    github:
      "https://github.com/ameerhamzarashid/dissertation-fl-offloading-ns3",
    demo: "",
  },
  {
    slug: "alzheimer-detection",
    title: "Alzheimer Detection Using Deep Learning",
    category: "Deep Learning / Medical AI",
    summary:
      "A deep learning project for Alzheimer’s disease detection using medical image classification models.",
    problem:
      "Medical image interpretation can be complex and time-consuming. The project explores how deep learning can support image-based classification for Alzheimer’s detection.",
    solution:
      "The project applies CNN-based image classification and transfer learning methods to identify Alzheimer-related patterns from medical image data.",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "InceptionV3",
      "MobileNetV2",
      "Medical Image Classification",
    ],
    features: [
      "Image preprocessing",
      "CNN model development",
      "Transfer learning",
      "Model evaluation",
      "Classification performance analysis",
    ],
    workflow: [
      "Prepare image dataset",
      "Apply preprocessing",
      "Train CNN-based models",
      "Evaluate classification results",
      "Compare model behaviour",
    ],
    outcomes: [
      "Shows deep learning experience",
      "Demonstrates medical AI awareness",
      "Highlights image classification workflow",
      "Shows model training and evaluation skills",
    ],
    visuals: [
      {
        title: "Medical AI Workflow",
        subtitle:
          "Image data flows through preprocessing, CNN modelling and classification output.",
        type: "workflow",
        flow: ["Images", "Preprocess", "CNN Model", "Prediction"],
      },
      {
        title: "Classification Evaluation",
        subtitle:
          "The project evaluates model behaviour using classification-style performance outputs.",
        type: "model",
      },
    ],
    github:
      "https://github.com/ameerhamzarashid/Alzheimer-Detection-Using-Deep-Learning-Algorithms",
    demo: "",
  },
  {
    slug: "fight-anomaly-detection",
    title: "Fight Anomaly Detection Web App",
    category: "Computer Vision",
    summary:
      "A computer vision web application for fight and anomaly detection using object detection and visual analysis techniques.",
    problem:
      "Video-based anomaly detection requires a system that can process visual input and identify unusual or aggressive activity patterns.",
    solution:
      "The project uses computer vision techniques with a web app interface to demonstrate anomaly detection from visual data.",
    stack: ["Python", "Flask", "YOLOv7", "OpenCV", "Computer Vision"],
    features: [
      "Video/image detection workflow",
      "Computer vision model integration",
      "Flask web interface",
      "Anomaly detection use case",
      "Visual output presentation",
    ],
    workflow: [
      "Load visual input",
      "Process image or video frames",
      "Run detection model",
      "Display detection result",
      "Review output visually",
    ],
    outcomes: [
      "Shows applied computer vision skills",
      "Demonstrates model and web app integration",
      "Highlights practical AI deployment thinking",
      "Adds visual AI experience to the portfolio",
    ],
    visuals: [
      {
        title: "Computer Vision App Flow",
        subtitle:
          "Visual input is processed through OpenCV and detection logic before being displayed in a web interface.",
        type: "workflow",
        flow: ["Video Input", "Frame Processing", "YOLOv7", "Detection"],
      },
      {
        title: "Detection Output View",
        subtitle:
          "The visual output style represents how anomaly detection results can be shown to a user.",
        type: "dashboard",
        metrics: ["Detection", "Confidence", "Status"],
      },
    ],
    github: "https://github.com/ameerhamzarashid/Fight-Anomaly-Detection-Web-App",
    demo: "",
  },
];

export function getProjectCaseStudy(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}