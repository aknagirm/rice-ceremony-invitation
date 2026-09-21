import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import './Gallery.css'

/*
  Static month-wise gallery.
  Photos live in site/public/ named as <month>.<sequence>.<ext>
  Starts from month 0 (newborn). To add/remove photos later,
  just edit the `photos` array for each month below.
*/
const months = [
  { id: 0, label: 'Newborn', photos: ['0.1.jpg', '0.2.jpg', '0.3.jpeg', '0.4.jpeg'] },
  { id: 1, label: '1 Month', photos: ['1.1.jpg', '1.2.jpg', '1.3.jpg', '1.4.jpg'] },
  { id: 2, label: '2 Months', photos: ['2.1.jpg', '2.2.jpg', '2.3.jpg', '2.4.jpg'] },
  { id: 3, label: '3 Months', photos: ['3.1.jpg', '3.2.jpg', '3.3.jpeg', '3.4.jpeg'] },
  { id: 4, label: '4 Months', photos: ['4.1.jpeg', '4.2.jpg', '4.3.jpeg', '4.4.jpeg'] },
  { id: 5, label: '5 Months', photos: ['5.1.jpg', '5.2.jpeg', '5.3.jpeg', '5.4.jpeg'] },
  { id: 6, label: '6 Months', photos: ['6.1.jpeg', '6.2.jpeg'] },
]

const BASE = import.meta.env.BASE_URL

// Flatten all photos into a single ordered list for lightbox navigation.
const allPhotos = months.flatMap((m) => m.photos.map((p) => `${BASE}${p}`))

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (photo) => {
    const idx = allPhotos.indexOf(`${BASE}${photo}`)
    setLightboxIndex(idx)
  }

  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () =>
    setLightboxIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length)
  const showNext = () =>
    setLightboxIndex((i) => (i + 1) % allPhotos.length)

  return (
    <div className="page gallery-page">
      <div className="page-scroll">
        <h2 className="page-title">&#128248; Growing Up</h2>
        <p className="gallery-intro">
          Watch our little Ishanka grow, month by month
        </p>

        <div className="months-list">
          {months.map((month) => (
            <section key={month.id} className="month-section">
              <div className="month-header">
                <span className="month-badge">{month.id}</span>
                <h3 className="month-title">{month.label}</h3>
                <span className="month-line" />
              </div>

              <div className="month-grid">
                {month.photos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="gallery-item"
                    onClick={() => openLightbox(photo)}
                  >
                    <img
                      src={`${BASE}${photo}`}
                      alt={`${month.label} - ${idx + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="gallery-note">
          &#127775; New memories added every month!
        </p>
      </div>

      <Lightbox
        images={allPhotos}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </div>
  )
}

export default Gallery
