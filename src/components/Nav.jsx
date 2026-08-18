// export default function Nav() {
//   return (
//     <nav>
//       <div className="nav-logo">sasank.dev</div>
//       <ul className="nav-links">
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#experience">Experience</a></li>
//         <li><a href="#education">Education</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   )
// }


import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav>
      {/* <div className="nav-logo">sasank.dev</div> */}
      <a href="#hero" className="nav-logo">sasank.dev</a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="#about" onClick={close}>About</a></li>
        <li><a href="#skills" onClick={close}>Skills</a></li>
        <li><a href="#experience" onClick={close}>Experience</a></li>
        <li><a href="#education" onClick={close}>Education</a></li>
        <li><a href="#contact" onClick={close}>Contact</a></li>
      </ul>

      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}