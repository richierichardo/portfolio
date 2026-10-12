export const projects = [
  {
    id: 'pokemon',
    title: 'Pokémon Team Builder',
    shortDescription:
      'React data exploration tool for Pokédex datasets—build balanced teams and get explainable type-based counter recommendations.',
    imageSrc: '/assets/proyek/proyek1.webp',
    imageAlt: 'Pokémon Team Builder app preview',
    tech: ['React', 'Vite', 'Python', 'Pandas'],
    problem:
      'Players need a fast way to explore matchups, balance team coverage, and surface sensible counters without manual spreadsheet work.',
    description:
      'A Python + Pandas pipeline turns Pokédex CSVs into structured JSON; the React UI scores teams and counters with explainable type and stat logic recruiters and players can follow.',
    features: [
      'Explorer with search, type/gen filters, and detail pages (matchups, roles, sprites)',
      'Team Builder: coverage, defense, roles, and shared-weakness penalties',
      'Counter Analyzer for opponent teams with ranked candidates and risk notes',
    ],
    githubUrl: 'https://github.com/richierichardo/Pokemon-build',
    liveUrl: null,
  },
  {
    id: 'finance-tracker',
    title: 'Finance Tracker',
    shortDescription:
      'Personal finance platform for multi-wallet cashflow, budgeting, recurring transactions, and analytics—Laravel API with a React interface.',
    imageSrc: '/assets/proyek/proyek2.webp',
    imageAlt: 'Finance Tracker interface',
    tech: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'Vite', 'PostgreSQL'],
    problem:
      'Income–expense logging alone is not enough—users need wallet-based cashflow, budget monitoring, recurring automation, and a foundation for future investment modules.',
    description:
      'Finance Tracker connects wallets, transactions, category budgets, and dashboard summaries into one practical money-management tool, with architecture ready to extend into stocks, AI insights, and richer financial workflows.',
    features: [
      'Multi-wallet cash management with transfer tracking',
      'Income, expense, and paired transfer transaction flows',
      'Category-based budgeting with usage monitoring',
      'Recurring transaction automation',
      'Dashboard analytics for cashflow and spending patterns',
      'Architecture prepared for AI insights and investment module integration',
    ],
    githubUrl: 'https://github.com/richierichardo/Finance-apps',
    liveUrl: null,
  },
  {
    id: 'southcity-automation',
    title: 'SouthCity n8n Automation',
    shortDescription:
      'Workflow automation project connecting forms, data processing, notifications, and AI-ready handoffs through n8n.',
    imageSrc: '/assets/proyek/southcity-automation.png',
    imageAlt: 'SouthCity n8n automation workflow thumbnail',
    tech: ['n8n', 'Automation', 'REST API', 'JavaScript'],
    problem:
      'Repeated operational tasks become fragile when data entry, notifications, and service handoffs depend on manual steps.',
    description:
      'SouthCity turns a multi-step operational process into an observable automation workflow, with structured payloads, service integrations, and room for AI-assisted processing.',
    features: [
      'Connected workflow steps for intake, transformation, and delivery',
      'API-based handoffs with clearer data flow between services',
      'Automation foundation that can grow into AI-assisted operations',
    ],
    githubUrl: 'https://github.com/richierichardo/southcity-n8n-automation',
    liveUrl: null,
  },
  {
    id: 'kpr-simulation',
    title: 'KPR Simulation App',
    shortDescription:
      'Financial planning application that helps users explore mortgage affordability, installments, and repayment scenarios.',
    imageSrc: '/assets/proyek/kpr-simulation.png',
    imageAlt: 'KPR mortgage simulation app thumbnail',
    tech: ['Python', 'JavaScript', 'Financial Data', 'Web App'],
    problem:
      'Loan decisions are difficult to compare when repayment scenarios are hidden inside spreadsheets or unclear calculations.',
    description:
      'The KPR Simulation App turns mortgage assumptions into an interactive calculation flow, making financial scenarios easier to understand and compare.',
    features: [
      'Interactive loan and affordability inputs',
      'Repayment scenario calculations presented in a readable flow',
      'Practical finance use case combining logic, data, and interface design',
    ],
    githubUrl: 'https://github.com/richierichardo/KPR-Simulation-App',
    liveUrl: null,
  },
]
