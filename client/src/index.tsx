import { PrintsPage } from './pages/prints/PrintsPage'
import { PrintPage } from './pages/print/PrintPage'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'

import './index.css'
import { NotFoundPage } from './pages/not-found/NotFoundPage'

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
        <Route path='/' element={<Navigate replace to='/prints/1' />} />
        <Route path='/prints/:page' element={<PrintsPage />} />
        <Route path='/print/:id' element={<PrintPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)
