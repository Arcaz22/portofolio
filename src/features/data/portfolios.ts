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
        "GitHub Actions",
      ],
    },
    link: "http://t.me/SarekatBot",
  },
];
