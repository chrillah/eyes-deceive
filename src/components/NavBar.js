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
                                    className="home-eye-white"
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
                        <Link to="/optical">
                            <svg
                            className="home-grid"
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                            >
                                <g>
                                    <line
                                        className="home-grid-details"
                                        x1="2.2"
                                        y1="18.03"
                                        x2="18.03"
                                        y2="2.2"
                                    />
                                    <line
                                        className="home-grid-details"
                                        x1="5.46"
                                        y1="21.28"
                                        x2="21.28"
                                        y2="5.46"
                                    />
                                    <line
                                        className="home-grid-details"
                                        x1="8.72"
                                        y1="24.54"
                                        x2="24.54"
                                        y2="8.72"
                                    />
                                    <line
                                        className="home-grid-details"
                                        x1="11.97"
                                        y1="27.8"
                                        x2="27.8"
                                        y2="11.97"
                                    />
                                </g>
                                <g>
                                    <line
                                        className="home-grid-details"
                                        x1="18.03"
                                        y1="27.8"
                                        x2="2.2"
                                        y2="11.97"
                                    />
                                    <line
                                        className="home-grid-details"
                                        x1="21.28"
                                        y1="24.54"
                                        x2="5.46"
                                        y2="8.72"
                                    />
                                    <line
                                        className="home-grid-details"
                                        x1="24.54"
                                        y1="21.28"
                                        x2="8.72"
                                        y2="5.46"
                                    />
                                    <line
                                        className="home-grid-details"
                                        x1="27.8"
                                        y1="18.03"
                                        x2="11.97"
                                        y2="2.2"
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
