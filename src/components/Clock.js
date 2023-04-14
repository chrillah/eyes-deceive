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
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15vh;
    word-break: break-all;
    font-family: var(--nabla-display);
`
