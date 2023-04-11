import React, { useEffect, useState } from 'react'
import GridComponent from '../components/GridComponent'

function OpticalIllusion(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    }, [])
    return (
        <div>
            <GridComponent data={data} regular={props.choice} clock={props.clock}/>
        </div>
    )
}

export default OpticalIllusion
