import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Grid from './pages/Grid'
import Spaced from './pages/Spaced'
import Footer from './components/Footer'
import OpticalIllusion from './pages/OpticalIllusion'
import Clock from './components/Clock'
import NotFound from './pages/NotFound'

import { UserInfo } from './UserInfo'
import Foot from './pages/Foot'
import Display from './pages/Display'

function App() {
    return (
        <>
            <NavBar />
            <UserInfo.Provider value={<Clock />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/grid" element={<Grid />} />
                    <Route path="/spaced" element={<Spaced />} />
                    <Route path="/optical" element={<OpticalIllusion />} />
                    <Route path="/display/:style" element={<Display />} />
                    <Route path="/foot/:side" element={<Foot />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </UserInfo.Provider>
            <Footer />
        </>
    )
}

export default App
