export const heroStats = [
  { num: '60', suffix: '%', label: 'Fewer redundant API calls' },
  { num: '35', suffix: '%', label: 'Faster data rendering' },
  { num: '30', suffix: '%', label: 'JS bundle reduction' },
  { num: '10k', suffix: '+', label: 'Item lists optimised' },
]

export const metrics = [
  { num: '6+', desc: 'Enterprise integrations built' },
  { num: '20+', desc: 'Pipeline node types shipped' },
  { num: '10+', desc: 'Product features using custom component library' },
  { num: '25%', desc: 'Faster feature delivery via component reuse' },
  { num: '20%+', desc: 'Lighthouse score improvement' },
]

export const aboutCards = [
  { icon: '📍', title: 'Hyderabad, India', sub: 'Open to remote & hybrid roles' },
  { icon: '⚡', title: 'React.js · Next.js · JavaScript', sub: 'Primary stack' },
  { icon: '🎓', title: 'B.Tech — ECE, SRKR Engineering College', sub: 'CGPA: 8.45 / 10 · 2020–2024' },
  { icon: '🚀', title: '1.5 years production experience', sub: 'Enterprise AI-powered platforms' },
]

export const skillGroups = [
  {
    category: 'Core Stack',
    tags: [
      { label: 'React.js 18', hot: true },
      { label: 'Next.js', hot: true },
      { label: 'JavaScript ES6+', hot: true },
      { label: 'TypeScript (basics)' },
      { label: 'Redux' },
      { label: 'Context API' },
      { label: 'React Router' },
      { label: 'Protected Routes' },
    ],
  },
  {
    category: 'Styling & UI',
    tags: [
      { label: 'TailwindCSS', hot: true },
      { label: 'HTML5' },
      { label: 'CSS3' },
      { label: 'Responsive Design' },
      { label: 'Accessibility (a11y)' },
      { label: 'Cross-Browser' },
    ],
  },
  {
    category: 'Performance',
    tags: [
      { label: 'React.memo & useMemo', hot: true },
      { label: 'Lazy Loading' },
      { label: 'Code Splitting' },
      { label: 'Virtual Scrolling' },
      { label: 'Debouncing' },
      { label: 'Lighthouse' },
    ],
  },
  {
    category: 'API & Data',
    tags: [
      { label: 'Axios', hot: true },
      { label: 'JWT Auth' },
      { label: 'Axios Interceptors' },
      { label: 'Role-Based UI' },
      { label: 'Pagination' },
      { label: 'Error Boundaries' },
    ],
  },
  {
    category: 'Backend (basics)',
    tags: [
      { label: 'Node.js', hot: true },
      { label: 'Express.js', hot: true },
      { label: 'REST API Design' },
      { label: 'Python' },
      { label: 'SQL' },
    ],
  },
  {
    category: 'Build & DevOps',
    tags: [
      { label: 'Vite', hot: true },
      { label: 'Webpack' },
      { label: 'Git' },
      { label: 'GitHub Actions' },
      { label: 'CI/CD' },
      { label: 'Linux' },
      { label: 'NPM' },
    ],
  },
  {
    category: 'Testing & Quality',
    tags: [
      { label: 'Jest' },
      { label: 'React Testing Library' },
      { label: 'React DevTools' },
      { label: 'Browser DevTools' },
      { label: 'Code Review' },
    ],
  },
]

export const experience = {
  title: 'Software Development Engineer',
  company: 'Modak Analytics LLP · Hyderabad, India',
  date: 'Dec 2024 – Apr 2026',
  stack: ['React.js', 'JavaScript', 'TailwindCSS', 'Axios', 'Vite', 'GitHub Actions'],
  platforms: [
    {
      name: 'ForgeAI',
      subtitle: 'AI-First Data Engineering Platform',
      bullets: [
        <>Led the data source management module end-to-end — onboarding, configuration, filtering, and profiling across <strong>6+ enterprise integrations</strong> (JDBC, S3, Salesforce, Kafka, Unity Catalog).</>,
        <>Integrated RESTful APIs via Axios — cutting data rendering latency by <strong>35%</strong>; eliminated scroll bottleneck via React.memo and useMemo, reducing re-renders by <strong>50%</strong> on 10,000+ item lists.</>,
        <>Shipped a multi-filter config component — decreasing payload bugs by <strong>40%</strong> and cutting redundant API calls by <strong>60%</strong> through debounced search input.</>,
        <>Lifted <strong>Lighthouse scores by 20%+</strong> by diagnosing rendering bottlenecks using browser DevTools and React DevTools Profiler.</>,
      ],
    },
    {
      name: 'Nabu',
      subtitle: 'Metadata-Driven Data Engineering Platform',
      bullets: [
        <>Enhanced a visual pipeline canvas with <strong>20+ configurable node types</strong> integrating S3, JDBC, Hive, Salesforce, and 15+ enterprise systems.</>,
        <>Extended an interactive drag-and-drop graph (Go.js) — contributing live node placement and real-time connection rendering improvements.</>,
        <>Built a <strong>custom React form component library adopted across 10+ product features</strong> — cutting new-feature delivery time by 25%.</>,
        <>Reduced initial JS bundle by <strong>30%</strong> via Vite lazy loading; achieved separate <strong>30% CSS reduction</strong> with production-optimized TailwindCSS — improving Time-to-Interactive across all dashboards.</>,
        <>Defined API contracts with backend engineers across <strong>3+ feature releases</strong> — drove down production regressions through code reviews and React best-practice enforcement.</>,
      ],
    },
  ],
}

export const education = {
  degree: 'B.Tech, Electronics and Communication Engineering',
  college: 'SRKR Engineering College, Bhimavaram',
  cgpa: '8.45',
  year: '2020 – 2024',
}

export const certifications = [
  { issuer: 'Udemy', name: 'Web Development Master Class', desc: 'HTML, CSS, JavaScript, modern frontend practices' },
  { issuer: 'NPTEL', name: 'Programming, DSA Using Python', desc: 'Python, data structures, algorithm design · 2023' },
  { issuer: 'NPTEL', name: 'Programming in Java', desc: 'Core Java, OOP, algorithmic problem solving · 2022' },
]

export const contact = {
  email: 'sasankbavirisetti@gmail.com',
  linkedin: 'https://linkedin.com/in/sasankbavirisetti',
  github: 'https://github.com/sasankbavirisetti',
}
