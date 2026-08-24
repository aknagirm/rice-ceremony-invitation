import './Gallery.css'

function Gallery() {
  // Placeholder gallery items - replace with actual photos later
  const placeholders = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    label: `Photo ${i + 1}`,
  }))

  return (
    <div className="page gallery-page">
      <div className="page-scroll">
        <h2 className="page-title">&#128248; Gallery</h2>

        <p className="gallery-intro">
          Precious moments from our little one's journey
        </p>

        <div className="gallery-grid">
          {placeholders.map((item) => (
            <div key={item.id} className="gallery-item">
              {/* Replace with: <img src={`/gallery/photo${item.id}.jpg`} alt={item.label} /> */}
              <div className="gallery-placeholder">
                <span className="icon">&#128247;</span>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="gallery-note">
          &#127775; More photos will be added soon!
        </p>
      </div>
    </div>
  )
}

export default Gallery
