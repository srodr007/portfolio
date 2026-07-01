/**
 * Single source of truth for every piece of portfolio content.
 * Edit here to update the site — components read from these exports.
 */

export const profile = {
  name: "Sergio Rodríguez",
  lastName: "Valbuena",
  role: "AI Engineer",
  tagline: "Building intelligent systems that turn complex data into decisions.",
  email: "sergiorodriguezvalbuena@gmail.com",
  phone: "+34 688 980 912",
  linkedin: "https://www.linkedin.com/in/sergio-rodriguez-valbuena/",
  now: "AI Engineer @ Plexus Tech",
  portrait: "/portrait.png",
  cvUrl: "/cv-sergio-rodriguez-valbuena.pdf",
} as const;

/** Short first-person narrative shown in the About section. */
export const about = [
  "I'm an AI Engineer with two years of experience developing software and machine learning solutions. My work focuses on integrating LLMs into applications, designing RAG systems and AI agents, automating workflows, and training machine learning models, applying solid software engineering practices throughout the process.",
  "I hold a BSc in Data Science and Engineering from Universidad Carlos III de Madrid, where I was awarded the 2025 Excellence Scholarship of the Community of Madrid, and spent my third year as an exchange student at the University of California.",
  "I'm interested in taking solutions through the full development cycle and in delivering software and ML systems that provide real value.",
] as const;

export const focusAreas = [
  "Retrieval-Augmented Generation",
  "ML / Deep Learning",
  "Conversational & Voice AI",
  "MLOps & Production Systems",
] as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "AI Engineer",
    company: "Plexus Tech",
    period: "Sep 2025 — Present",
    location: "Madrid",
    type: "Full-time",
    current: true,
    summary: "AI Engineer — RAG, ML/DL research, and conversational AI.",
    bullets: [
      "Developed multimodal RAG systems, integrating different vector database providers, orchestrating retrieval and re-ranking flows, and exposing RAG functionality as tools through MCP in containerized applications with Docker.",
      "Applied research and development of ML and DL models for Network Intrusion Detection Systems, training and evaluating different architectures on network traffic data, with tracking through MLflow and data ingestion supported by Kafka.",
      "Developed ML models for time-series forecasting and anomaly detection using industrial sensor data, applying Conformal Prediction to provide statistical guarantees for predictions.",
      "Designed conversational AI systems, including a real-time voice agent prototype for customer service environments, integrating ASR and TTS models with LLM reasoning and guardrails.",
      "Production deployment of a RAG-based classification system for aviation safety incident reports, built on hexagonal architecture, integrating AWS Bedrock and Neural Trust guardrails, and optimizing accuracy and cost.",
    ],
    stack: [
      "RAG",
      "FastAPI",
      "MLflow",
      "Docker",
      "Machine Learning",
      "LangChain",
      "MCP",
      "Microsoft Azure",
      "AWS Bedrock",
      "Software Development",
    ],
  },
  {
    role: "AI Software Engineer",
    company: "MissioIA",
    period: "Oct 2024 — Jun 2025",
    location: "Madrid",
    type: "Part-time",
    summary: "Full-stack GenAI applications for client projects.",
    bullets: [
      "Developed software solutions in a fast-paced environment, working closely with clients to analyze their systems and business requirements, integrating generative AI to automate workflows and optimize their processes.",
      "Built full-stack applications with Python and React (Next.js), following best practices such as TDD or DDD, version control, code quality, testing and CI/CD.",
      "Applications were deployed on Google Cloud Platform and supported by Firebase for authentication and storage.",
    ],
    stack: ["Software Development", "RAG", "Google Cloud Platform", "FastAPI", "MCP"],
  },
  {
    role: "Data Analyst I",
    company: "PRGX Global Inc.",
    period: "Sep 2024 — Mar 2025",
    location: "Madrid",
    type: "Internship",
    summary: "ETL automation and data analysis.",
    bullets: [
      "Automated ETL processes with Python and DBT.",
      "Performed data analysis and reports using SQL and Microsoft SQL Server.",
    ],
    stack: ["Microsoft SQL Server", "Extract, Transform and Load (ETL)"],
  },
  {
    role: "Machine Learning Engineer",
    company: "Hito 1",
    period: "Jun 2024 — Aug 2024",
    location: "Asturias",
    type: "Internship",
    summary: "Machine learning for hydrological time-series forecasting.",
    bullets: [
      "Performed EDA and feature engineering on hydrological time-series data to optimize an ML model for predicting spillway overflow events in Asturias.",
    ],
    stack: ["Machine Learning"],
  },
];

