import { socialLinks } from './social.js'

/** Production portfolio URL. Keep index.html in sync. */
export const siteUrl = 'https://riport.web.id/'

export const siteName = 'Richie Richardo Portfolio'

export const siteTitle = 'Richie Richardo | Python & Data Specialist Portfolio'

export const siteDescription =
  'Portfolio of Richie Richardo, a Python and Data Specialist building data-driven web tools, dashboards, automation workflows, and modern React interfaces.'

export const siteKeywords = [
  'Richie Richardo',
  'Python and Data Specialist',
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
  jobTitle: 'Python and Data Specialist',
  description:
    'Python and Data Specialist building data-driven web tools, dashboards, automation workflows, and modern React interfaces.',
  knowsAbout: [
    'Python',
    'Data Analysis',
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
  ],
  sameAs: [socialLinks.github, socialLinks.linkedin.replace(/^http:/, 'https:')],
}

export const whatIDoCopy =
  'Richie Richardo is a Python and Data Specialist focused on building data-driven web applications, dashboards, automation workflows, and practical interfaces using Python, React, Laravel, and modern web tooling.'

export const faqItems = [
  {
    question: "What is Richie Richardo's portfolio focused on?",
    answer:
      'This portfolio focuses on Python, data analysis, dashboard development, automation workflows, and modern web interfaces.',
  },
  {
    question: 'What technologies does Richie Richardo use?',
    answer:
      'Richie works with Python, React, Tailwind CSS, Laravel, PHP, JavaScript, Node.js, PostgreSQL, MongoDB, and related web and data tools.',
  },
  {
    question: 'What types of projects are included?',
    answer:
      'The portfolio includes finance tracking apps, data dashboards, automation tools, dataset exploration projects, and modern web applications.',
  },
  {
    question: 'Is Richie Richardo focused on data, web development, or both?',
    answer:
      'Richie focuses on the intersection of data and web development, turning messy information into usable tools and clean interfaces.',
  },
]
