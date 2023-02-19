import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from '../Welcome'
class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Welcome name='Percival' />} />
        </Routes>
      </div>
    )
  }
}

export default App
