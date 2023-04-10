import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

function CrazyCorner() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('data.json',{
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
    // const { choice } = useParams()
    return (
        <div>
            {/* <h1 className="crazy-header">
                {choice === 'crazy' ? 'crazy' : 'not crazy'}
            </h1> */}
            <ul>
                {data.map(item =>(
                    <li key={item.id} className={item.pattern + ' grid'}>hej</li>
                ))}
            </ul>
        </div>
    )
}

export default CrazyCorner
