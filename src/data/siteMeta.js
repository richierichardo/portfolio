import { socialLinks } from './social.js'

/** Production portfolio URL. Keep index.html in sync. */
export const siteUrl = 'https://riport.web.id/'

export const siteName = 'Richie Richardo Portfolio'

export const siteTitle = 'Richie Richardo | Software Engineer Portfolio'

export const siteDescription =
  'Portfolio of Richie Richardo, a software engineer building backend systems, data workflows, automation, and applied AI products.'

export const siteKeywords = [
  'Richie Richardo',
  'Software Engineer',
  'Applied AI Engineer',
  'Data Engineer',
  'Data Analyst Portfolio',
  'React Portfolio',
  'Python Portfolio',
  'Web Developer Portfolio',
  'Data Dashboard',
  'Automation Workflow',
  'Laravel',
  'React',
  'Tailwind CSS',
  'Portfolio Indonesia',
]

export const author = 'Richie Richardo'

export const locale = 'en_ID'

/** Preferred OG asset (1200×630). Add public/assets/og-image.png when ready. */
export const ogImagePath = '/assets/og-image.png'

/** Used in index.html until og-image.png exists. */
export const ogImageFallback = '/assets/hero-img.webp'

export const ogImageAlt = 'Richie Richardo portfolio preview'

export function absoluteUrl(path) {
  const base = siteUrl.replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}

export const person = {
  name: 'Richie Richardo',
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer building backend systems, data workflows, automation, and applied AI products with Python and modern web tooling.',
  knowsAbout: [
    'Python',
    'Data Analysis',
    'FastAPI',
    'REST APIs',
    'React',
    'Tailwind CSS',
    'Laravel',
    'PHP',
    'JavaScript',
    'Node.js',
    'Data Dashboard',
    'Automation Workflow',
    'Web Development',
    'Financial Tracking Applications',
    'PostgreSQL',
    'Pandas',
    'Docker',
    'pgvector',
  ],
  sameAs: [socialLinks.github, socialLinks.linkedin.replace(/^http:/, 'https:')],
}

export const whatIDoCopy =
  'I am a Software Engineer with a Python-first foundation, building backend systems, data pipelines, REST APIs, automation workflows, and applied AI products. My work connects structured data, practical interfaces, and reliable systems—from financial tools and web applications to AI knowledge workflows using PostgreSQL and pgvector.'

export const faqItems = [
  {
    question: "What is Richie Richardo's portfolio focused on?",
    answer:
      'This portfolio focuses on backend engineering, data workflows, automation, applied AI, and practical full-stack web interfaces.',
  },
  {
    question: 'What technologies does Richie Richardo use?',
    answer:
      'Richie works with Python, SQL, PostgreSQL, FastAPI, Laravel, PHP, JavaScript, React, Node.js, Streamlit, Docker, and related data and AI tooling.',
  },
  {
    question: 'What types of projects are included?',
    answer:
      'The portfolio includes finance applications, automation workflows, dataset exploration, backend systems, and applied AI/data projects.',
  },
  {
    question: 'Is Richie Richardo focused on data, web development, or both?',
    answer:
      'Richie focuses on the intersection of data and web development, turning messy information into usable tools and clean interfaces.',
  },
]
