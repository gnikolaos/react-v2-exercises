import React from 'react'
import { Welcome } from './Welcome'

export class App extends React.Component {
  render() {
    return <Welcome name={<b>Bold Garen</b>} age='35' />
  }
}
