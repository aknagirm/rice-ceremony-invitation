import { useEffect, useCallback } from 'react'
import './Lightbox.css'

/*
  Full-screen image viewer.
  Props:
    images  - array of image src strings
    index   - currently shown index
    onClose - close handler
    onPrev / onNext - navigation handlers
*/
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    // Prevent background scroll while open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (index === null || index === undefined) return null

  const total = images.length

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        &times;
      </button>

      {total > 1 && (
        <button
          className="lightbox-nav prev"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous"
        >
          &#8249;
        </button>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt={`Photo ${index + 1}`} />
      </div>

      {total > 1 && (
        <button
          className="lightbox-nav next"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next"
        >
          &#8250;
        </button>
      )}

      {total > 1 && (
        <div className="lightbox-counter">
          {index + 1} / {total}
        </div>
      )}
    </div>
  )
}

export default Lightbox
