export const projects = [
  {
    id: 'pokemon',
    title: 'Pokémon Team Builder',
    shortDescription:
      'Explore Pokédex data, build balanced 3-Pokémon teams, and get explainable type-based counters—Python pipeline plus React.',
    imageSrc: '/assets/proyek/proyek1.webp',
    imageAlt: 'Pokémon Team Builder app preview',
    tech: ['React', 'Vite', 'Python', 'Pandas'],
    problem:
      'Players often lack a quick way to see weaknesses, team balance, and sensible counters without digging through spreadsheets.',
    description:
      'Python + Pandas turn raw Pokédex CSVs into JSON; the React UI runs explainable type/stat scoring for teams and counters.',
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
    shortDescription: 'A modular personal finance platform for tracking cashflow, wallets, budgets, recurring entries, and future investment integration.',
    imageSrc: '/assets/proyek/proyek2.webp',
    imageAlt: 'Finance Tracker interface',
    tech: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'Vite', 'PostgreSQL'],
    problem: 'Build a structured financial system that goes beyond simple income-expense logging by supporting wallet-based cashflow tracking, budget monitoring, recurring transactions, analytics, and a foundation for future stock and asset modules.',
    description:
      'Finance Tracker is a personal finance platform designed as the foundation of a broader financial ecosystem. It helps users manage wallets, record income, expenses, and transfers, monitor category-based budgets, automate recurring transactions, and view analytics dashboards. The architecture is planned to scale into future modules such as stock portfolio tracking, AI-driven insights, and other financial tools while keeping net worth modeling consistent.',
    features: [
      'Multi-wallet cash management with transfer tracking',
      'Income, expense, and paired transfer transaction flows',
      'Category-based budgeting with usage monitoring',
      'Recurring transaction automation',
      'Dashboard analytics for cashflow and spending patterns',
      'Architecture prepared for AI insights and investment module integration'
    ],
    githubUrl: 'https://github.com/richierichardo/Finance-apps',
    liveUrl: null,
  },
  {
    id: 'data-viz',
    title: 'Data Insights Dashboard',
    shortDescription: 'Exploratory dashboard for summarizing datasets and surfacing key KPIs.',
    imageSrc: '/assets/proyek/proyek3.webp',
    imageAlt: 'Data dashboard mockup',
    tech: ['Python', 'React', 'PostgreSQL'],
    problem: 'Turn raw tables into decisions by highlighting trends without overwhelming stakeholders.',
    description:
      'Prototype dashboard combining Python-backed transforms with a React front end for readable charts and filters.',
    features: ['KPI cards and trend views', 'Filterable segments', 'Export-friendly summaries'],
    githubUrl: 'https://github.com/richierichardo',
    liveUrl: null,
  },
  {
    id: 'api-tooling',
    title: 'API Integration Toolkit',
    shortDescription: 'Small utilities for validating payloads, retrying requests, and logging outcomes.',
    imageSrc: '/assets/proyek/proyek4.webp',
    imageAlt: 'API tooling concept',
    tech: ['Node.js', 'JavaScript'],
    problem: 'Reduce fragile glue code when connecting third-party services.',
    description:
      'Reusable helpers for structured errors, backoff, and lightweight tracing suitable for portfolio demos.',
    features: ['Composable fetch helpers', 'Typed error mapping', 'Developer-friendly logs'],
    githubUrl: 'https://github.com/richierichardo',
    liveUrl: null,
  },
]
