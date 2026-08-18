// import { heroStats } from '../data.jsx'

// export default function Hero() {
//   return (
//     <section id="hero">
//       <div className="hero-tag">Available for opportunities</div>
//       <h1>Sasank Bavirisetti</h1>
//       <div className="hero-role">
//         Frontend-heavy <span>Software Engineer</span>
//       </div>
//       <p className="hero-desc">
//         Building high-performance React applications for enterprise-scale platforms.
//         Specialised in eliminating rendering bottlenecks, integrating complex REST APIs,
//         and shipping clean, accessible UI that moves fast.
//       </p>
//       <div className="hero-stats">
//         {heroStats.map((s) => (
//           <div className="stat" key={s.label}>
//             <span className="stat-num">
//               {s.num}
//               <span>{s.suffix}</span>
//             </span>
//             <span className="stat-label">{s.label}</span>
//           </div>
//         ))}
//       </div>
//       <div className="hero-btns">
//         <a className="btn btn-primary" href="mailto:sasankbavirisetti@gmail.com">
//           Get in touch
//         </a>
//         <a className="btn btn-secondary" href="https://linkedin.com/in/sasankbavirisetti" target="_blank" rel="noreferrer">
//           LinkedIn ↗
//         </a>
//         <a className="btn btn-secondary" href="#experience">
//           View work ↓
//         </a>
//       </div>
//     </section>
//   )
// }

import { heroStats } from "../data.jsx";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sasankbavirisetti@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };  
  return (
    <section id="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-tag">Available for opportunities</div>
          <h1>Sasank Bavirisetti</h1>
          <div className="hero-role">
            Frontend-heavy <span>Software Engineer</span>
          </div>
          <p className="hero-desc">
            Building high-performance React applications for enterprise-scale
            platforms. Specialised in eliminating rendering bottlenecks,
            integrating complex REST APIs, and shipping clean, accessible UI
            that moves fast.
          </p>
          <div className="hero-stats">
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-num">
                  {s.num}
                  <span>{s.suffix}</span>
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={copyEmail}>
              {copied ? "Email copied ✓" : "Get in touch"}
            </button>
            <a
              className="btn btn-secondary"
              href="https://linkedin.com/in/sasankbavirisetti"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a className="btn btn-secondary" href="#experience">
              View work ↓
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <img
            src={`${import.meta.env.BASE_URL}sasank.jpeg`}
            alt="Sasank Bavirisetti"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}
