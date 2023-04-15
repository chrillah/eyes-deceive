import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export function getBackgroundColor(date) {
    const hours = date.getHours()
    if (hours >= 18 || hours < 6) {
        return '#6b71f2'
    } else {
        return '#f2b3d6'
    }
}

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const backgroundColor = getBackgroundColor(time)

    return (
        <ClockContainer backgroundColor={backgroundColor}>
            <ClockHeader >
                {time.toLocaleTimeString([], { hour12: false })}
            </ClockHeader>
        </ClockContainer>
    )
}

export default Clock

const ClockContainer = styled.div`
    border-radius: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor};
`

const ClockHeader = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15vh;
    word-break: break-all;
    font-family: var(--nabla-display);
`
