import React, { useContext } from 'react'
import OpticalChoice from '../components/OpticalChoice'
import { UserInfo } from '../UserInfo'

function OpticalIllusion() {
    const clock = useContext(UserInfo)
    const isTrue = true
    return (
        <div>
            {isTrue ? (
                <OpticalChoice choice={true} clock={clock} />
            ) : (
                <OpticalChoice choice={false} />
            )}
        </div>
    )
}

export default OpticalIllusion
