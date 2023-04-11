import React, { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="clock-container">
            <h1 className="clock-header">
                {time.toLocaleTimeString([], { hour12: false })}
            </h1>
        </div>
    )
}

export default Clock
