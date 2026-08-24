import './FloralBorder.css'

function FloralBorder({ position = 'top' }) {
  return (
    <div className={`floral-border ${position}`}>
      <div className="floral-row">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="floral-group">
            <span className="fl-leaf-sm"></span>
            <span className={`fl-flower ${['', 'orange', 'yellow'][i % 3]}`}>
              <span className="petal"></span>
              <span className="petal"></span>
              <span className="petal"></span>
              <span className="petal"></span>
              <span className="petal"></span>
              <span className="petal"></span>
            </span>
          </span>
        ))}
        <span className="fl-leaf-sm"></span>
      </div>
    </div>
  )
}

export default FloralBorder
