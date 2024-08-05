import { Link, Routes, Route } from 'react-router-dom'
import TestHome from './pages/TestHome'
import FakeOther from './pages/FakeOther'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<TestHome />} />
                {/* <Route path='/results' element={<ResultsPage />} /> */}
                {/* <Route path='/createguide' element={<CreateGuidePage />} /> */}
                {/* <Route path='/guide/:id' element={<GuidePage />} /> */}
                {/* <Route path='/dashboard' element={<DashboardPage />} />  */}
                {/* <Route path='*' element={<NotFoundPage />} />  */}
                <Route path='/test' element={<TestHome />} />
                <Route path='/other' element={<FakeOther />} />
            </Routes>
        </>

    )
}

export default App