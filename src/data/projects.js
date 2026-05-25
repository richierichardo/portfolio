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
    id: 'data-viz',
    title: 'Data Insights Dashboard',
    shortDescription:
      'Stakeholder-friendly data dashboard that turns raw tables into KPIs, trends, and filterable segments for faster decisions.',
    imageSrc: '/assets/proyek/proyek3.webp',
    imageAlt: 'Data Insights Dashboard interface mockup',
    tech: ['Python', 'React', 'PostgreSQL'],
    problem:
      'Teams struggle to see what matters in large datasets—stakeholders need clear KPIs and trends without drowning in raw tables.',
    description:
      'A prototype analytics dashboard pairing Python-backed transforms with a React front end: readable charts, filterable segments, and export-friendly summaries for data-driven reviews.',
    features: [
      'KPI cards and trend views for at-a-glance performance',
      'Filterable segments for audience, time range, and category breakdowns',
      'Export-friendly summaries for reports and follow-up analysis',
    ],
    githubUrl: 'https://github.com/richierichardo',
    liveUrl: null,
  },
  {
    id: 'api-tooling',
    title: 'API Integration Toolkit',
    shortDescription:
      'Node.js utility kit for validating payloads, retrying third-party requests, and logging integration outcomes with less glue code.',
    imageSrc: '/assets/proyek/proyek4.webp',
    imageAlt: 'API Integration Toolkit concept preview',
    tech: ['Node.js', 'JavaScript'],
    problem:
      'Connecting external APIs often leads to fragile one-off scripts—teams need reusable validation, backoff, and traceable errors.',
    description:
      'Composable fetch helpers with structured error mapping, retry/backoff patterns, and developer-friendly logs—built for portfolio demos and real integration prototypes.',
    features: [
      'Composable fetch helpers with consistent request/response handling',
      'Typed error mapping for clearer debugging across services',
      'Lightweight tracing and logs suitable for integration workflows',
    ],
    githubUrl: 'https://github.com/richierichardo',
    liveUrl: null,
  },
]
