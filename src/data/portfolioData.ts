import type { Project, ExperienceItem, Certification, TechCategory } from '../types';

export const HERO_DATA = {
  name: "Ayush Saxena",
  title: "AI/ML Engineer & Deep Learning Specialist",
  tagline: "Building Deep Learning Vision Models, Generative AI & Autonomous Agentic Pipelines",
  bio: "AI/ML Engineer specializing in Computer Vision, Retrieval-Augmented Generation (RAG), LLMs, Backend Engineering, and GPU CUDA acceleration. Granted patent holder with proven experience in building high-throughput production AI applications.",
  expertise: [
    "Computer Vision",
    "RAG (Retrieval-Augmented Gen)",
    "LLMs & Large Language Models",
    "Backend & High-Throughput APIs",
    "GPU CUDA Acceleration"
  ],
  floatingBadges: [
    { name: "PyTorch", category: "Framework", accent: "#EE4C2C", speed: "Deep Learning" },
    { name: "TensorFlow", category: "Framework", accent: "#FF6F00", speed: "CNNs & GANs" },
    { name: "FastAPI", category: "Backend", accent: "#009688", speed: "Sub-200ms" },
    { name: "RAG & LLMs", category: "GenAI", accent: "#2563EB", speed: "FAISS Vector" },
    { name: "Computer Vision", category: "Perception", accent: "#14B8A6", speed: "60 FPS" }
  ],
  socials: {
    github: "https://github.com/AyushSaxena-0",
    linkedin: "https://www.linkedin.com/in/ayush-saxena-b29912241/",
    email: "ayush.saxena0412@gmail.com",
    leetcode: "https://leetcode.com/u/Ayush_Prof_26_11/"
  }
};

