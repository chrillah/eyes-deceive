import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [eyeClass, setEyeClass] = useState(true)

    function openEye() {
        setEyeClass(!eyeClass)
    }

    const eye = eyeClass ? 'eye-lid' : 'open-eye'
    return (
        <div className="hero-container">
            <div onClick={openEye} className={eye}>
                <Link to="/spaced">
                    <div className="eye">
                        <svg
                            className="spiral"
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 89.03 86.86"
                        >
                            <path
                                className="spiral-detail"
                                d="M1,42.34c0,24.05,19.46,43.52,43.52,43.52,24.05,0,43.52-19.46,43.52-43.52"
                            />
                            <path
                                className="spiral-detail"
                                d="M5.35,42.34c0,21.65,17.52,39.17,39.17,39.17s39.17-17.52,39.17-39.17"
                            />
                            <path
                                className="spiral-detail"
                                d="M5.35,42.34c0,21.65,17.52,39.17,39.17,39.17s39.17-17.52,39.17-39.17"
                            />
                            <path
                                className="spiral-detail"
                                d="M5.35,42.34c0,21.65,17.52,39.17,39.17,39.17s39.17-17.52,39.17-39.17"
                            />
                            <path
                                className="spiral-detail"
                                d="M9.7,42.34c0,19.24,15.57,34.81,34.81,34.81s34.81-15.57,34.81-34.81"
                            />
                            <path
                                className="spiral-detail"
                                d="M14.06,42.34c0,16.84,13.62,30.46,30.46,30.46s30.46-13.62,30.46-30.46"
                            />
                            <path
                                className="spiral-detail"
                                d="M18.41,42.34c0,14.43,11.68,26.11,26.11,26.11s26.11-11.68,26.11-26.11"
                            />
                            <path
                                className="spiral-detail"
                                d="M22.76,42.34c0,12.03,9.73,21.76,21.76,21.76,12.03,0,21.76-9.73,21.76-21.76"
                            />
                            <path
                                className="spiral-detail"
                                d="M27.11,42.34c0,9.62,7.79,17.41,17.41,17.41s17.41-7.79,17.41-17.41"
                            />
                            <path
                                className="spiral-detail"
                                d="M31.46,42.34c0,7.22,5.84,13.06,13.06,13.06s13.06-5.84,13.06-13.06"
                            />
                            <path
                                className="spiral-detail"
                                d="M35.81,42.34c0,4.81,3.89,8.7,8.7,8.7s8.7-3.89,8.7-8.7"
                            />
                            <path
                                className="spiral-detail"
                                d="M40.17,42.34c0,2.41,1.95,4.35,4.35,4.35s4.35-1.95,4.35-4.35"
                            />
                            <path
                                className="spiral-detail"
                                d="M1,42.34c0-22.85,18.49-41.34,41.34-41.34s41.34,18.49,41.34,41.34"
                            />
                            <path
                                className="spiral-detail"
                                d="M5.35,42.34c0-20.45,16.54-36.99,36.99-36.99,20.45,0,36.99,16.54,36.99,36.99"
                            />
                            <path
                                className="spiral-detail"
                                d="M9.7,42.34c0-18.04,14.6-32.64,32.64-32.64s32.64,14.6,32.64,32.64"
                            />
                            <path
                                className="spiral-detail"
                                d="M14.06,42.34c0-15.63,12.65-28.29,28.29-28.29,15.63,0,28.29,12.65,28.29,28.29"
                            />
                            <path
                                className="spiral-detail"
                                d="M18.41,42.34c0-13.23,10.7-23.93,23.93-23.93s23.93,10.7,23.93,23.93"
                            />
                            <path
                                className="spiral-detail"
                                d="M22.76,42.34c0-10.82,8.76-19.58,19.58-19.58,10.82,0,19.58,8.76,19.58,19.58"
                            />
                            <path
                                className="spiral-detail"
                                d="M27.11,42.34c0-8.42,6.81-15.23,15.23-15.23s15.23,6.81,15.23,15.23"
                            />
                            <path
                                className="spiral-detail"
                                d="M31.46,42.34c0-6.01,4.87-10.88,10.88-10.88,6.01,0,10.88,4.87,10.88,10.88"
                            />
                            <path
                                className="spiral-detail"
                                d="M35.81,42.34c0-3.61,2.92-6.53,6.53-6.53s6.53,2.92,6.53,6.53"
                            />
                            <path
                                className="spiral-detail"
                                d="M40.17,42.34c0-1.2,.97-2.18,2.18-2.18s2.18,.97,2.18,2.18"
                            />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home
