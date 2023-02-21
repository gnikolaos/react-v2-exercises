import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Welcome from '../Welcome'
import HookCounter from '../HookCounter'
import NavBar from './NavBar'
import GithubUserList from './GithubUserList2'
import ShowGithubUser from './ShowGithubUser'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome name='Percival' />} />
        <Route path='/counter' element={<HookCounter />} />
        <Route path='/users/' element={<GithubUserList />}>
          <Route path=':username' element={<ShowGithubUser />} />
        </Route>
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
