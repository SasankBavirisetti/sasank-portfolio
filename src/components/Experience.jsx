import { experience } from '../data.jsx'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">// experience</div>
      <h2>
        Where I've <span>worked</span>
      </h2>

      <div className="exp-item">
        <div className="exp-header">
          <div>
            <div className="exp-title">{experience.title}</div>
            <div className="exp-company">{experience.company}</div>
          </div>
          <div className="exp-date">{experience.date}</div>
        </div>

        <div className="exp-stack">
          {experience.stack.map((tech) => (
            <span className="stack-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        {experience.platforms.map((platform) => (
          <div className="exp-platform" key={platform.name}>
            <div className="platform-name">
              <span>{platform.name}</span> — {platform.subtitle}
            </div>
            <ul className="bullets">
              {platform.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
