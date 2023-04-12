import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
            <ClockHeader>
                {time.toLocaleTimeString([], { hour12: false })}
            </ClockHeader>
        </div>
    )
}

export default Clock

const ClockHeader = styled.h1`
    font-size: 20vh;
    color: white;
    font-family: var(--nabla-display)
`
