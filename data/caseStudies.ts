export const caseStudies = [
  {
    slug: "skilllens-ai",
    title: "SkillLens AI",
    image: "/projects/skilllens-ai.png",
    summary:
      "A workforce intelligence platform for job market analysis, CV matching, salary prediction and skill gap insights.",
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
    github: "#",
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
    github: "#",
    demo: "#",
  },
  {
    slug: "fight-anomaly-detection",
    title: "Fight Anomaly Detection",
    image: "/projects/fight-anomaly.png",
    summary:
      "A computer vision web app for detecting anomalies and suspicious activity in video footage.",
    problem:
      "Manual video monitoring is slow and unreliable when suspicious events need quick attention.",
    solution:
      "I built a video upload and analysis interface for anomaly detection using computer vision methods.",
    stack: ["Python", "Flask", "Computer Vision", "Video AI"],
    outcome:
      "Created a working interface for analysing uploaded footage and supporting anomaly detection workflows.",
    github: "#",
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
    github: "#",
    demo: "#",
  },
  {
    slug: "image-steganography-research",
    title: "Image Steganography Research",
    image: "/projects/plant-steganography.jpg",
    summary:
      "A research-focused deep learning architecture for hiding and revealing multiple secret images.",
    problem:
      "Image steganography needs models that can hide multiple secret images while preserving reconstruction quality.",
    solution:
      "I designed a deep learning workflow involving preparation, hiding and reveal networks for multi-image steganography.",
    stack: ["Deep Learning", "Computer Vision", "CNN", "Research"],
    outcome:
      "Produced a research-style architecture showing how multiple images can be encoded and recovered.",
    github: "#",
    demo: "#",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}