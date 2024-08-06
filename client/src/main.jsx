import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, InMemoryCache, createHttpLink, ApolloClient  } from '@apollo/client'
import { setContext} from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: 'http://localhost:5000'
})

const authLink = setContext((_, {headers} ) =>{
    const token = localStorage.getItem('id_token')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
            <BrowserRouter>
                <ApolloProvider client={client}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
                </ApolloProvider>
            </BrowserRouter>

)