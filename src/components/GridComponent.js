import React from 'react'
import { Link } from 'react-router-dom'

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
                        <Link to={`/display/${props.regular ? item.pattern : item.gradient}`}
                            key={item.id}
                            className={
                                props.regular ? item.pattern : item.gradient
                            }
                        >
                            <div className="grid-triangle-1">
                                <svg
                                    className={
                                        props.regular
                                            ? 'black-arrow'
                                            : 'black-arrow black-arrow-spin'
                                    }
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
                                        x2="46"
                                        y2="23.46"
                                    />
                                </svg>
                            </div>
                        </Link>
                    ))}

                <div className="grid-item-1">
                    {gridItemOne2 &&
                        gridItemOne2.map((item) => (
                            <Link to={`/display/${props.regular ? item.pattern : item.gradient}`}
                                key={item.id}
                                className={
                                    props.regular
                                        ? item.pattern +
                                          ' grid-color-1-container'
                                        : item.gradient +
                                          ' grid-color-1-container'
                                }
                            >
                                {item.typography === 'circle' ? (
                                    <div className="grid-color-circle" />
                                ) : (
                                    <div
                                        className="cross-btn"
                                    >
                                        ⌀
                                    </div>
                                )}
                            </Link>
                        ))}
                </div>
            </div>
            <div className="grid-layout-wrapper-2">
                {gridLayoutTwo &&
                    gridLayoutTwo.map((item) => (
                        <Link to={`/display/${props.regular ? item.pattern : item.gradient}`}
                            key={item.id}
                            className={
                                props.regular
                                    ? item.pattern + ' grid-pattern-item-1'
                                    : item.gradient + ' grid-pattern-item-1'
                            }
                        >
                            <div className="grid-pattern-item-1">
                                {item.typography === '' ? (
                                    <div
                                        className="dots-btn"
                                    >
                                        🝏🜹
                                    </div>
                                ) : (
                                    <h1 className="grid-pattern-header-1">
                                        {item.typography}
                                    </h1>
                                )}
                            </div>
                        </Link>
                    ))}
            </div>
            {props.regular ? (
                <section className="main-container">
                    <h1 className="main-header">
                    ꜛᴋ͎ꜜꜛᴇ͎ꜜꜛᴇ͎ꜜꜛᴘ͎ꜜ ꜛs͎ꜜꜛᴄ͎ꜜꜛʀ͎ꜜꜛᴏ͎ꜜꜛʟ͎ꜜꜛʟ͎ꜜꜛɪ͎ꜜꜛɴ͎ꜜꜛɢ͎ꜜ
                    </h1>
                </section>
            ) : (
                <section className="main-container-animated">
                    <h1 className="main-crazy-header">
                    ▐◀ █☰ █☰ ▐◣  ▄█▀ ◖ ◤▄ ⬤ █▄ █▄ █ █▚▌ 🅶�
                    </h1>
                </section>
            )}
            <div className="grid-layout-wrapper-1">
                {gridItemThree0 &&
                    gridItemThree0.map((item) => (
                        <div
                            key={item.id}
                            className={
                                props.regular ? item.pattern : item.gradient
                            }
                        >
                            {props.clock}
                            {props.regular ? (
                                ''
                            ) : (
                                <div className="clock-pattern">
                                    <h1 className="clock-typography">
                                        T͓̊i͓̊c͓̊ T͓̊å͓c͓̊
                                    </h1>
                                </div>
                            )}
                        </div>
                    ))}
                <div className="grid-item-1">
                    {gridItemThree1 &&
                        gridItemThree1.map((item) => (
                            <Link to={`/display/${props.regular ? item.pattern : item.gradient}`}
                                key={item.id}
                                className={
                                    props.regular ? item.pattern : item.gradient
                                }
                            >
                                {item.typography === '' ? (
                                    <div
                                        className="zig-zag-btn"
                                    >
                                        △
                                    </div>
                                ) : (
                                    <h1 className="grid-grid-header">
                                        {item.typography}
                                    </h1>
                                )}
                            </Link>
                        ))}
                </div>
            </div>
            <div className="grid-layout-wrapper-2">
                {gridItemThree3 &&
                    gridItemThree3.map((item) => (
                        <Link to={`/display/${props.regular ? item.pattern : item.gradient}`}
                            key={item.id}
                            className={
                                props.regular
                                    ? item.pattern + ' grid-pattern-item-1'
                                    : item.gradient + ' grid-pattern-item-1'
                            }
                        >
                            <div
                                className={
                                    item.id === 9 ? 'wave-btn' : 'circle-btn'
                                }
                            >
                                {item.typography}
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default GridComponent
