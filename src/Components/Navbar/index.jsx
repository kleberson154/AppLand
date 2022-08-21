import React, { useState } from 'react'
import Logo from '../../images/logo.png'

function Navbar() {
  const [nav, setNav] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href="#" className="logo">
        <img src={Logo} alt="Uma imagem da logo escrita AppLand" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#main" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about1">About</a>
        </li>
        <li>
          <a href="#presentation">UI SS</a>
        </li>
        <li>
          <a href="#about2">Download</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
