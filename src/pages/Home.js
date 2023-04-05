import React, {useState} from 'react'


function Home() {
const [eyeClass, setEyeClass] = useState(true)

function openEye(){
    setEyeClass(!eyeClass)
}

const eye = eyeClass ? "eye-lid" : "open-eye"
  return (
    <div className='hero-container'>
        <div onClick={openEye} className={eye} >
            <div className="eye" />
        </div>
    </div>
  )
}

export default Home
