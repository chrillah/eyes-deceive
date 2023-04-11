import React, { useContext } from 'react'
import OpticalChoice from '../components/OpticalChoice'
import { UserInfo } from '../UserInfo'

function OpticalIllusion() {
    const clock = useContext(UserInfo)
  return (
    <div>
        <OpticalChoice choice={true} clock={clock}/>
    </div>
  )
}

export default OpticalIllusion
