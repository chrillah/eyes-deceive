import React from 'react'
import { useParams } from 'react-router-dom'

function Foot() {
    const { side } = useParams()
    return (
        <div className={side === 'right' ? "foot-wrapper-right" : "foot-wrapper-left"}>
            <div className={side === 'right' ? 'right-shoe' : 'left-shoe'} />
        </div>
    )
}

export default Foot
