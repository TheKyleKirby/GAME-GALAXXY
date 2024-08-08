import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Homepage from './pages/Homepage'
import Footer from './pages/Footer'
import Profile from './pages/Profile'
import Tutorial from './pages/Tutorial'
import Results from './pages/Results'
import Blog from './pages/Blog'

// authenticate any request sent by the user to backend while user is logged in
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
  });

// check link between front end and backend
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
        <ApolloProvider client={client}>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/tutorial' element={<Tutorial />} />
                    <Route path='/results' element={<Results />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            <Footer />
        </ApolloProvider>
        </>

    )
}

export default App