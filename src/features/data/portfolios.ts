export interface Portfolio {
  title: string;
  category: string[];
  description: string;
  year: string;
  impactSummary?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    image?: string;
  };
  link?: string;
}

export const portfolios: Portfolio[] = [
  {
    title: "Social Deck",
    category: ["Backend", "Game API", "WebSocket", "Realtime"],
    description: "A Go backend API for social card games such as Truth or Dare, Truth or Truth, and Talk More with room-based realtime gameplay.",
    year: "2026",
    impactSummary: "One-time WebSocket tickets, room state, and realtime broadcasts keep multiplayer sessions secure and synchronized.",
    caseStudy: {
      overview:
        "Social Deck is an API service for social card games. It handles authentication, deck and card management, game rooms, game state, and realtime gameplay events through WebSocket connections.",
      challenge:
        "Social card games need more than simple REST endpoints. The backend has to coordinate room ownership, player joins, turn order, played cards, realtime broadcasts, and secure WebSocket access without relying on Authorization headers during the socket connection.",
      solution:
        "Built a Go API using Gin for REST routes, PostgreSQL for persistent data, Redis for short-lived WebSocket tickets and room-related state, and Gorilla WebSocket for realtime events. The flow supports register/login, public deck retrieval, room creation with host assignment, room join by code, one-time WebSocket tickets, turn-based card drawing, result submission, and game completion.",
      results: [
        "Complete Auth Flow: Supports register, login, token refresh, logout, and current-user endpoints with Bearer token access.",
        "Deck Management: Provides system seed decks for Truth or Dare Classic, Truth or Truth, and Talk More, plus CRUD endpoints for decks and cards.",
        "Room-Based Gameplay: Hosts can create rooms, players can join by code, and the backend maintains room state, player turns, played cards, and game lifecycle.",
        "Secure Realtime Layer: WebSocket connections use short-lived, one-time tickets that expire in 30 seconds and are generated through authenticated REST requests.",
      ],
      technologies: [
        "Go",
        "Gin",
        "PostgreSQL",
        "Redis",
        "Gorilla WebSocket",
        "Swagger",
        "Docker Compose",
      ],
    },
    link: "https://github.com/Arcaz22/socialdeck.git",
  },
  {
    title: "CompanyCheck.id",
    category: ["Fullstack", "AI Integration", "SvelteKit", "Web Development"],
    description: "A SvelteKit application that generates comprehensive company research reports from public sources using AI (Gemini/Ollama) and Tavily Search, helping job seekers make informed decisions before applying.",
    year: "2026",
    caseStudy: {
      overview:
        "CompanyCheck.id is a modern web application designed to help job seekers research target companies efficiently. It automates the process of gathering public information, analyzing it with Large Language Models (LLMs), and presenting a structured report containing company profiles, salary estimates, red flags, and sentiment analysis.",
      challenge:
        "Gathering reliable, structured company insights from scattered public sources is time-consuming and prone to bias. The technical challenge involved orchestrating external API calls (Tavily Search), managing LLM context windows and timeouts, validating unstructured AI outputs into strict data schemas, and ensuring fast subsequent loads through effective caching without compromising data freshness.",
      solution:
        "Built a fullstack application using SvelteKit 2 and Svelte 5 with TypeScript. Integrated Tavily Search API to fetch public sources, routed the context to either Google Gemini or a local Ollama instance for report generation, and used Zod for strict output validation. Implemented Redis via `ioredis` to cache generated reports by slug, significantly reducing latency and API costs for repeated queries. Added PWA features for offline support and dedicated health check endpoints for all external dependencies.",
      results: [
        "Automated Research: Generates comprehensive, structured reports including profile, salary estimates, positive/negative signals, and red flags in a single, seamless workflow.",
        "Flexible AI Routing: Supports both cloud-based (Google Gemini) and local (Ollama) LLM providers with configurable timeouts and smart fallback mechanisms.",
        "High Performance Caching: Redis integration ensures that repeated company searches return instantly from cache, optimizing both user experience and external API costs.",
        "Robust Validation & Reliability: Zod schema validation guarantees structured, hallucination-free reports, while dedicated health check endpoints proactively monitor Tavily, Redis, and Ollama connectivity."
      ],
      technologies: [
        "SvelteKit 2",
        "Svelte 5",
        "TypeScript",
        "Tailwind CSS",
        "Redis (ioredis)",
        "Zod",
        "Tavily API",
        "Google Gemini",
        "Ollama",
        "Vite"
      ],
    },
    link: "https://github.com/Arcaz22/company_checker.git",
  },
  {
    title: "AI-Powered Financial Management Bot",
    category: ["Bot", "Financial", "AI", "Backend"],
    description: "A smart Telegram bot leveraging Generative AI for automated expense tracking, receipt OCR, and team debt management.",
    year: "2026",
    caseStudy: {
      overview:
        "Building a seamless, chat-based financial assistant on Telegram. The bot acts as a personal and team accountant, allowing users to log daily expenses, track balances, and manage shared bills without the friction of traditional manual-entry spreadsheet apps.",
      challenge:
        "Manual expense tracking is tedious, leading to inconsistent financial logging. Furthermore, managing shared expenses (split bills) and informal lending (hutang/piutang) among friends or team members is often messy. Traditional apps require too many clicks, and standard OCR struggles with Indonesian receipts and complex split-bill logic.",
      solution:
        "Developed a 'Hybrid Intelligence' architecture. For exact commands (/saldo, /riwayat), the bot uses zero-latency SQL queries. For unstructured inputs, it routes text to a Natural Language Processing (NLP) agent to extract JSON data. For physical receipts, it implements Gemini 2.5 Flash Vision logic to perform advanced OCR—not only extracting line items but also applying dynamic 'Split Bill' mathematics based on user captions (e.g., 'Split in half with Budi').",
      results: [
        "Frictionless Data Entry: Users can log complex transactions just by chatting naturally or snapping a photo of a receipt.",
        "Smart Split Bill & Debt Tracking: Automatically calculates shared expenses and tracks informal lending (creditor/debtor) with a real-time net-worth summary.",
        "Hybrid Performance & Cost Efficiency: Bypasses expensive LLM calls for standard data retrieval by routing them directly to PostgreSQL.",
        "Robust CI/CD Pipeline: Achieved fully automated, zero-downtime deployments to a VPS using GitHub Actions, Docker Compose, and Cloudflare Tunnels.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL (Supabase)",
        "Gemini 2.5 Flash (NLP & Vision)",
        "Telegram Bot API",
        "Docker",
        "GitHub Action",
      ],
    },
    link: "http://t.me/SarekatBot",
  },
  {
    "title": "MATCH – AI-Powered Outfit Recommendation System",
    "category": ["AI", "Fashion", "Frontend", "Backend"],
    "description": "A smart outfit recommendation platform that suggests personalized looks based on user's skin tone, body shape, and existing wardrobe items.",
    "year": "2026",
    "caseStudy": {
      "overview": "Building an intelligent fashion assistant that helps users maximize their existing wardrobe. MATCH leverages computer vision and generative AI to analyze the user's physical attributes (skin tone, body shape) and recommends outfit combinations from clothes they already own at home — reducing decision fatigue and promoting sustainable fashion.",
      "challenge": "Most fashion recommendation apps assume users have a large catalog or push new products for purchase. The real challenge was building a system that works with limited, user-uploaded wardrobe data while delivering accurate, flattering recommendations. Additionally, determining skin tone and body shape from photos required robust visual AI, and recommending harmonious color palettes needed deep understanding of color theory and fashion principles.",
      "solution": "Developed a full-stack platform (React + FastAPI) with a multi-stage AI pipeline. Users upload photos of their clothing items and a selfie. The system uses advanced computer vision to extract garment attributes (color, category, style) and analyze the user's skin tone (warm/cool/neutral) and body shape (hourglass, pear, apple, etc.). A recommendation engine then generates outfit pairings based on color harmony rules, silhouette compatibility, and occasion preferences — all from the user's existing wardrobe.",
      "results": [
        "Wardrobe Utilization: Helps users rediscover and combine items they already own, reducing unnecessary clothing purchases.",
        "Personalized Styling: Delivers AI-generated outfit suggestions tailored to individual body types and complexion.",
        "Sustainable Fashion: Encourages a circular wardrobe mindset by maximizing use of existing items.",
        "Seamless User Experience: Built with a modern, responsive React frontend and secure FastAPI backend, deployed on Vercel for optimal performance."
      ],
      "technologies": [
        "React",
        "TypeScript",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Ollama",
        "Vercel",
        "Tailwind CSS"
      ]
    },
    "link": "https://analation-fashion-fe.vercel.app"
  },
  {
    "title": "Monitoring Automation",
    "category": ["Automation", "Backend", "WhatsApp", "Productivity"],
    "description": "A focused automation service that scans Trello boards and dispatches nightly task reminders to team members via WhatsApp at 10 PM.",
    "year": "2026",
    "caseStudy": {
      "overview": "Developing a robust notification system to ensure team alignment. The system acts as a bridge between Trello's task management and WhatsApp's direct communication, ensuring every developer is aware of their pending tasks before the next workday begins.",
      "challenge": "Manual follow-ups on Trello cards are inefficient for a team. Without a consistent reminder, tasks often stagnate in 'To Do' or 'Doing' lists, leading to delayed project timelines.",
      "solution": "Implemented a FastAPI-based orchestrator using APScheduler for precise timing. The system fetches all active cards from the Trello API every day at 22:00 WIB. It then maps the Trello 'Member ID' to specific WhatsApp numbers using a local JSON configuration. The messages are delivered through a self-hosted WAHA (WhatsApp HTTP API) gateway running in a Docker container.",
      "results": [
        "Consistent Nightly Updates: Automated delivery of task summaries every night at 10 PM sharp.",
        "Accurate Member Mapping: Successfully routes individual tasks to the correct WhatsApp recipient based on Trello assignments.",
        "Zero-Cost Gateway: Utilizes WAHA to maintain a stable WhatsApp connection without per-message fees.",
        "Lightweight Deployment: The entire stack runs efficiently on a local environment or VPS using Docker Compose."
      ],
      "technologies": [
        "Python",
        "FastAPI",
        "WAHA",
        "Docker",
        "APScheduler",
        "Trello REST API"
      ]
    },
    "link": "https://github.com/Arcaz22/monitoring_automation.git"
  },
{
    title: "Mindful – AI Health & Wellbeing Assistant",
    category: ["AI / LLM", "FastAPI", "RAG & Search", "PostgreSQL", "Guardrails"],
    description: "Source-grounded health information assistant featuring local Ollama runtime, real-time web retrieval via Tavily, and strict safety guardrails.",
    year: "2026",
    caseStudy: {
      overview:
        "Mindful is an evidence-based digital health and wellbeing assistant engineered to answer non-diagnostic health inquiries. It combines local LLM inference via Ollama with dynamic web retrieval (Tavily) to deliver transparent, cited information while strictly avoiding autonomous medical diagnoses or prescription advice.",
      challenge:
        "Health-related AI agents face severe hallucination risks and high-stakes ethical concerns. The core challenge was enforcing deterministic guardrails for emergency queries (crisis, self-harm, drug interactions, severe allergies) while keeping low-latency inference on local hardware without cloud LLM lock-in.",
      solution:
        "Engineered an asynchronous backend with FastAPI, SQLAlchemy (asyncpg), and pgvector on PostgreSQL for query logging, auditability, and vector embeddings. Implemented LangChain orchestrations integrating local Ollama models with Tavily Search for real-time literature retrieval. Designed a multi-layered guardrail pipeline that intercepts critical health scenarios, blocks dosage/prescription requests, and strictly mandates emergency disclaimers with Streamlit serving as the interactive client.",
      results: [
        "Zero-hallucination compliance for critical guardrails (emergency rerouting, dosage refusals, and non-diagnostic disclaimers).",
        "Deterministic audit trail and usage tracking persisted asynchronously via PostgreSQL and Alembic migrations.",
        "Cost-effective local inference pipeline combining Ollama with targeted Tavily search retrievals."
      ],
      technologies: [
        "FastAPI",
        "Ollama (Local LLM)",
        "LangChain",
        "Tavily Search API",
        "PostgreSQL & pgvector",
        "SQLAlchemy & Asyncpg",
        "Alembic",
        "Streamlit",
        "Pydantic"
      ],
    },
    link: "https://github.com/Arcaz22/mindful.git",
  },
];
