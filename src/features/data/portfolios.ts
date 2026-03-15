export interface Portfolio {
  title: string;
  category: string[];
  description: string;
  year: string;
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
    title: "RAG-Based Psychology",
    category: ["AI", "RAG", "Backend", "NLP", "OLLAMA"],
    description: "A research project to explore Embedding and RAG (Retrieval-Augmented Generation) in the psychology domain using qwen2.5-coder:14b and local vector embeddings.",
    year: "2026",
    caseStudy: {
      overview:
        "Mindful is a learning tool for deepening the implementation of RAG. This project uses psychology data from Kaggle to provide answers that are based on the context of psychology literature, not just general knowledge from an LLM",
      challenge:
        "Understanding how vector space works and how to perform accurate retrieval from large psychology datasets without spending too many tokens on LLM.",
      solution:
        "Building a RAG pipeline using FastAPI. The system preprocesses data from Kaggle, generates embeddings using the 'all-MiniLM-L6-v2' model locally for efficiency, and uses qwen2.5-coder:14b via the API to synthesize the final answer based on relevant context.",
      results: [
        "Able to provide psychological consultation answers that reference specific data from the Kaggle dataset.",
        "Cost efficiency by using local model embedding before making API calls to Gemini."
      ],
      technologies: [
        "FastAPI",
        "Qwen LLM (Generation)",
        "all-MiniLM-L6-v2 (Hugging Face Embedding)",
        "Vector Database",
        "Kaggle Datasets",
        "Sentence-Transformers"
      ],
    },
    link: "https://github.com/Arcaz22/mindful.git",
  },
];
