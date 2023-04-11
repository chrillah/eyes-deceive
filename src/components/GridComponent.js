import React from 'react'
// import { useParams } from 'react-router-dom'

function GridComponent(props) {

    // const [data] = useState(props.data)


    // useEffect(() => {
    //     fetch('data.json', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // }, [])

    const gridLayoutOne = props.data.slice(0, 3)
    const gridItemOne1 = gridLayoutOne.slice(0, 1)
    const gridItemOne2 = gridLayoutOne.slice(1, 3)

    const gridLayoutTwo = props.data.slice(3, 5)

    const gridLayoutThree = props.data.slice(5, 10)

    const gridItemThree0 = gridLayoutThree.slice(0, 1)

    const gridItemThree1 = gridLayoutThree.slice(1, 3)

    const gridItemThree3 = gridLayoutThree.slice(3, 5)


    return (
        <div className="grid-container">

            <div className="grid-layout-wrapper-1">
                {gridItemOne1 && gridItemOne1.map((item) => (
                    <div key={item.id} className={props.regular ? item.pattern : item.gradient}>
                    </div>
                ))}

                <div className="grid-item-1">
                    {gridItemOne2 && gridItemOne2.map((item) => (
                        <div key={item.id} className={props.regular ? item.pattern + ' grid' : item.gradient + ' grid' }>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid-layout-wrapper-2">
                {gridLayoutTwo && gridLayoutTwo.map((item) => (
                    <div key={item.id} className={props.regular ? item.pattern + ' grid' : item.gradient + ' grid' }>
                    </div>
                ))}
            </div>

            <div className="grid-layout-wrapper-1">
                {gridItemThree0 && gridItemThree0.map((item) => (
                    <div key={item.id} className={props.regular ? item.pattern + ' grid' : item.gradient + ' grid' }>
                    </div>
                ))}

                <div className="grid-item-1">
                    {gridItemThree1 && gridItemThree1.map((item) => (
                        <div key={item.id} className={props.regular ? item.pattern : item.gradient }>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid-layout-wrapper-2">
                {gridItemThree3 && gridItemThree3.map((item) => (
                    <div key={item.id} className={props.regular ? item.pattern + ' grid' : item.gradient + ' grid' }>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default GridComponent
