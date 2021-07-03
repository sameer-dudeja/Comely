import Login from './components/login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/home/Home'
import './App.css'

function App() {
  // console.log(data[0].permission)
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/' component={Login} />
        </Switch>
      </Router>
    </>
  )
}

export default App
