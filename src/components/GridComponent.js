import React from 'react'

function GridComponent(props) {
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
                {gridItemOne1 &&
                    gridItemOne1.map((item) => (
                        <div
                            key={item.id}
                            className={
                                props.regular ? item.pattern : item.gradient
                            }
                        >
                            <div className="grid-triangle-1">
                                <svg
                                    className={item.item === true ? "black-arrow" : "black-arrow black-arrow-spin"}
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 55.00 55.00"
                                >
                                    <polyline
                                        id="POINT"
                                        className="black-arrow-details"
                                        points="23.82 .35 .71 23.46 23.82 46.57"
                                    />
                                    <line
                                        id="LINE"
                                        className="black-arrow-details"
                                        x1=".71"
                                        y1="23.46"
                                        x2="50.71"
                                        y2="23.46"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}

                <div className="grid-item-1">
                    {gridItemOne2 &&
                        gridItemOne2.map((item) => (
                            <div
                                key={item.id}
                                className={
                                    props.regular
                                        ? item.pattern + ' grid-color-1-container'
                                        : item.gradient + ' grid-color-1-container'
                                }
                            >
                                <div className="grid-color-1">
                                    <div className="grid-inner-color-1" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="grid-layout-wrapper-2">
                {gridLayoutTwo &&
                    gridLayoutTwo.map((item) => (
                        <div
                            key={item.id}
                            className={
                                props.regular
                                    ? item.pattern + ' grid'
                                    : item.gradient + ' grid'
                            }
                        >
                            <div className="grid-pattern-item-1">
                                <h1 className='grid-pattern-header-1'>{item.typography}</h1>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="grid-layout-wrapper-1">
                {gridItemThree0 &&
                    gridItemThree0.map((item) => (
                        <div
                            key={item.id}
                            className={
                                props.regular
                                    ? item.pattern + ' grid'
                                    : item.gradient + ' grid'
                            }
                        >
                            {props.clock}
                            {props.regular ? '' : <div className='clock-pattern'><h1 className='clock-typography'>T͓̊i͓̊c͓̊ T͓̊å͓c͓̊</h1></div>}
                        </div>
                    ))}

                <div className="grid-item-1">
                    {gridItemThree1 &&
                        gridItemThree1.map((item) => (
                            <div
                                key={item.id}
                                className={
                                    props.regular ? item.pattern : item.gradient
                                }
                            ></div>
                        ))}
                </div>
            </div>

            <div className="grid-layout-wrapper-2">
                {gridItemThree3 &&
                    gridItemThree3.map((item) => (
                        <div
                            key={item.id}
                            className={
                                props.regular
                                    ? item.pattern + ' grid'
                                    : item.gradient + ' grid'
                            }
                        ></div>
                    ))}
            </div>
        </div>
    )
}

export default GridComponent
