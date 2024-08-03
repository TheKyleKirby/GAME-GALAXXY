import { Link, Routes, Route } from 'react-router-dom'
import TestHome from './pages/TestHome'
import FakeOther from './pages/FakeOther'

const App = () => {
	return (
		<>
		{/* Import header */}
			<Routes>
				{/* we'll change this to home page */}
				<Route path='/' element={<TestHome />} />
{/* routes set up, not created/linked yet */}
				{/* <Route path='/results' element={<ResultsPage />} />
				<Route path='/createguide' element={<CreateGuidePage />} />
				<Route path='/guide/:id' element={<GuidePage />} />
				<Route path='/dashboard' element={<DashboardPage />} /> 
				<Route path='*' element={<NotFoundPage />} /> 
				
				*/}



{/* testers for router render */}
				<Route path='/test' element={<TestHome />} />
				<Route path='/other' element={<FakeOther />} />
			</Routes>
			{/* import footer */}
		</>

	)
}

export default App