import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css'

import { BookListPage } from './pages/BookListPage'
import { BookPage } from './pages/BookPage'
import { AuthorListPage } from './pages/AuthorListPage'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <Redirect to="/books" />
        </Route>
        <Route exact path="/books">
          <BookListPage />
        </Route>
        <Route path="/book/:id" component={BookPage} />
        <Route exact path="/authors">
          <AuthorListPage />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

export default App
