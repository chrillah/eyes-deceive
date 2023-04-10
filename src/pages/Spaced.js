import React from 'react'
import { useParams } from 'react-router-dom'
import Illusion from '../components/Illusion'

function Spaced() {
    const { choice } = useParams()
  return (
    <div>
        <Illusion spaced={choice} />
    </div>
  )
}

export default Spaced
