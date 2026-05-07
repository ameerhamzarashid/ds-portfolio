export type ProjectCategory =
  | "All"
  | "Machine Learning"
  | "Data Analytics"
  | "Computer Vision"
  | "Generative AI"
  | "MLOps"
  | "Research";

export const projectCategories: ProjectCategory[] = [
  "All",
  "Machine Learning",
  "Data Analytics",
  "Computer Vision",
  "Generative AI",
  "MLOps",
  "Research",
];

export const projects = [
  {
    title: "Communication-Efficient Federated Learning for 6G MEC",
    category: "Research",
    description:
      "Research project for dynamic task offloading in 6G-oriented multi-server edge networks using federated learning, deep reinforcement learning and ns-3 simulation.",
    tags: ["Python", "C++", "ns-3", "Federated Learning", "DQN", "6G"],
    github: "https://github.com/ameerhamzarashid/dissertation-fl-offloading-ns3",
    demo: "",
    impact:
      "Demonstrates advanced research, simulation, federated learning, reinforcement learning and system-level thinking.",
  },
  {
  title: "SkillLens AI",
  category: "Generative AI",
  description:
    "An AI-powered career intelligence platform designed to analyse user skills, identify gaps against target roles, and recommend personalised learning paths using modern AI workflows.",
  tags: [
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Docker",
    "Generative AI",
    "Career Intelligence",
  ],
  github: "https://github.com/ameerhamzarashid/skilllens-ai",
  demo: "",
  impact:
    "Shows product thinking, full-stack development, AI-assisted skill gap analysis, career recommendation logic and deployment-focused architecture.",
  },
  {
    title: "AI Race Engineer",
    category: "Data Analytics",
    description:
      "Formula 1 telemetry and race analytics dashboard designed to analyse lap data, driver performance and racing insights using Python and interactive visualisation.",
    tags: ["Python", "Telemetry", "Data Analytics", "Dashboard", "F1"],
    github: "https://github.com/ameerhamzarashid/ai-race-engineer",
    demo: "",
    impact:
      "Shows data engineering, analytics storytelling, dashboard design and motorsport telemetry analysis.",
  },
  {
    title: "F1 Telemetry Analysis Tool",
    category: "Data Analytics",
    description:
      "A racing analytics project focused on telemetry exploration, driver comparison, lap analysis and performance insights.",
    tags: ["Python", "Pandas", "Plotly", "Telemetry", "Analytics"],
    github: "https://github.com/ameerhamzarashid/f1-telemetry-analysis-tool",
    demo: "",
    impact:
      "Highlights analytical thinking, visualisation and domain-specific data storytelling.",
  },
  {
    title: "Alzheimer Detection Using Deep Learning",
    category: "Machine Learning",
    description:
      "Deep learning project for Alzheimer’s disease detection using CNN-based medical image classification models including InceptionV3, MobileNetV2 and VGG variants.",
    tags: ["Python", "TensorFlow", "Keras", "CNN", "Medical AI"],
    github:
      "https://github.com/ameerhamzarashid/Alzheimer-Detection-Using-Deep-Learning-Algorithms",
    demo: "",
    impact:
      "Shows deep learning, medical imaging, model comparison and applied AI for healthcare.",
  },
  {
    title: "Fight Anomaly Detection Web App",
    category: "Computer Vision",
    description:
      "Computer vision web application for fight and anomaly detection using YOLOv7, Flask and OpenCV.",
    tags: ["Python", "Flask", "YOLOv7", "OpenCV", "Computer Vision"],
    github: "https://github.com/ameerhamzarashid/Fight-Anomaly-Detection-Web-App",
    demo: "",
    impact:
      "Demonstrates object detection, computer vision deployment and practical AI application development.",
  },
  {
    title: "Dengue Prediction Using Random Forest",
    category: "Machine Learning",
    description:
      "Machine learning web application for predicting dengue severity from symptom-based input data using Random Forest classification.",
    tags: ["Python", "scikit-learn", "Random Forest", "Flask", "ML"],
    github:
      "https://github.com/ameerhamzarashid/Dengue-Prediction-Using-Random-Forest-Algorithm",
    demo: "",
    impact:
      "Shows supervised learning, classification, feature-based prediction and web app integration.",
  },
];