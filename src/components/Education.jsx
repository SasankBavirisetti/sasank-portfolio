import { education, certifications } from '../data.jsx'

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">// education</div>
      <h2>
        Academic <span>background</span>
      </h2>

      <div className="edu-card">
        <div>
          <div className="edu-degree">{education.degree}</div>
          <div className="edu-college">{education.college}</div>
        </div>
        <div className="edu-meta">
          <div className="edu-cgpa">
            {education.cgpa}
            <span>/10</span>
          </div>
          <div className="edu-year">{education.year}</div>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <div className="section-label" style={{ marginBottom: 16 }}>
          // certifications
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.name}>
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-desc">{cert.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
