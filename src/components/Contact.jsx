// import { contact } from '../data.jsx'

// export default function Contact() {
//   return (
//     <section id="contact">
//       <div className="section-label">// contact</div>
//       <h2>
//         Let's <span>connect</span>
//       </h2>
//       <p className="contact-desc">
//         Open to frontend, full-stack, and software engineering roles.
//         Based in Hyderabad — available for on-site, hybrid, or remote.
//       </p>
//       <div className="contact-links">
//         <a className="btn btn-primary" href={`mailto:${contact.email}`}>
//           ✉ {contact.email}
//         </a>
//         <a className="btn btn-secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
//           LinkedIn ↗
//         </a>
//         <a className="btn btn-secondary" href={contact.github} target="_blank" rel="noreferrer">
//           GitHub ↗
//         </a>
//       </div>
//     </section>
//   )
// }


import { useState } from 'react'
import { contact } from '../data.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact">
      <div className="section-label">// contact</div>
      <h2>
        Let's <span>connect</span>
      </h2>
      <p className="contact-desc">
        Open to frontend, full-stack, and software engineering roles.
        Based in Hyderabad, Bangalore, Gurugram, Pune — available for on-site, hybrid, or remote.
      </p>
      <div className="contact-links">
        <button className="btn btn-primary" onClick={copyEmail}>
          {copied ? '✓ Email copied' : `✉ ${contact.email}`}
        </button>
        <a className="btn btn-secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a className="btn btn-secondary" href={contact.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </section>
  )
}