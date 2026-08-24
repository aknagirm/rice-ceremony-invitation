import './Upload.css'

function Upload() {
  const uploadUrl = 'https://forms.gle/8cjsHFaxRNtvrG8N7'

  return (
    <div className="page upload-page">
      <div className="page-scroll">
        <h2 className="page-title">&#128247; Share Your Photos</h2>

        <div className="upload-card">
          <div className="upload-icon">&#128228;</div>

          <h3 className="upload-heading">Captured a special moment?</h3>

          <p className="upload-text">
            We'd love to see the event through your eyes! Upload your photos
            from the ceremony and they'll be saved to our family collection.
          </p>

          <a
            href={uploadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="upload-btn"
          >
            &#128193; Upload Photos
          </a>

          <p className="upload-note">
            Photos will be uploaded to our Google Drive. <br />
            Supported formats: JPG, PNG, HEIC
          </p>
        </div>

        <div className="upload-instructions">
          <h4>&#128161; How it works</h4>
          <ol>
            <li>Click the "Upload Photos" button above</li>
            <li>Select one or more photos from your device</li>
            <li>Add your name (optional)</li>
            <li>Hit submit — that's it!</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Upload