export const ABOUT_DATA = {
  summary: [
    "I am an AI/ML Engineer with a B.Tech in Computer Science & Engineering (AI) from KIET Group of Institutions. I specialize in Computer Vision, RAG, LLMs, Backend Engineering, and GPU CUDA acceleration.",
    "I hold an official Granted Patent for a custom deep Convolutional Neural Network (CNN) medical image diagnostic system achieving 88% validation accuracy for dermatological conditions.",
    "During my AI/ML Developer Internship at Epsilon Creative Agency, I engineered Stable Diffusion and ControlNet image synthesis pipelines, cutting GPU latency by 20% using TensorRT FP16 quantization."
  ],
  stats: [
    { value: "8.2", label: "B.Tech CGPA" },
    { value: "KIET", label: "B.Tech CSE (AI)" },
    { value: "1 Patent", label: "Granted (Medical AI)" },
    { value: "AIR 1715", label: "TCS CodeVita Rank" }
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science and Engineering (AI)",
    institution: "KIET Group of Institutions, Ghaziabad, India",
    year: "August 2022 – June 2026 (Expected)",
    honors: "CGPA: 8.2 / 10.0",
    highlights: [
      "Specialization in Artificial Intelligence, Computer Vision & Deep Learning",
      "CBSE Higher Secondary (12th): 93.2% (Class & School Topper)",
      "CBSE Secondary (10th): 96.6% (Class & School Topper)",
      "Rank 1 Class Topper across 10th and 12th board examinations"
    ]
  },
  infosysHighlights: [
    "Built AI Image-to-Avatar synthesis system using Stable Diffusion & ControlNet, increasing user engagement by 30%.",
    "Optimized high-resolution GAN synthesis pipeline, achieving a 20% reduction in GPU latency via parallel processing.",
    "Architected real-time deep learning inference engines using TensorRT maintaining sub-200ms latency.",
    "Refined NLP feedback loops for candidate evaluation platforms boosting grading accuracy by 25%.",
    "Enhanced system reliability by 40% through FP16/INT8 model quantization."
  ],
  achievements: [
    "Patent Granted: Skin Disease Detection System using custom deep CNN architecture.",
    "TCS CodeVita: Secured All India Rank (AIR) 1715 out of 650,000+ global participants.",
    "Innotech Innovation Award: 2nd Place for Gym Align real-time Computer Vision posture monitoring system.",
    "TCS NQT: 91 percentile score in National Qualifier Test (Technical & Cognitive).",
    "Academic Excellence: Rank 1 School Topper in 10th (96.6%) & 12th (93.2%) CBSE Board exams."
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-epsilon",
    company: "Epsilon Creative Agency",
    role: "AI/ML Developer Intern",
    location: "Ghaziabad, India",
    period: "March 2025 – July 2025",
    description: "Spearheaded Generative AI image synthesis, deep learning inference optimization, and automated NLP grading pipelines.",
    achievements: [
      "Developed a production-ready AI Image-to-Avatar system using Stable Diffusion and ControlNet, increasing user engagement by 30%.",
      "Optimized high-resolution GAN-based synthesis pipeline, achieving 20% GPU latency reduction via parallel processing.",
      "Architected real-time deep learning inference engines using TensorRT, maintaining sub-200ms latency."
    ],
    technologies: ["Stable Diffusion", "ControlNet", "PyTorch", "TensorRT", "FastAPI", "Python"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "sos-gesture-detection",
    title: "SOS Gesture Detection: Emergency AI",
    category: "Computer Vision • Pose Estimation • Safety AI",
    shortDesc: "Real-time AI emergency recognition system detecting distress hand gestures using MediaPipe Pose & Hand Mesh at 60 FPS.",
    fullDesc: "SOS Gesture Detection is an enterprise-grade AI safety system designed for smart cities, public surveillance, hospitals, and emergency response platforms. Powered by Python, OpenCV, and MediaPipe Pose (33 landmarks) & Hand Mesh (21 landmarks), it continuously monitors live camera streams to recognize predefined distress signals with 99.2% accuracy and sub-16ms latency. Instantly broadcasts GPS location alerts and notifies emergency contacts.",
    highlights: [
      "Dual 33-Pose Landmark & 21-Hand Mesh Tracking via MediaPipe at 60 FPS",
      "99.2% Gesture Recognition Accuracy with sub-16ms real-time inference latency",
      "Automated GPS Location Sharing & Multi-Channel Emergency Dispatch",
      "Enterprise Safety Perception Architecture built for public surveillance & elder care"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "TensorFlow", "Computer Vision", "Pose Estimation", "Real-Time Video"],
    architecture: {
      overview: "Low-latency vision perception engine running dual MediaPipe pose and hand landmark tracking with stateful temporal gesture classification.",
      components: [
        { name: "Camera Ingress Stream", description: "Captures 60 FPS live video stream with zero-copy CUDA memory pipelines.", tech: "OpenCV / CUDA" },
        { name: "MediaPipe Dual Mesh", description: "Extracts 33 body pose landmarks and 21 hand keypoints per frame.", tech: "MediaPipe / Python" },
        { name: "Temporal Gesture Classifier", description: "Evaluates spatial joint distances and temporal motion vectors for SOS patterns.", tech: "TensorFlow / NumPy" },
        { name: "Emergency Alert Dispatcher", description: "Triggers instant visual/audio sirens and broadcasts GPS coordinates.", tech: "Python / REST API" }
      ],
      flowSteps: [
        "Camera captures live 60 FPS video stream",
        "MediaPipe extracts 33 pose & 21 hand landmark coordinates",
        "Classifier evaluates hand gesture geometry against SOS distress models",
        "System verifies SOS pattern with 99.2% confidence (<16ms inference)",
        "Emergency dispatcher activates red siren and broadcasts live GPS location"
      ]
    },
    metrics: [
      { label: "Pose Landmarks", value: "33" },
      { label: "Hand Landmarks", value: "21" },
      { label: "Inference Time", value: "16ms" }
    ],
    githubUrl: "https://github.com/AyushSaxena-0/SOS-Gesture-Detection",
    demoUrl: "https://github.com/AyushSaxena-0/SOS-Gesture-Detection",
    caseStudyUrl: "#",
    badge: "Safety AI",
    accentColor: "indigo",
    mockupType: "security"
  },
  {
    id: "skin-disease-detection",
    title: "Skin Disease Detection System",
    category: "Medical AI & Computer Vision (Patent Granted)",
    shortDesc: "Custom CNN architecture for medical imaging diagnosis achieving 88% validation accuracy for eczema and psoriasis.",
    fullDesc: "Patent-granted medical AI diagnostic system engineered using a custom Convolutional Neural Network (CNN) architecture. Specially optimized for clinical dermoscopy imagery to minimize false negative rates in diagnosing eczema, psoriasis, and related dermatological conditions.",
    highlights: [
      "Official Patent Granted for novel medical image diagnostic pipeline",
      "Custom CNN architecture achieving 88% validation accuracy",
      "Optimized loss functions to strictly minimize false negative rates in clinical trials",
      "Model Quantization (FP16) for real-time edge device deployment"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "FastAPI", "Docker"],
    architecture: {
      overview: "Deep Convolutional Neural Network with custom residual blocks and medical image preprocessing filters.",
      components: [
        { name: "Image Preprocessor", description: "Standardizes illumination, removes noise, and crops lesions.", tech: "OpenCV / NumPy" },
        { name: "Custom CNN Backbone", description: "Multi-layer feature extraction with spatial attention modules.", tech: "PyTorch / TensorFlow" },
        { name: "Quantized Inference Engine", description: "Sub-100ms inference on low-power medical hardware.", tech: "ONNX / TensorRT" },
        { name: "Diagnostic Portal", description: "Interactive clinician report interface with confidence heatmaps.", tech: "React / Streamlit" }
      ],
      flowSteps: [
        "Clinician uploads dermoscopic skin image",
        "Image normalized, denoised, and lesion ROI isolated",
        "CNN spatial attention net extracts diagnostic feature maps",
        "Classification layer predicts pathology with 88% accuracy",
        "Automated diagnostic confidence report generated"
      ]
    },
    metrics: [
      { label: "Validation Acc", value: "88.0%" },
      { label: "Patent Status", value: "Granted" },
      { label: "False Negatives", value: "< 2.1%" }
    ],
    githubUrl: "https://github.com/AyushSaxena-0/skin-disease-detection",
    demoUrl: "https://github.com/AyushSaxena-0/skin-disease-detection",
    caseStudyUrl: "#",
    badge: "Patent Granted",
    accentColor: "blue",
    mockupType: "security"
  },
  {
    id: "bhagavad-gita-rag",
    title: "Bhagavad Gita AI Chatbot (RAG)",
    category: "Retrieval-Augmented Generation & NLP",
    shortDesc: "RAG chatbot powered by FAISS Vector Search achieving 90% retrieval accuracy for 300+ active users.",
    fullDesc: "An AI-powered spiritual and philosophical assistant utilizing Retrieval-Augmented Generation (RAG) to query ancient verses and commentaries with 90% retrieval accuracy. Combines Hugging Face Transformer embeddings with a FAISS vector index and FastAPI backend to serve over 300+ active users.",
    highlights: [
      "90% Context Retrieval Accuracy across 700+ verses & commentaries",
      "FAISS Vector Search Engine coupled with Hugging Face Embeddings",
      "Served over 300+ active user queries with zero downtime",
      "FastAPI microservice backend containerized with Docker"
    ],
    technologies: ["Python", "FastAPI", "FAISS", "Hugging Face", "Transformers", "LangChain", "Docker"],
    architecture: {
      overview: "Dense semantic vector retrieval pipeline over translated verse chunks with prompt grounding.",
      components: [
        { name: "Verse Chunking Engine", description: "Splits Sanskrit verses and English commentary into semantic pairs.", tech: "Python / NLTK" },
        { name: "Vector Index", description: "FAISS index storing 768-dim Transformer embeddings.", tech: "FAISS / Hugging Face" },
        { name: "RAG Orchestrator", description: "Grounds LLM response strictly within retrieved verse context.", tech: "LangChain / FastAPI" },
        { name: "User Interface", description: "Clean responsive web UI for spiritual query chat.", tech: "React / Streamlit" }
      ],
      flowSteps: [
        "User asks philosophical or life guidance question",
        "Query converted to 768-dim dense embedding vector",
        "FAISS retrieves top-3 most relevant Gita verses",
        "LLM generates grounded response backed by exact verse citations",
        "Response delivered with verse number and translation"
      ]
    },
    metrics: [
      { label: "Retrieval Acc", value: "90.0%" },
      { label: "Active Users", value: "300+" },
      { label: "Vector Latency", value: "< 95ms" }
    ],
    githubUrl: "https://github.com/AyushSaxena-0/bhagavad-gita-rag-chatbot",
    demoUrl: "https://github.com/AyushSaxena-0/bhagavad-gita-rag-chatbot",
    caseStudyUrl: "#",
    badge: "Production RAG",
    accentColor: "blue",
    mockupType: "rag"
  },
  {
    id: "gym-align",
    title: "Gym Align: CV Posture Monitoring",
    category: "Real-time Perception & Pose Estimation (2nd Place Award)",
    shortDesc: "Real-time posture monitoring system using MediaPipe achieving 95.6% alignment accuracy (Innotech 2nd Place).",
    fullDesc: "Gym Align is a real-time computer vision posture feedback system engineered using MediaPipe pose estimation and OpenCV. It tracks 33 skeletal body landmarks at 60 FPS to detect incorrect exercise form, providing instant auditory and visual feedback to prevent injury. Won 2nd Place at the Innotech Innovation Competition.",
    highlights: [
      "Secured 2nd Place at Innotech National Competition",
      "95.6% Posture Alignment Accuracy across key exercise postures",
      "Real-time 60 FPS skeletal Landmark Tracking via MediaPipe",
      "Instant visual overlay & audio feedback pipeline"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "PyTorch", "NumPy", "Streamlit"],
    architecture: {
      overview: "Low-latency video frame perception pipeline using MediaPipe 3D pose landmarks and trigonometric joint angle computation.",
      components: [
        { name: "Camera Ingestor", description: "Captures 60 FPS webcam stream with minimal buffer delay.", tech: "OpenCV" },
        { name: "Pose Estimator", description: "Extracts 33 3D skeletal landmarks in real-time.", tech: "MediaPipe Pose" },
        { name: "Joint Angle Calculator", description: "Computes biomechanical vectors (e.g. knee flexion, spine angle).", tech: "NumPy / Python" },
        { name: "Feedback Overlay", description: "Renders real-time HUD skeletal graphics and posture warnings.", tech: "OpenCV / Canvas" }
      ],
      flowSteps: [
        "Webcam streams video frames into Gym Align pipeline",
        "MediaPipe extracts 33 3D skeletal body joint coordinates",
        "Vector engine calculates exact joint angles against biomechanical standards",
        "System evaluates posture validity (>95.6% accuracy)",
        "HUD overlay displays instant green/red posture feedback"
      ]
    },
    metrics: [
      { label: "Posture Accuracy", value: "95.6%" },
      { label: "Innotech Award", value: "2nd Place" },
      { label: "Framerate", value: "60 FPS" }
    ],
    githubUrl: "https://github.com/AyushSaxena-0/gym-align-posture-cv",
    demoUrl: "https://github.com/AyushSaxena-0/gym-align-posture-cv",
    caseStudyUrl: "#",
    badge: "Award Winner",
    accentColor: "indigo",
    mockupType: "audio"
  },
  {
    id: "legal-ai-advisor",
    title: "Legal AI Advisor: Legal Intelligence Platform",
    category: "Retrieval-Augmented Generation • Legal NLP • LLM Architecture",
    shortDesc: "Enterprise RAG legal document analysis platform evaluating IPC/BNS statutes, case law precedents, and contract clauses using hybrid vector search.",
    fullDesc: "Legal AI Advisor is an enterprise-grade RAG legal intelligence platform engineered with Python, FastAPI, LlamaIndex, FAISS, and Next.js. It ingests thousands of Indian Penal Code (IPC), Bharatiya Nyaya Sanhita (BNS), and Supreme Court case precedents, delivering high-precision statutory retrieval, contract clause auditing, and citation-backed legal counsel with sub-1.8s latency.",
    highlights: [
      "Hybrid Semantic Vector (FAISS) + BM25 Lexical Keyword Retrieval Engine",
      "Sub-1.8s legal statutory analysis backed by exact court precedent citations",
      "Automated Contract Auditing & Risk Clause Highlight Engine",
      "FastAPI & LlamaIndex enterprise backend with Supabase Row-Level Security"
    ],
    technologies: ["Python", "FastAPI", "LlamaIndex", "FAISS", "LangChain", "Next.js", "Supabase", "Docker"],
    architecture: {
      overview: "Hybrid RAG architecture combining dense vector embeddings and sparse lexical matching over vectorized legal statutes.",
      components: [
        { name: "Legal Document Parser", description: "Ingests and structures court judgements, statutes, and contract PDFs.", tech: "Python / PyMuPDF" },
        { name: "Hybrid Indexing Engine", description: "Dense FAISS vector index coupled with BM25 sparse keyword retriever.", tech: "FAISS / LlamaIndex" },
        { name: "Citation Grounded LLM", description: "Enforces strict statutory citations and reduces hallucination rates.", tech: "LangChain / OpenAI" },
        { name: "Lawyer Dashboard", description: "Interactive legal workspace with clause diff auditor and case chat.", tech: "Next.js / Tailwind" }
      ],
      flowSteps: [
        "Lawyer submits query or uploads contract document",
        "Hybrid retriever fetches top statutory clauses & court precedents",
        "RAG engine ranks citations via reciprocal rank fusion (RRF)",
        "Grounded LLM synthesizes legal opinion with verified case citations",
        "Interactive legal report & clause audit rendered on lawyer dashboard"
      ]
    },
    metrics: [
      { label: "Retrieval Precision", value: "96.4%" },
      { label: "Legal Corpus", value: "50k+ Docs" },
      { label: "Latency", value: "< 1.8s" }
    ],
    githubUrl: "https://github.com/AyushSaxena-0/Legal-AI-Advisor",
    demoUrl: "https://github.com/AyushSaxena-0/Legal-AI-Advisor",
    caseStudyUrl: "#",
    badge: "Enterprise RAG",
    accentColor: "blue",
    mockupType: "rag"
  },
  {
    id: "hypermotion-ai",
    title: "HyperMotion AI: RIFE Frame Interpolation",
    category: "NVIDIA CUDA Acceleration & Video Perception",
    shortDesc: "NVIDIA-accelerated AI video frame interpolation app converting 24/30 FPS footage to fluid 60, 120, or 144 FPS using RIFE v4.25 and TensorRT.",
    fullDesc: "HyperMotion AI is a high-performance, NVIDIA-accelerated AI video frame interpolation system engineered using RIFE v4.25 optical flow models. It converts 24/30 FPS footage into ultra-fluid 60, 120, or 144 FPS video with zero frame duplication. Features hard-cut scene detection, NVDEC hardware decoding, NVENC (H.264, HEVC, AV1) encoding, and asynchronous 3-worker execution pipelines.",
    highlights: [
      "Built-in RIFE v4.25 FP16 optical flow inference engine optimized for NVIDIA RTX GPUs",
      "Hardware NVDEC video decoding & NVENC H.264/HEVC/AV1 hardware encoding",
      "3-Worker Asynchronous Pipeline (NVDEC Decode ➔ RIFE TensorRT ➔ NVENC Mux)",
      "Hard-cut scene detection algorithm preventing motion-interpolation ghosting artifacts"
    ],
    technologies: ["Python", "PyTorch", "RIFE v4.25", "TensorRT", "CUDA", "NVENC/NVDEC", "FFmpeg", "Gradio"],
    architecture: {
      overview: "Three-worker asynchronous GPU pipeline combining NVDEC decoding, optical flow intermediate frame synthesis, and NVENC hardware encoding.",
      components: [
        { name: "NVDEC Decoder Worker", description: "Hardware-accelerated video frame extraction into bounded queue.", tech: "FFmpeg / NVDEC" },
        { name: "RIFE Optical Flow Engine", description: "FP16 TensorRT optical flow motion estimation & frame synthesis.", tech: "PyTorch / RIFE v4.25 / TensorRT" },
        { name: "Scene Cut Detector", description: "Detects hard scene cuts to prevent cross-shot ghosting artifacts.", tech: "Python / OpenCV" },
        { name: "NVENC Encoder & Muxer", description: "Encodes synthesized 60/144 FPS stream to AV1/HEVC with audio remux.", tech: "NVENC / FFmpeg" }
      ],
      flowSteps: [
        "Input 24/30 FPS video ingested via FFmpeg NVDEC hardware decoder",
        "Frames dispatched to bounded queue for scene-cut analysis",
        "RIFE v4.25 neural net computes motion vectors & interpolates intermediate frames",
        "Synthesized 60/120/144 FPS frame stream pushed to NVENC encoder queue",
        "NVENC hardware encoder outputs final high-FPS video with preserved audio & metadata"
      ]
    },
    metrics: [
      { label: "Target FPS", value: "60-144 FPS" },
      { label: "Neural Model", value: "RIFE v4.25" },
      { label: "GPU Acceleration", value: "NVDEC/NVENC" }
    ],
    githubUrl: "https://github.com/AyushSaxena-0/HyperMotion-AI",
    demoUrl: "https://github.com/AyushSaxena-0/HyperMotion-AI",
    caseStudyUrl: "#",
    badge: "NVIDIA RTX AI",
    accentColor: "teal",
    mockupType: "video"
  },
  {
    id: "multi-agent-recruitment",
    title: "Multi-Agent AI Recruitment System",
    category: "Autonomous LLM Agents & NLP",
    shortDesc: "Autonomous candidate screening pipeline using LangChain and CrewAI, automating 70% of evaluation workflows.",
    fullDesc: "An autonomous multi-agent recruitment framework designed to streamline candidate screening. Powered by LangChain, CrewAI, and structured Pydantic schemas, it automatically parses candidate resumes, executes technical skill benchmarking, generates structured evaluation reports, and automates 70% of initial recruiter workloads.",
    highlights: [
      "Multi-Agent Collaboration via CrewAI tool-calling agents",
      "70% Automation of initial candidate screening and evaluation",
      "Structured Technical Report Generation with Pydantic validation",
      "FAISS Vector Embedding match for candidate-to-job description scoring"
    ],
    technologies: ["Python", "LangChain", "CrewAI", "FAISS", "Hugging Face", "FastAPI", "React"],
    architecture: {
      overview: "Multi-agent crew architecture where specialized agents handle resume parsing, technical evaluation, and report synthesis.",
      components: [
        { name: "Ingestion Agent", description: "Parses PDF resumes and converts to structured JSON candidate objects.", tech: "Python / Pydantic" },
        { name: "Screening Agent", description: "Matches candidate vector embeddings against job description requirements.", tech: "FAISS / LangChain" },
        { name: "Technical Assessor Agent", description: "Generates tailored interview questions and evaluates code samples.", tech: "CrewAI / GPT-4" },
        { name: "Recruiter Dashboard", description: "Visual dashboard displaying candidate rankings and reports.", tech: "React / Streamlit" }
      ],
      flowSteps: [
        "Candidate uploads resume PDF",
        "Ingestion Agent extracts candidate skills and experience",
        "Screening Agent calculates FAISS semantic match score",
        "Assessor Agent synthesizes technical evaluation report",
        "Ranked candidate scorecard pushed to recruiter dashboard"
      ]
    },
    metrics: [
      { label: "Screening Autom.", value: "70%" },
      { label: "Match Precision", value: "94.2%" },
      { label: "Evaluation Latency", value: "< 2.5s" }
    ],
    githubUrl: "https://github.com/AyushSaxena-0/multi-agent-recruitment",
    demoUrl: "https://github.com/AyushSaxena-0/multi-agent-recruitment",
    caseStudyUrl: "#",
    badge: "Agentic AI",
    accentColor: "teal",
    mockupType: "rag"
  },
  {
    id: "wakewatch-ai",
    title: "WakeWatch AI: Driver Drowsiness Detection",
    category: "Computer Vision • Driver Monitoring • Automotive ADAS",
    shortDesc: "Real-time automotive ADAS driver fatigue monitoring system extracting 468 MediaPipe facial landmarks at 60 FPS.",
    fullDesc: "WakeWatch AI is a production-oriented automotive ADAS driver drowsiness detection system engineered using Python, OpenCV, and MediaPipe Face Mesh. It continuously tracks 468 facial landmarks to evaluate Eye Aspect Ratio (EAR), Mouth Aspect Ratio (MAR), and 3D Head Pose Estimation. Triggers instant visual and auditory safety alarms upon detecting micro-sleeps, prolonged eye closure, or yawning.",
    highlights: [
      "468 Facial Landmark Mesh Tracking via MediaPipe at 60 FPS real-time processing",
      "Multi-signal perception combining EAR (Eye Aspect Ratio) & MAR (Mouth Aspect Ratio)",
      "Biomechanical 3D Head Pose Estimation tracking driver pitch, yaw, and roll angles",
      "Sub-28ms inference pipeline triggering multi-modal visual & auditory safety alarms"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "CUDA", "Computer Vision", "Face Mesh", "Real-Time Video"],
    architecture: {
      overview: "Real-time automotive vision perception pipeline combining facial landmark localization, geometric ratio computation, and stateful alarm escalation.",
      components: [
        { name: "Camera Ingestion Engine", description: "60 FPS driver-facing video capture with CUDA zero-copy memory buffers.", tech: "OpenCV / CUDA" },
        { name: "MediaPipe Face Mesh", description: "Tracks 468 3D facial landmarks for precise eye and mouth ROI extraction.", tech: "MediaPipe / Python" },
        { name: "Biomechanical Calculators", description: "Computes EAR, MAR, and 3D PnP head pose orientation vectors.", tech: "NumPy / SciPy" },
        { name: "ADAS Decision & Alarm Engine", description: "Stateful fatigue threshold evaluator with instant audio/visual alarm triggers.", tech: "Python / Pygame" }
      ],
      flowSteps: [
        "Driver-facing camera feeds video frames into CUDA perception engine",
        "MediaPipe Face Mesh extracts 468 3D facial coordinates",
        "Calculators extract Eye Aspect Ratio (EAR=0.18) & Mouth Aspect Ratio (MAR=0.71)",
        "PnP solver calculates 3D Head Pose Estimation pitch angle (24° nod)",
        "Fatigue decision engine escalates and fires real-time ADAS sleep warning"
      ]
    },
    metrics: [
      { label: "Face Landmarks", value: "468" },
      { label: "Processing Speed", value: "60 FPS" },
      { label: "Inference Time", value: "28ms" }
    ],
    githubUrl: "https://github.com/AyushSaxena-0/WakeWatch-AI",
    demoUrl: "https://github.com/AyushSaxena-0/WakeWatch-AI",
    caseStudyUrl: "#",
    badge: "Automotive ADAS",
    accentColor: "indigo",
    mockupType: "security"
  },
  {
    id: "kundligpt",
    title: "KundliGPT: AI Vedic Astrology SaaS Platform",
    category: "Generative AI • Full-Stack AI SaaS • LLM Pipeline",
    shortDesc: "Production-ready full-stack AI Vedic Astrology platform combining planetary calculations with Google Gemini LLMs.",
    fullDesc: "KundliGPT is a production-ready full-stack AI Vedic Astrology SaaS platform engineered with Next.js, FastAPI, Google Gemini API, Supabase, and Vercel/Render. It combines traditional astronomical ephemeris algorithms with Large Language Models to generate automated horoscope interpretations, Kundli birth charts, Ashtakoota marriage compatibility matching (32/36 score), and Vimshottari Dasha timelines.",
    highlights: [
      "Google Gemini LLM Integration for personalized Vedic chart interpretation & chat",
      "Automated Kundli Birth Chart & Ashtakoota Marriage Matching (32/36 score)",
      "Vimshottari Dasha & Planetary Strength analysis (Sun 92%, Jupiter 96%)",
      "Production Full-Stack AI SaaS Architecture (Next.js 14, FastAPI microservices, Supabase)"
    ],
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "Google Gemini API", "Supabase", "Tailwind CSS", "Vercel"],
    architecture: {
      overview: "Full-stack AI SaaS architecture connecting a responsive React/Next.js frontend to a FastAPI computation microservice and Google Gemini LLM reasoning engine.",
      components: [
        { name: "Next.js 14 Frontend", description: "Modern minimal UI with interactive planetary charts & real-time chat.", tech: "Next.js / Tailwind" },
        { name: "FastAPI Math Microservice", description: "Computes planetary ephemeris coordinates, Kundli houses, and Ashtakoota scores.", tech: "FastAPI / Python" },
        { name: "Gemini LLM Engine", description: "Synthesizes planetary positions into personalized astrological insights.", tech: "Google Gemini API" },
        { name: "Supabase DB & Auth", description: "Stores user charts, horoscope history, and row-level security profiles.", tech: "Supabase PostgreSQL" }
      ],
      flowSteps: [
        "User submits birth date, time, and geographical location",
        "FastAPI ephemeris engine calculates exact planetary longitudes & Ashtakoota score",
        "Payload grounded into prompt context & dispatched to Google Gemini LLM",
        "Gemini synthesizes natural language horoscope report with career & remedies",
        "Interactive Kundli chart & AI chat interface rendered on Next.js dashboard"
      ]
    },
    metrics: [
      { label: "LLM Engine", value: "Gemini Powered" },
      { label: "Backend API", value: "FastAPI" },
      { label: "Database / Auth", value: "Supabase" }
    ],
    githubUrl: "https://github.com/AyushSaxena-0/KundliGPT",
    demoUrl: "https://github.com/AyushSaxena-0/KundliGPT",
    caseStudyUrl: "#",
    badge: "Full-Stack AI SaaS",
    accentColor: "blue",
    mockupType: "rag"
  }
];

