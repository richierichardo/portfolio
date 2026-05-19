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
    id: 'todo',
    title: 'Todo App',
    shortDescription: 'Focused task list with local persistence and a calm, minimal interface.',
    imageSrc: '/assets/proyek/proyek2.webp',
    imageAlt: 'Todo application interface',
    tech: ['React', 'TypeScript'],
    problem: 'Practice shipping a small product loop: state, persistence, and UX polish.',
    description:
      'A lightweight productivity surface that prioritizes clarity and keyboard-friendly flows.',
    features: ['Local storage persistence', 'Filtering and completion states', 'Responsive layout'],
    githubUrl: 'https://github.com/richierichardo',
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
