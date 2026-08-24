import FloralBorder from '../components/FloralBorder'
import SideLeaves from '../components/SideLeaves'
import babyPhoto from '../assets/ishanka.png'
import './Home.css'

function Home() {
  return (
    <div className="page home-page">
      <div className="page-scroll">
        <div className="home-card">
          <FloralBorder position="top" />
          <SideLeaves side="left" />
          <SideLeaves side="right" />

          <div className="home-card-inner">
            <h1 className="home-title">Baby's</h1>
            <h2 className="home-subtitle">First Taste of Rice!</h2>

            <div className="home-photo">
              <img src={babyPhoto} alt="Ishanka" />
            </div>

            <p className="home-invite-text">
              With profound joy, we are delighted to invite you to the auspicious
              <br />
              <strong>Mukhe Bhaat (Annaprasan)</strong> Ceremony of our daughter,
            </p>

            <div className="home-baby-name">Ishanka</div>

            <p className="home-parents">
              Daughter of Mriganka Sekhar Sarkar &amp; Ipsita Gangopadhyay
            </p>

            <div className="home-details">
              <div className="detail-cell">
                <div className="label">Date</div>
                <div className="value">1st Nov 2026</div>
              </div>
              <div className="detail-cell">
                <div className="label">Time</div>
                <div className="value">6:30 PM onwards</div>
              </div>
              <div className="detail-cell">
                <div className="label">Venue</div>
                <div className="value">Rainbow House, Behala</div>
              </div>
              <div className="detail-cell">
                <div className="label">Address</div>
                <div className="value">187, Banamali Naskar Rd, Kolkata 700060</div>
              </div>
            </div>

            <p className="home-footer">
              We look forward to celebrating this special moment with you!
            </p>

            <p className="home-rsvp">RSVP: +91-9062500811</p>
          </div>

          <FloralBorder position="bottom" />
        </div>
      </div>
    </div>
  )
}

export default Home
