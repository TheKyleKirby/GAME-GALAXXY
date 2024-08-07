import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Homepage from './pages/Homepage'
import Footer from './pages/Footer'
import Profile from './pages/Profile'
import Tutorial from './pages/Tutorial'
import Results from './pages/Results'
import Blog from './pages/Blog'


const App = () => {
    return (
        <>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/tutorial' element={<Tutorial />} />
                    <Route path='/results' element={<Results />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            <Footer />

        </>

    )
}

export default App