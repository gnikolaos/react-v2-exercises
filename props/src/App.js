import React from 'react'
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { ClickCounter } from './ClickCounter'
import { ClickTracker } from './ClickTracker'

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={<b>Bold Garen</b>} age='15' />
        <Counter initValue={100} incrementValue={-5} incrementInterval={1000} />
        <ClickCounter />
        <ClickTracker />
      </div>
    )
  }
}
