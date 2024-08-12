import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Tutorial from './pages/Tutorial'
import Results from './pages/Results'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import CreateTutorial from './pages/CreateTutorial'




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
                    <Route path='/createtutorial' element={<CreateTutorial />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            <Footer />
        </>

    )
}

export default App