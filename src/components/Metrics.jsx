import { metrics } from '../data.jsx'

export default function Metrics() {
  return (
    <div id="metrics">
      <div className="metrics-inner">
        {metrics.map((m) => (
          <div className="metric-item" key={m.desc}>
            <div className="metric-num">{m.num}</div>
            <div className="metric-desc">{m.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