export const TECH_STACK_CATEGORIES: TechCategory[] = [
  {
    name: "Machine Learning & AI",
    description: "Deep learning frameworks, computer vision libraries, and generative AI models.",
    skills: [
      { name: "PyTorch", level: "Expert", icon: "🔥", highlight: true },
      { name: "TensorFlow", level: "Advanced", icon: "TF", highlight: true },
      { name: "Scikit-learn", level: "Expert", icon: "SK" },
      { name: "OpenCV", level: "Expert", icon: "👁️", highlight: true },
      { name: "Hugging Face", level: "Advanced", icon: "🤗", highlight: true },
      { name: "ControlNet / SD", level: "Advanced", icon: "🎨", highlight: true },
      { name: "Keras", level: "Advanced", icon: "K" },
      { name: "GANs & CNNs", level: "Expert", icon: "🧠" }
    ]
  },
  {
    name: "Specializations & AI Methods",
    description: "Core technical domains and advanced artificial intelligence paradigms.",
    skills: [
      { name: "Generative AI", level: "Expert", icon: "✨", highlight: true },
      { name: "Computer Vision", level: "Expert", icon: "📷", highlight: true },
      { name: "RAG Systems", level: "Expert", icon: "📚", highlight: true },
      { name: "NLP & Transformers", level: "Advanced", icon: "💬" },
      { name: "Prompt Engineering", level: "Expert", icon: "✍️" },
      { name: "Model Quantization", level: "Advanced", icon: "⚡", highlight: true }
    ]
  },
  {
    name: "Languages & Data Science",
    description: "Programming languages, vector stores, and data processing libraries.",
    skills: [
      { name: "Python", level: "Expert (Core)", icon: "Py", highlight: true },
      { name: "Java", level: "Advanced", icon: "Jv" },
      { name: "SQL (PostgreSQL)", level: "Advanced", icon: "🐘", highlight: true },
      { name: "C++", level: "Intermediate", icon: "C++" },
      { name: "Pandas & NumPy", level: "Expert", icon: "📊" },
      { name: "FAISS", level: "Expert", icon: "⚡", highlight: true }
    ]
  },
  {
    name: "Developer Tools & Cloud",
    description: "Infrastructure, API frameworks, acceleration engines, and version control.",
    skills: [
      { name: "FastAPI", level: "Expert", icon: "⚡", highlight: true },
      { name: "Docker", level: "Advanced", icon: "🐳", highlight: true },
      { name: "Git", level: "Expert", icon: "⚙️" },
      { name: "AWS SageMaker", level: "Intermediate", icon: "☁️" },
      { name: "TensorRT & ONNX", level: "Advanced", icon: "🚀", highlight: true },
      { name: "Streamlit & Linux", level: "Advanced", icon: "🐧" }
    ]
  }
];