export type Project = {
  title: string;
  kind: string;
  year: string;
  blurb: string;
  highlight?: string;
  stack: string[];
  isPrivate?: boolean;
  privateReason?: string;
};

export const projects: Project[] = [
  {
    title: "AI-Driven System for Automated Project Design",
    kind: "Bachelor Thesis · with MissioIA",
    year: "2025",
    blurb: "A multi-agent AI system capable of designing software project prototypes in GCP using MCPs.",
    highlight:
      "Specialized agents for backend, frontend, and deep research, coordinated through shared memory structures, synchronization points, and task delegation mechanisms.",
    stack: ["Google Cloud Platform", "MCP", "FastAPI"],
    isPrivate: true,
    privateReason: "Built with MissioIA — the codebase isn't hosted on my personal GitHub.",
  },
  {
    title: "Samplex — AI-Powered Study Assistant",
    kind: "Course Project · Universidad Carlos III de Madrid",
    year: "2024",
    blurb: "An Android app that generates personalized study plans from uploaded materials.",
    stack: ["Google Cloud Platform", "Kotlin"],
    isPrivate: true,
    privateReason:
      "Built as a group project at Universidad Carlos III de Madrid — shared repository, not on my personal GitHub.",
  },
  {
    title: "Mobility & Routine Analysis for Mental Health",
    kind: "Course Project · with eB2 (Evidence-Based Behaviour)",
    year: "2024",
    blurb:
      "Analyzed large-scale geolocation data from mobile devices to uncover users' mobility patterns and daily routines.",
    highlight:
      "Applied clustering algorithms (DBSCAN), entropy analysis, and time-series analysis to extract behavioral insights.",
    stack: ["Machine Learning"],
    isPrivate: true,
    privateReason: "Built in collaboration with eB2 — client codebase, not publicly available.",
  },
  {
    title: "Deep Learning for Waste Classification",
    kind: "Course Project · University of California",
    year: "2024",
    blurb:
      "A waste recognition system using CNNs to classify discarded items and recommend appropriate recycling bins.",
    highlight:
      "Achieved 90.3% accuracy evaluating different open-source architectures (EfficientNetB0, ResNet50, MobileNet, DenseNet).",
    stack: ["Deep Learning", "Computer Vision"],
    isPrivate: true,
    privateReason:
      "Built in collaboration with the University of California — course repository, not on my personal GitHub.",
  },
];

export const education = [
  {
    degree: "BSc Data Science & Engineering",
    institution: "Universidad Carlos III de Madrid",
    period: "2021 — 2025",
    detail: "GPA 8/10 · Excellence Scholarship of Madrid (2025)",
  },
  {
    degree: "Computer Science — Exchange Program",
    institution: "University of California, Riverside",
    period: "2023 — 2024",
    detail: "GPA 3.6/4.0",
  },
] as const;

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    title: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "Jun 2026",
    url: "https://learn.microsoft.com/es-es/users/sergiorodrguezvalbuena-3707/credentials/3ec5eaa176e77a83?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "Claude Certified Architect — Foundations (CCA-F)",
    issuer: "Anthropic",
    date: "Apr 2026",
  },
  {
    title: "C1 Advanced — English (CEFR C1)",
    issuer: "University of Cambridge",
    date: "Dec 2021",
  },
];

/** Rotating strip of technologies for the marquee. */
export const marqueeSkills = [
  "RAG",
  "LLMs",
  "MCP",
  "PyTorch",
  "MLflow",
  "Kafka",
  "AWS Bedrock",
  "Docker",
  "FastAPI",
  "Next.js",
  "Conformal Prediction",
  "Vector Databases",
  "ASR / TTS",
  "GCP",
  "DBT",
  "Computer Vision",
] as const;
