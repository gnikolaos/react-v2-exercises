import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Welcome from '../Welcome'
import HookCounter from '../HookCounter'
import ShowGithubUser from './ShowGithubUser'

function App() {
  const { username } = useParams()
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome name='Percival' />} />
        <Route path='/counter' element={<HookCounter />} />
        <Route path='/users/:username' element={<ShowGithubUser username={username} />} />
      </Routes>
    </div>
  )
}

export default App
