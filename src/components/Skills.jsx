import { skillGroups } from '../data.jsx'

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">// skills</div>
      <h2>
        Technical <span>Stack</span>
      </h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.category}>
            <div className="skill-cat">{group.category}</div>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span className={`skill-tag${tag.hot ? ' hot' : ''}`} key={tag.label}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
