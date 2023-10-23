import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="notFound-container">
            <Link to="/">
                <button className="notFound-btn">ꎨꂷꎨ</button>
            </Link>
        </div>
    )
}

export default NotFound
