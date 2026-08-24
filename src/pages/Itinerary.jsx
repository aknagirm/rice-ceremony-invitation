import './Itinerary.css'

function Itinerary() {
  const handleSaveDate = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ishanka Annaprasan//EN',
      'BEGIN:VEVENT',
      'DTSTART:20261101T090000',
      'DTEND:20261101T220000',
      'SUMMARY:Ishanka\'s Annaprasan (Mukhe Bhaat) Ceremony',
      'DESCRIPTION:Annaprasan ceremony of Ishanka\\, daughter of Mriganka Sekhar Sarkar & Ipsita Gangopadhyay',
      'LOCATION:Rainbow House\\, 187 Banamali Naskar Rd\\, Behala\\, Kolkata 700060',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'ishanka-annaprasan.ics'
    link.click()
    URL.revokeObjectURL(url)
  }
  return (
    <div className="page itinerary-page">
      <div className="page-scroll">
        <h2 className="page-title">&#128197; Itinerary</h2>

        <div className="itinerary-card">
          <div className="itinerary-date">
            <div className="day">1</div>
            <div className="month-year">November 2026</div>
            <div className="weekday">Sunday</div>
          </div>

          <div className="itinerary-timeline">
            <div className="timeline-item">
              <div className="time">9:00 AM</div>
              <div className="event">Breakfast</div>
            </div>
            <div className="timeline-item">
              <div className="time">11:00 AM</div>
              <div className="event">Annaprasan Ceremony</div>
            </div>
            <div className="timeline-item">
              <div className="time">12:30 PM</div>
              <div className="event">Lunch</div>
            </div>
            <div className="timeline-item">
              <div className="time">6:30 PM</div>
              <div className="event">Cake Cutting Ceremony</div>
            </div>
            <div className="timeline-item">
              <div className="time">7:30 PM</div>
              <div className="event">Dinner</div>
            </div>
          </div>

        </div>

        <button className="save-date-btn" onClick={handleSaveDate}>
          &#128197; Save the Date
        </button>
      </div>
    </div>
  )
}

export default Itinerary
