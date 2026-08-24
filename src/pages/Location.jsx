import './Location.css'

function Location() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5!2d88.3135681!3d22.5055202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027ba9b1e8c9df%3A0xd69f51f282fc874f!2sRainbow%20House!5e0!3m2!1sen!2sin!4v1600000000000"
  const directionsUrl = "https://www.google.com/maps/dir//Rainbow+House,+187,+Banamali+Naskar+Rd,+Behala,+Kolkata,+West+Bengal+700060/@22.5055202,88.3135681,15z/"

  return (
    <div className="page location-page">
      <div className="page-scroll">
        <h2 className="page-title">&#128205; Venue</h2>

        <div className="location-card">
          <iframe
            className="location-map"
            src={mapSrc}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Location"
          ></iframe>

          <div className="location-details">
            <h3 className="location-name">Rainbow House, Behala</h3>
            <p className="location-address">
              187, Banamali Naskar Rd, Behala,<br />
              Kolkata, West Bengal 700060
            </p>
            <p className="location-landmark">
              &#9733; Opposite of Behala Club Ground
            </p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              &#128663; Get Directions
            </a>
          </div>
        </div>

        <div className="location-tips">
          <h4>&#128161; Getting There</h4>
          <ul>
            <li>Nearest Bus Stop — Behala Thana</li>
            <li>Nearest Metro — Kalighat / Rabindra Sarobar</li>
            <li>Nearest Railway Station — New Alipore / Tollygunge</li>
            <li>From there, take a bus or autorickshaw to Behala Thana</li>
            <li>From Behala Thana, take an autorickshaw or rickshaw to the hall</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Location
