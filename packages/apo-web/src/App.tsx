import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import { MainPage } from './pages/MainPage'
import { BooksPage } from './pages/BooksPage'
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
            <BooksPage />
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
