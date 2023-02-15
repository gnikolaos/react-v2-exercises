import React from 'react'
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { ClickCounter } from './ClickCounter'
import { ClickTracker } from './ClickTracker'
import InteractiveWelcome from './forms/InteractiveWelcome'
import LogIn from './forms/LogIn'

function OnLogin(state) {
  console.log(`state: ${state.username} ${state.password} ${state.checkbox}`)
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={<b>Bold Garen</b>} age='15' />
        <Counter initValue={100} incrementValue={-5} incrementInterval={1000} />
        <ClickCounter />
        <ClickTracker />
        <section>
          <h2>Forms</h2>
          <InteractiveWelcome />
        </section>
        <section>
          <LogIn onLogin={OnLogin} />
        </section>
      </div>
    )
  }
}