export const GITHUB_DATA = {
  username: "AyushSaxena-0",
  profileUrl: "https://github.com/AyushSaxena-0",
  stats: [
    { label: "LeetCode", value: "150+" },
    { label: "Repositories", value: "20+" },
    { label: "Patent", value: "Granted" },
    { label: "AI Projects", value: "9" }
  ],
  pinnedRepos: [
    {
      name: "Legal-AI-Advisor",
      description: "Enterprise RAG legal document analysis evaluating IPC/BNS statutes with hybrid FAISS + BM25 search.",
      stars: 45,
      forks: 12,
      language: "Python",
      languageColor: "#3572A5",
      url: "https://github.com/AyushSaxena-0/Legal-AI-Advisor"
    },
    {
      name: "HyperMotion-AI",
      description: "NVIDIA-accelerated AI video frame interpolation converting 24/30 FPS footage into fluid 144 FPS using RIFE v4.25.",
      stars: 31,
      forks: 8,
      language: "Python",
      languageColor: "#3572A5",
      url: "https://github.com/AyushSaxena-0/HyperMotion-AI"
    },
    {
      name: "SOS-Gesture-Detection",
      description: "Real-time AI emergency recognition tracking 33-pose & 21-hand landmarks at 60 FPS with sub-16ms latency.",
      stars: 28,
      forks: 7,
      language: "Python",
      languageColor: "#3572A5",
      url: "https://github.com/AyushSaxena-0/SOS-Gesture-Detection"
    },
    {
      name: "WakeWatch-AI",
      description: "Automotive ADAS driver fatigue monitoring system tracking 468 MediaPipe Face Mesh landmarks.",
      stars: 24,
      forks: 5,
      language: "Python",
      languageColor: "#3572A5",
      url: "https://github.com/AyushSaxena-0/WakeWatch-AI"
    }
  ],
  languagesBreakdown: [
    { name: "Python", percentage: 68, color: "#3572A5" },
    { name: "TypeScript", percentage: 16, color: "#3178C6" },
    { name: "C++", percentage: 10, color: "#F34B7D" },
    { name: "Docker", percentage: 6, color: "#2496ED" }
  ]
};

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "cert-patent",
    title: "Patent Granted: Skin Disease Detection System",
    issuer: "Intellectual Property Patent Office",
    date: "2024",
    credentialId: "PATENT-AI-MED-2024",
    verifyUrl: "https://github.com/AyushSaxena-0",
    skills: ["Medical Imaging", "Custom CNN", "Clinical Diagnostics", "Deep Learning"],
    icon: "PAT"
  },
  {
    id: "cert-codevita",
    title: "TCS CodeVita: All India Rank (AIR) 1715",
    issuer: "Tata Consultancy Services",
    date: "2024",
    credentialId: "TCS-CODEVITA-AIR1715",
    verifyUrl: "https://github.com/AyushSaxena-0",
    skills: ["Data Structures", "Algorithms", "Competitive Programming", "Optimization"],
    icon: "AIR"
  },
  {
    id: "cert-tcs-nqt",
    title: "TCS NQT: 91 Percentile Score (Technical & Cognitive)",
    issuer: "Tata Consultancy Services",
    date: "2026",
    credentialId: "TCS-NQT-JAN2026-91",
    verifyUrl: "https://github.com/AyushSaxena-0",
    skills: ["Core CS", "DBMS", "Operating Systems", "Problem Solving"],
    icon: "NQT"
  },
  {
    id: "cert-innotech",
    title: "Innotech Competition: 2nd Place Award (CV Innovation)",
    issuer: "KIET Innotech Innovation Fest",
    date: "2023",
    credentialId: "INNOTECH-2ND-CV",
    verifyUrl: "https://github.com/AyushSaxena-0",
    skills: ["MediaPipe", "Real-Time Vision", "OpenCV", "Pose Tracking"],
    icon: "2ND"
  }
];
