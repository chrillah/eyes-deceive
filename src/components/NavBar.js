import React from 'react'
import { Link } from 'react-router-dom'
// import MenuLinks from './MenuLinks'

function NavBar() {
    return (
        <>
            <nav className="nav-bar">
                <ul className="nav-btn-container">
                    <li>
                        <Link to="/">
                            <svg
                                className="home-eye"
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 37.96"
                            >
                                <polygon
                                    id="triangle"
                                    points="50 37.96 25 0 0 37.96 50 37.96"
                                />
                                <path
                                    class="home-eye-white"
                                    id="white"
                                    d="M15.33,9.31h0c10.68,0,19.34,8.67,19.34,19.34h0c-10.68,0-19.34-8.67-19.34-19.34h0Z"
                                    transform="translate(-6.1 27.24) rotate(-45)"
                                />
                                <circle
                                    className="home-eye-pupil"
                                    id="eye"
                                    cx="25"
                                    cy="23"
                                    r="4.59"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/crazy-corner">
                            <svg
                                className="home-grid"
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                            >
                                <g>
                                    <line
                                        class="cls-1"
                                        x1="24.26"
                                        x2="24.26"
                                        y2="30"
                                    />
                                    <line
                                        class="cls-1"
                                        x1="20.56"
                                        x2="20.56"
                                        y2="30"
                                    />
                                    <line
                                        class="cls-1"
                                        x1="16.85"
                                        x2="16.85"
                                        y2="30"
                                    />
                                    <line
                                        class="cls-1"
                                        x1="13.15"
                                        x2="13.15"
                                        y2="30"
                                    />
                                    <line
                                        class="cls-1"
                                        x1="9.44"
                                        x2="9.44"
                                        y2="30"
                                    />
                                    <line
                                        class="cls-1"
                                        x1="5.74"
                                        x2="5.74"
                                        y2="30"
                                    />
                                </g>
                                <g>
                                    <line
                                        class="cls-1"
                                        y1="5.74"
                                        x2="30"
                                        y2="5.74"
                                    />
                                    <line
                                        class="cls-1"
                                        y1="9.44"
                                        x2="30"
                                        y2="9.44"
                                    />
                                    <line
                                        class="cls-1"
                                        y1="13.15"
                                        x2="30"
                                        y2="13.15"
                                    />
                                    <line
                                        class="cls-1"
                                        y1="16.85"
                                        x2="30"
                                        y2="16.85"
                                    />
                                    <line
                                        class="cls-1"
                                        y1="20.56"
                                        x2="30"
                                        y2="20.56"
                                    />
                                    <line
                                        class="cls-1"
                                        y1="24.26"
                                        x2="30"
                                        y2="24.26"
                                    />
                                </g>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
