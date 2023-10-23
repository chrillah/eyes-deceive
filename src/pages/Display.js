import React from 'react'
import { useParams } from 'react-router-dom'

function Display() {
    const { style } = useParams()
    function arrow() {
        if (style === 'bg-pattern-triangles') {
            return true
        }
        if (style === 'bg-pattern-triangles bg-animated-triangles') {
            return true
        }
    }
    function circle() {
        if (style === 'bg-color-circle') {
            return true
        }
        if (style === 'bg-color-animated-circle') {
            return true
        }
    }
    function kors() {
        if (style === 'bg-pattern-grid') {
            return true
        }
        if (style === 'bg-pattern-grid bg-animated-grid') {
            return true
        }
    }
    function quick() {
        if (style === 'bg-gradient-1') {
            return true
        }
        if (style === 'bg-gradient-1 bg-animated-gradient-1') {
            return true
        }
    }
    function crossBtn() {
        if (style === 'bg-pattern-cross') {
            return true
        }
        if (style === 'bg-pattern-cross bg-animated-cross') {
            return true
        }
    }
    function dotsBtn() {
        if (style === 'bg-pattern-dots') {
            return true
        }
        if (style === 'bg-pattern-dots bg-animated-dots') {
            return true
        }
    }
    function zigBtn() {
        if (style === 'bg-pattern-zig-zag') {
            return true
        }
        if (style === 'bg-pattern-zig-zag bg-animated-zig-zag') {
            return true
        }
    }
    function waveBtn() {
        if (style === 'bg-pattern-wave') {
            return true
        }
        if (style === 'bg-pattern-wave bg-animated-wave') {
            return true
        }
    }
    function circlesBtn() {
        if (style === 'bg-pattern-circles') {
            return true
        }
        if (style === 'bg-pattern-circles bg-animated-circles') {
            return true
        }
    }
    return (
        <div className={style}>
            <div className="display-wrapper">
                <div className="display-container">
                    {arrow() ? (
                        <div className="grid-triangle-1">
                            <svg
                                className={
                                    style === 'bg-pattern-triangles'
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
                    ) : (
                        ''
                    )}
                    {circle() ? (
                        <div className="grid-color-circle" />
                    ) : (
                        ''
                    )}
                    {quick() ? (
                        <h1 className="grid-pattern-header-1">ℚ⌰⟟⍧⏧ ⍓⍲⍑ℍ⎎</h1>
                    ) : (
                        ''
                    )}
                    {kors() ?                                     <h1 className="grid-grid-header">
                                        🜍
                                    </h1> : ''}
                    {crossBtn() ? (
                        <a
                            href="https://www.youtube.com/watch?v=pIvTdPBFY6I&ab_channel=FadetoMind"
                            target="_blanc"
                            className="cross-btn"
                        >
                            ⌀
                        </a>
                    ) : (
                        ''
                    )}
                    {dotsBtn() ? (
                        <a
                            href="https://www.youtube.com/watch?v=kSo6LT0xPSQ&ab_channel=Windows96-Topic"
                            target="_blanc"
                            className="dots-btn"
                        >
                            🝏🜹
                        </a>
                    ) : (
                        ''
                    )}
                    {zigBtn() ? (
                        <a
                            href="https://www.youtube.com/watch?v=CEaRON-XP3g&ab_channel=Vaperror-Topic"
                            target="_blanc"
                            className="zig-zag-btn"
                        >
                            △
                        </a>
                    ) : (
                        ''
                    )}
                    {waveBtn() ? (
                        <a
                            href="https://www.youtube.com/watch?v=Xmx0uNbqPZY&ab_channel=ElectronicGems"
                            target="_blanc"
                            className="wave-btn"
                        >
                            ツ
                        </a>
                    ) : (
                        ''
                    )}
                    {circlesBtn() ? (
                        <a
                            href="https://www.youtube.com/watch?v=fHiO2HTGUcA&ab_channel=tswenner"
                            target="_blanc"
                            className="circle-btn"
                        >
                            🜯
                        </a>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    )
}

export default Display
