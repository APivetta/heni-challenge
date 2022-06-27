import { PrintsPage } from './pages/prints/PrintsPage'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'

import './index.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root')!
)

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrintsPage />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)
