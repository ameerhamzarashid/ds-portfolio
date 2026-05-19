export const caseStudies = [
  {
    slug: "skilllens-ai",
    title: "SkillLens AI",
    image: "/projects/skilllens-ai.png",
    summary:
      "Workforce intelligence platform for job market analysis, CV matching, salary prediction and skill gap insights.",
    problem:
      "Job seekers often struggle to understand which skills matter, how their CV matches roles, and what salary range they can expect.",
    solution:
      "I built a full-stack AI and data platform that connects job market data, CV-job matching, salary prediction and skill gap analysis into one interface.",
    stack: ["Next.js", "FastAPI", "SQL", "Machine Learning"],
    outcome:
      "Created a practical AI product experience that turns job market data into career intelligence.",
    github: "https://github.com/ameerhamzarashid/skilllens-ai",
    demo: "#",
  },
  {
    slug: "ai-race-engineer",
    title: "AI Race Engineer",
    image: "/projects/ai-race-engineer.png",
    summary:
      "A sim-racing telemetry coach that analyses laps, detects mistakes and generates AI-style performance feedback.",
    problem:
      "Drivers need clear feedback from telemetry data, but raw lap data is hard to interpret quickly.",
    solution:
      "I created a Streamlit-based telemetry coach that calculates driver scores, identifies performance loss and gives improvement recommendations.",
    stack: ["Python", "Streamlit", "Telemetry Analytics", "Rule Logic"],
    outcome:
      "Produced an interactive dashboard that converts telemetry into clear driver coaching insights.",
    github: "https://github.com/ameerhamzarashid/ai-race-engineer",
    demo: "#",
  },
  {
    slug: "alzheimer-detection",
    title: "Alzheimer Detection",
    image: "/projects/alzheimer.png",
    summary:
      "A deep learning project for classifying Alzheimer stages using medical brain image data.",
    problem:
      "Medical image classification requires reliable feature extraction from complex brain scan patterns.",
    solution:
      "I trained deep learning models to classify Alzheimer-related categories from MRI-style image data.",
    stack: ["Python", "CNN", "TensorFlow", "Medical AI"],
    outcome:
      "Demonstrated applied computer vision for healthcare-focused image classification.",
    github:
      "https://github.com/ameerhamzarashid/Alzheimer-Detection-Using-Deep-Learning-Algorithms",
    demo: "#",
  },
  {
    slug: "fight-anomaly-detection",
    title: "Fight Anomaly Detection",
    image: "/projects/fight-anomaly.png",
    summary:
      "A computer vision web application for detecting anomalies and suspicious activity in video footage.",
    problem:
      "Manual video monitoring is slow and unreliable when suspicious events need quick attention.",
    solution:
      "I built a video upload and analysis interface for anomaly detection using computer vision methods.",
    stack: ["Python", "Flask", "Computer Vision", "Video AI"],
    outcome:
      "Created a working interface for analysing uploaded footage and supporting anomaly detection workflows.",
    github:
      "https://github.com/ameerhamzarashid/Fight-Anomaly-Detection-Web-App",
    demo: "#",
  },
  {
    slug: "dengue-prediction",
    title: "Dengue Prediction",
    image: "/projects/dengue-prediction.png",
    summary:
      "A symptom-based prediction interface for dengue stage classification.",
    problem:
      "Healthcare prediction interfaces need to be simple enough for users to enter symptoms and understand results quickly.",
    solution:
      "I created a web form that accepts symptom inputs and predicts a dengue stage using ML-style classification logic.",
    stack: ["Python", "Flask", "Machine Learning", "Healthcare"],
    outcome:
      "Built a simple healthcare prediction prototype with a clear user input and result flow.",
    github:
      "https://github.com/ameerhamzarashid/Dengue-Prediction-Using-Random-Forest-Algorithm",
    demo: "#",
  },
  {
    slug: "plant-disease-prediction",
    title: "Plant Disease Prediction",
    image: "/projects/plant-steganography.jpg",
    summary:
      "A machine learning and web application project for identifying plant disease patterns from image-based input.",
    problem:
      "Plant disease diagnosis can be difficult without expert support, especially when symptoms need to be interpreted visually.",
    solution:
      "I built a prediction-focused web application that uses image-based inputs and machine learning logic to support plant disease identification.",
    stack: ["Python", "Machine Learning", "Computer Vision", "Web App"],
    outcome:
      "Created a practical AI prototype that demonstrates image-based prediction and a usable web interface.",
    github: "https://github.com/ameerhamzarashid/Plant-Disease-Prediction",
    demo: "#",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export type CaseStudy = (typeof caseStudies)[number];