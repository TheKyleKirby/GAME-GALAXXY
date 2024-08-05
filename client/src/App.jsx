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