import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import CrazyCorner from './pages/CrazyCorner'
import Footer from './components/Footer'


function App() {
    return <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crazy-corner" element={<CrazyCorner />} />
    </Routes>
    <Footer />
    </>
}

export default App
