export const projects = [
  {
    slug: "skilllens-ai",
    title: "SkillLens AI",
    image: "/projects/skilllens-ai.png",
    description:
      "Workforce intelligence platform for job market analysis, CV matching, salary prediction and skill gap insights.",
    stack: ["Next.js", "FastAPI", "SQL", "ML"],
    github: "https://github.com/ameerhamzarashid/skilllens-ai",
    demo: "#",
    caseStudy: "/case-studies/skilllens-ai",
  },
  {
    slug: "ai-race-engineer",
    title: "AI Race Engineer",
    image: "/projects/ai-race-engineer.png",
    description:
      "Sim racing telemetry coach that analyses laps, detects driving mistakes and generates AI-style performance feedback.",
    stack: ["Python", "Streamlit", "Rule Logic", "Analytics"],
    github: "#",
    demo: "#",
    caseStudy: "/case-studies/ai-race-engineer",
  },
  {
    slug: "alzheimer-detection",
    title: "Alzheimer Detection",
    image: "/projects/alzheimer.png",
    description:
      "Deep learning project for classifying Alzheimer stages using medical brain image data.",
    stack: ["Python", "CNN", "TensorFlow", "Medical AI"],
    github: "#",
    demo: "#",
    caseStudy: "/case-studies/alzheimer-detection",
  },
  {
    slug: "fight-anomaly-detection",
    title: "Fight Anomaly Detection",
    image: "/projects/fight-anomaly.png",
    description:
      "Computer vision web application for detecting anomalies and suspicious activity in video footage.",
    stack: ["Python", "Flask", "Computer Vision", "Video AI"],
    github: "#",
    demo: "#",
    caseStudy: "/case-studies/fight-anomaly-detection",
  },
  {
    slug: "dengue-prediction",
    title: "Dengue Prediction",
    image: "/projects/dengue-prediction.png",
    description:
      "Prediction interface for dengue stage classification using symptom-based inputs and machine learning logic.",
    stack: ["Python", "Flask", "ML", "Healthcare"],
    github: "#",
    demo: "#",
    caseStudy: "/case-studies/dengue-prediction",
  },
  {
    slug: "image-steganography-research",
    title: "Image Steganography Research",
    image: "/projects/plant-steganography.jpg",
    description:
      "Research-focused deep learning architecture for hiding and revealing multiple secret images.",
    stack: ["Deep Learning", "Computer Vision", "Research", "CNN"],
    github: "#",
    demo: "#",
    caseStudy: "/case-studies/image-steganography-research",
  },
];

export type Project = (typeof projects)[number];