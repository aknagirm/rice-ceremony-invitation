import './NavBar.css'

function NavBar({ pages, activeIndex, onNavClick }) {
  return (
    <nav className="navbar">
      {pages.map((page, index) => (
        <button
          key={page.id}
          className={`nav-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => onNavClick(index)}
        >
          {page.label}
        </button>
      ))}
    </nav>
  )
}

export default NavBar
