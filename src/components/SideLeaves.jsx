function SideLeaves({ side = 'left' }) {
  if (side === 'left') {
    return (
      <svg className="side-leaves left" width="80" height="300" viewBox="0 0 80 300" fill="none">
        <path d="M 55 300 Q 50 250 58 200 Q 62 150 55 100 Q 50 50 58 0" stroke="#a08868" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <ellipse cx="40" cy="25" rx="10" ry="18" fill="#c8b080" opacity="0.5" transform="rotate(-30 40 25)"/>
        <ellipse cx="68" cy="50" rx="8" ry="15" fill="#baa070" opacity="0.45" transform="rotate(20 68 50)"/>
        <ellipse cx="35" cy="75" rx="11" ry="20" fill="#d4c090" opacity="0.5" transform="rotate(-40 35 75)"/>
        <ellipse cx="70" cy="100" rx="9" ry="16" fill="#c0a878" opacity="0.4" transform="rotate(30 70 100)"/>
        <ellipse cx="38" cy="130" rx="10" ry="18" fill="#bfa068" opacity="0.5" transform="rotate(-25 38 130)"/>
        <ellipse cx="65" cy="155" rx="9" ry="16" fill="#d0b888" opacity="0.45" transform="rotate(35 65 155)"/>
        <ellipse cx="32" cy="185" rx="11" ry="20" fill="#c4a870" opacity="0.5" transform="rotate(-35 32 185)"/>
        <ellipse cx="62" cy="210" rx="8" ry="15" fill="#baa070" opacity="0.4" transform="rotate(25 62 210)"/>
        <ellipse cx="38" cy="240" rx="10" ry="18" fill="#c8b480" opacity="0.5" transform="rotate(-30 38 240)"/>
        <ellipse cx="65" cy="265" rx="9" ry="16" fill="#d0b880" opacity="0.4" transform="rotate(30 65 265)"/>
        <ellipse cx="35" cy="290" rx="9" ry="17" fill="#bfa868" opacity="0.45" transform="rotate(-40 35 290)"/>
      </svg>
    )
  }

  return (
    <svg className="side-leaves right" width="80" height="300" viewBox="0 0 80 300" fill="none">
      <path d="M 25 300 Q 30 250 22 200 Q 18 150 25 100 Q 30 50 22 0" stroke="#a08868" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <ellipse cx="40" cy="25" rx="10" ry="18" fill="#c8b080" opacity="0.5" transform="rotate(30 40 25)"/>
      <ellipse cx="12" cy="50" rx="8" ry="15" fill="#baa070" opacity="0.45" transform="rotate(-20 12 50)"/>
      <ellipse cx="45" cy="75" rx="11" ry="20" fill="#d4c090" opacity="0.5" transform="rotate(40 45 75)"/>
      <ellipse cx="10" cy="100" rx="9" ry="16" fill="#c0a878" opacity="0.4" transform="rotate(-30 10 100)"/>
      <ellipse cx="42" cy="130" rx="10" ry="18" fill="#bfa068" opacity="0.5" transform="rotate(25 42 130)"/>
      <ellipse cx="15" cy="155" rx="9" ry="16" fill="#d0b888" opacity="0.45" transform="rotate(-35 15 155)"/>
      <ellipse cx="48" cy="185" rx="11" ry="20" fill="#c4a870" opacity="0.5" transform="rotate(35 48 185)"/>
      <ellipse cx="18" cy="210" rx="8" ry="15" fill="#baa070" opacity="0.4" transform="rotate(-25 18 210)"/>
      <ellipse cx="42" cy="240" rx="10" ry="18" fill="#c8b480" opacity="0.5" transform="rotate(30 42 240)"/>
      <ellipse cx="15" cy="265" rx="9" ry="16" fill="#d0b880" opacity="0.4" transform="rotate(-30 15 265)"/>
      <ellipse cx="45" cy="290" rx="9" ry="17" fill="#bfa868" opacity="0.45" transform="rotate(40 45 290)"/>
    </svg>
  )
}

export default SideLeaves
