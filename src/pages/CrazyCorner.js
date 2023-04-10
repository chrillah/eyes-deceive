import React from 'react'
import { useParams } from 'react-router-dom'

function CrazyCorner() {
  const {choice} = useParams()
  return (
    <div>
        <h1 className='crazy-header'>{choice === "crazy" ? 'crazy' : 'not crazy'}</h1>
    </div>
  )
}

export default CrazyCorner
