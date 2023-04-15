import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Display() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('data.json', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data)
    //         })
    // }, [])
    const id = useParams()
    // const classId =  data.find(item => item.id === paramsId)
  return (
    <div>
        <h1>{id}</h1>
        </div>
  )
}

export default Display
