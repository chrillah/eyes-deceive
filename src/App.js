import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Grid from './pages/Grid'
import Spaced from './pages/Spaced'
import Footer from './components/Footer'
import OpticalIllusion from './pages/OpticalIllusion'
import Test from './components/Clock'

import { UserInfo } from './UserInfo'
import Foot from './pages/Foot'

function App() {
    return (
        <>
            <NavBar />
            <UserInfo.Provider value={<Test />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/grid" element={<Grid />} />
                    <Route path="/spaced" element={<Spaced />} />
                    <Route path="/optical" element={<OpticalIllusion />} />
                    <Route path="/foot/:side" element={<Foot />} />
                </Routes>
            </UserInfo.Provider>
            <Footer />
        </>
    )
}

export default App
