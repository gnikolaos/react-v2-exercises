import React from 'react'
import { Welcome } from './Welcome'
import { Counter } from './Counter'

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={<b>Bold Garen</b>} age='15' />
        <Counter />
      </div>
    )
  }
}
