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
  github: string;
  demo?: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "skilllens-ai",
    title: "SkillLens AI",
    category: "Generative AI / Career Intelligence",
    summary:
      "An AI-powered career intelligence platform that analyses user skills, identifies gaps against target roles and recommends personalised learning paths.",
    problem:
      "Many job seekers struggle to understand which skills they already have, which skills are missing and how their profile compares with target roles. The goal of SkillLens AI is to turn this process into a structured, AI-assisted workflow.",
    solution:
      "SkillLens AI is designed as a full-stack AI product that connects user profile analysis, skill gap detection and personalised career recommendations through a clean web interface and backend AI workflow.",
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "Generative AI",
      "Skill Gap Analysis",
      "Career Recommendation Logic",
    ],
    features: [
      "User skill profile analysis",
      "Target role comparison",
      "Skill gap identification",
      "Personalised upskilling recommendations",
      "AI-assisted career guidance flow",
      "Frontend and backend separation",
      "Deployment-ready structure",
    ],
    workflow: [
      "Collect user skills and target role information",
      "Compare current skills against role requirements",
      "Identify missing or weaker skill areas",
      "Generate personalised learning recommendations",
      "Present results in a clean and understandable interface",
    ],
    outcomes: [
      "Shows end-to-end AI product thinking",
      "Demonstrates frontend, backend and AI workflow integration",
      "Highlights career-tech problem solving",
      "Shows practical use of AI beyond simple chatbot interfaces",
    ],
    github: "https://github.com/ameerhamzarashid/skilllens-ai",
    demo: "",
  },
  {
    slug: "ai-race-engineer",
    title: "AI Race Engineer",
    category: "Data Analytics / Telemetry",
    summary:
      "A data analytics project focused on Formula 1 telemetry, race performance analysis and visual storytelling.",
    problem:
      "Racing data is complex and difficult to understand without structured analysis. The project focuses on turning telemetry signals into readable insights about lap performance, speed, driver behaviour and race strategy.",
    solution:
      "The project uses Python-based data processing and visual analytics to explore telemetry patterns and present race insights in a clearer, more useful way.",
    stack: [
      "Python",
      "Pandas",
      "Data Analytics",
      "Telemetry Analysis",
      "Visualisation",
      "Dashboard Thinking",
    ],
    features: [
      "Telemetry data analysis",
      "Lap and driver performance comparison",
      "Speed and sector-based insight",
      "Race analytics storytelling",
      "Clean project structure for portfolio presentation",
    ],
    workflow: [
      "Load and clean telemetry data",
      "Analyse driver and lap performance",
      "Extract key patterns from race data",
      "Create visual summaries",
      "Present insights for easier interpretation",
    ],
    outcomes: [
      "Shows applied analytics beyond standard datasets",
      "Demonstrates data storytelling",
      "Highlights Python analysis skills",
      "Connects technical analysis with a real-world sports context",
    ],
    github: "https://github.com/ameerhamzarashid/ai-race-engineer",
    demo: "",
  },
  {
    slug: "6g-federated-learning",
    title: "Communication-Efficient Federated Learning for 6G MEC",
    category: "Research / Machine Learning",
    summary:
      "A research-focused project on federated learning for dynamic task offloading in 6G-oriented multi-server edge networks.",
    problem:
      "Mobile edge computing systems need efficient task offloading decisions while reducing communication overhead. Traditional centralised learning approaches can become costly, privacy-sensitive and less suitable for distributed 6G environments.",
    solution:
      "The project investigates communication-efficient federated learning for task offloading, with emphasis on latency, energy consumption, communication cost and distributed learning performance.",
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
      "Federated learning based task offloading",
      "Communication-efficient model updates",
      "Multi-user and multi-server edge network setting",
      "Latency and energy-aware evaluation",
      "Research methodology and experiment design",
    ],
    workflow: [
      "Define MEC network and task offloading scenario",
      "Model learning and offloading behaviour",
      "Compare baseline and communication-efficient approaches",
      "Evaluate latency, energy and communication trade-offs",
      "Analyse results for dissertation and research output",
    ],
    outcomes: [
      "Demonstrates research-level machine learning work",
      "Shows understanding of edge computing and 6G systems",
      "Connects ML with networking simulation",
      "Supports academic and technical portfolio strength",
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
      "The project applies CNN-based image classification methods to identify Alzheimer-related patterns from medical imaging data.",
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
      "Medical image preprocessing",
      "CNN model development",
      "Transfer learning approach",
      "Model evaluation",
      "Classification performance analysis",
    ],
    workflow: [
      "Prepare image dataset",
      "Apply preprocessing and augmentation",
      "Train CNN-based models",
      "Evaluate classification results",
      "Compare model behaviour and limitations",
    ],
    outcomes: [
      "Shows deep learning experience",
      "Demonstrates medical AI awareness",
      "Highlights image classification workflow",
      "Shows model training and evaluation skills",
    ],
    github: "https://github.com/ameerhamzarashid",
    demo: "",
  },
  {
    slug: "fight-anomaly-detection",
    title: "Fight Anomaly Detection Web App",
    category: "Computer Vision",
    summary:
      "A computer vision web application for fight and anomaly detection using object detection and video analysis techniques.",
    problem:
      "Video-based anomaly detection requires a system that can process visual input and identify unusual or aggressive activity patterns.",
    solution:
      "The project uses computer vision techniques with a web app interface to demonstrate anomaly detection from visual data.",
    stack: ["Python", "Flask", "YOLOv7", "OpenCV", "Computer Vision"],
    features: [
      "Video/image-based detection workflow",
      "Computer vision model integration",
      "Flask-based web interface",
      "Anomaly detection use case",
      "Visual output presentation",
    ],
    workflow: [
      "Load visual input",
      "Process frames using computer vision methods",
      "Run detection model",
      "Display detection results",
      "Evaluate output qualitatively",
    ],
    outcomes: [
      "Shows applied computer vision skills",
      "Demonstrates model and web app integration",
      "Highlights practical AI deployment thinking",
      "Adds visual AI experience to the portfolio",
    ],
    github: "https://github.com/ameerhamzarashid",
    demo: "",
  },
];

export function getProjectCaseStudy(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}