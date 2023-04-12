import React from 'react'
import { useParams } from 'react-router-dom'

function Foot() {
    const { side } = useParams()
    return <div className={side === 'right' ? 'right-shoe' : 'left-shoe'} />
}

export default Foot
