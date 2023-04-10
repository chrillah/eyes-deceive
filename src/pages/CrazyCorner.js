import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

function CrazyCorner() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    const gridLayoutOne = data.slice(0, 3)
    const gridItemOne1 = gridLayoutOne.slice(0, 1)
    const gridItemOne2 = gridLayoutOne.slice(1, 3)
    // const secondGroup = data.slice(3,5)
    // const thirdGroup = data.slice(5,10)
    // const { choice } = useParams()
    return (
        <div className="grid-container">
            {/* <h1 className="crazy-header">
                {choice === 'crazy' ? 'crazy' : 'not crazy'}
            </h1> */}
            <div className="grid-layout-wrapper-1">
                {gridItemOne1.map((item) => (
                    <div key={item.id} className={item.pattern}>
                        {item.id}
                    </div>
                ))}

                <div className="grid-item-1">
                    {gridItemOne2.map((item) => (
                        <div key={item.id} className={item.pattern + ' grid'}>
                            {item.id}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CrazyCorner
