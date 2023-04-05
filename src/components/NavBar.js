import React from 'react'
import {Link} from 'react-router-dom'
// import MenuLinks from './MenuLinks'

function NavBar() {
  return (
    <>
    <nav className="nav-bar">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/crazy-corner">CrazyCorner</Link>
            </li>
        </ul>
        {/* <div className="logo-container"></div>
        <div className="hamburger-btn">
        </div> */}
        {/* <MenuLinks /> */}
    </nav>
    </>
  )
}

export default NavBar
