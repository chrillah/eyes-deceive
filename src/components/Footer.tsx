import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer-bar' >
                    <div className="btn-container">
                <Link to="/foot/left" >
                    <div className="left shoe"></div>
                </Link>
                <Link  to="/foot/right" >
                <div className="right shoe"></div>
                </Link>
            </div>
    </footer>
  )
}

export default Footer
