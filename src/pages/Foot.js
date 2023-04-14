import React from 'react'
import { useParams } from 'react-router-dom'

function Foot() {
    const { side } = useParams()
    return (
        <div className={side === 'right' ? "foot-wrapper-right" : "foot-wrapper-left"}>
            <div className={side === 'right' ? 'right-shoe' : 'left-shoe'} >
                <div className="foot-info-container">
                    {side === "right" ?
                    <h1 className="foot-header">r͛⦚i͛⦚g͛⦚h͛⦚t͛⦚</h1>
                    :
                    <h1 className="foot-header">█▄ █☰ █▀ ▀█▀</h1>
                    }
                    {side === "right" ?
                    <p className="foot-info">⥁</p>
                    :
                    <p className="foot-info">✌︎</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Foot
