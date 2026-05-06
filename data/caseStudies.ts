export const caseStudies = [
  {
    title: "6G Federated Learning for Mobile Edge Computing",
    problem:
      "Mobile edge networks need intelligent task offloading while reducing communication cost between distributed devices and servers.",
    approach:
      "Designed a research workflow combining federated learning, DQN-based decision-making, sparse model updates and ns-3 based network simulation.",
    architecture: [
      "User devices generate computational tasks",
      "Edge servers evaluate offloading decisions",
      "Local agents train models from distributed experience",
      "Federated aggregation combines model updates",
      "Sparse updates reduce communication overhead",
    ],
    tools: ["Python", "C++", "ns-3", "Federated Learning", "DQN", "MLOps"],
  },
  {
    title: "AI Race Engineer",
    problem:
      "Formula 1 telemetry data is complex and difficult to interpret without structured analytics and visual storytelling.",
    approach:
      "Built an analytics-driven workflow to process telemetry, compare driver performance and present race insights through dashboard-style visualisations.",
    architecture: [
      "Telemetry data collection",
      "Data cleaning and feature preparation",
      "Lap and sector-level analysis",
      "Driver comparison and performance metrics",
      "Interactive visual outputs",
    ],
    tools: ["Python", "Pandas", "Plotly", "Telemetry", "Dashboarding"],
  },
  {
    title: "Alzheimer Detection Using Deep Learning",
    problem:
      "Medical image classification requires reliable model comparison and careful evaluation across deep learning architectures.",
    approach:
      "Compared CNN-based models including InceptionV3, MobileNetV2 and VGG variants to support Alzheimer’s disease image classification.",
    architecture: [
      "Medical image dataset preparation",
      "Preprocessing and augmentation",
      "CNN model training",
      "Model comparison",
      "Evaluation using classification metrics",
    ],
    tools: ["Python", "TensorFlow", "Keras", "CNN", "Medical AI"],
  },
];