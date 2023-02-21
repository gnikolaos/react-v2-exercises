import React from 'react'
import { Routes, Route, useParams, Link } from 'react-router-dom'
import Welcome from '../Welcome'
import HookCounter from '../HookCounter'
import ShowGithubUser from './ShowGithubUser'

function App() {
  const username  = 'dizars1776'
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Welcome</Link>
          </li>
          <li>
            <Link to='/counter'>Hook Counter</Link>
          </li>
          <li>
            <Link to={`/users/${username}`}>Show Github user: {username}</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Welcome name='Percival' />} />
        <Route path='/counter' element={<HookCounter />} />
        <Route
          path='/users/:username'
          element={<ShowGithubUser username={username} />}
        />
      </Routes>
    </div>
  )
}

export default App
