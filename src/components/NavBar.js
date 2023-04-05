import React from 'react'
import { Link } from 'react-router-dom'
// import MenuLinks from './MenuLinks'

function NavBar() {
    return (
        <>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to="/">
                            <svg
                            className='home-eye'
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 30"
                            >
                                <polygon
                                    id="triangle"
                                    points="50 30 25 0 0 30 50 30"
                                />
                                <path
                                    id="white"
                                    class="home-eye-white"
                                    d="M15.33,10.33h0c10.68,0,19.34,8.67,19.34,19.34h0c-10.68,0-19.34-8.67-19.34-19.34h0Z"
                                    transform="translate(-6.82 23.54) rotate(-45)"
                                />
                                <circle className='home-eye-pupil' id="eye" cx="25" cy="20" r="4.59" />
                            </svg>
                        </Link>
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
