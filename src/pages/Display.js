import React from 'react'
import { useParams } from 'react-router-dom'

function Display() {
    const { style } = useParams()
    return (
        <div className={style}>
            <div className="display-wrapper">
                <div className="display-container">
                    {style === 'bg-pattern-cross bg-animated-cross' ? (
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
                    {style === 'bg-pattern-dots bg-animated-dots'  ? (
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
                    {style === 'bg-pattern-zig-zag bg-animated-zig-zag' ? (
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
                    {style === 'bg-pattern-wave bg-animated-wave' ? (
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
                    {style === 'bg-pattern-circles bg-animated-circles' ? (
                              <a
                              href="https://www.youtube.com/watch?v=fHiO2HTGUcA&ab_channel=tswenner"
                              target="_blanc"
                              className='circle-btn'
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
