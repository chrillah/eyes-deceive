import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer-bar' >
        <div className="img-container">
            <div className="btn-container">
                <Link className='btn' to="/foot/left" >LEFT</Link>
                <Link className='btn' to="/foot/right" >RIGHT</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer
