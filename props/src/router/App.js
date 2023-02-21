import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import Welcome from '../Welcome'
import HookCounter from '../HookCounter'
import ShowGithubUser from './ShowGithubUser'
import NavBar from './NavBar'

function App() {
  const { username } = useParams()
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome name='Percival' />} />
        <Route path='/counter' element={<HookCounter />} />
        <Route
          path='/users/:username'
          element={<ShowGithubUser username={username} />}
        />
        <Route
          path='*'
          element={
            <div>
              <p>Not Found!</p>
              <Link to='/'>Home</Link>
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
