import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import { MainPage } from './pages/MainPage'
import { BookListPage } from './pages/BookListPage'
import { BookPage } from './pages/BookPage'
import { AuthorsPage } from './pages/AuthorsPage'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/books">
            <BookListPage />
          </Route>
          <Route exact path="/book/:id">
            <BookPage />
          </Route>
          <Route exact path="/authors">
            <AuthorsPage />
          </Route>
        </div>
      </Router>
    </div>
  )
}

export default App
