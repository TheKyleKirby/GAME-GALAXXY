import { Link, Routes, Route } from 'react-router-dom'
import TestHome from './pages/TestHome'
import FakeOther from './pages/FakeOther'

//token - authenticates any req and sends to backend while user is logged in
import {setContext} from '@apollo/client/link/context'

// middleware - setContext - checking link between backend and frontend
const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : '',
	  },
	};
  });

  const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
  });

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