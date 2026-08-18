import { aboutCards } from '../data.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="section-label">// about</div>
      <h2>
        Who I <span>am</span>
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <strong>Frontend-heavy Software Engineer</strong> based in Hyderabad, India with 1.5
            years of production experience building enterprise-scale web applications for AI-driven
            data engineering platforms.
          </p>
          <p>
            At <strong>Modak Analytics</strong>, I contributed to two products — <strong>ForgeAI</strong>{' '}
            (an AI-first pipeline automation platform) and <strong>Nabu</strong> (a metadata-driven data
            engineering platform) — building everything from complex data source management UIs to
            real-time pipeline monitoring dashboards.
          </p>
          <p>
            I care deeply about <strong>performance</strong>, clean component architecture, and shipping
            UI that actually works at scale — not just in a demo. I'm currently expanding into{' '}
            <strong>Next.js</strong> and <strong>Node.js</strong> to become a more complete full-stack
            engineer.
          </p>
        </div>
        <div className="about-cards">
          {aboutCards.map((c) => (
            <div className="about-card" key={c.title}>
              <div className="about-card-icon">{c.icon}</div>
              <div>
                <div className="about-card-title">{c.title}</div>
                <div className="about-card-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
