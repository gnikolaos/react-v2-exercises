import React from 'react'
import Welcome from './Welcome'
import { Counter } from './Counter'
import { ClickCounter } from './ClickCounter'
import { ClickTracker } from './ClickTracker'
import InteractiveWelcome from './forms/InteractiveWelcome'
import LogIn from './forms/LogIn'
import UncontrolledLogIn from './forms/UncontrolledLogIn'
import TodoList from './lists/TodoList'
import Container from './compComposition/Container'
import DisplayLanguage from './DisplayLanguage'
import LanguageContext from './LanguageContext'
import Sum from './Sum'
import HookClickCounter from './HookClickCounter'
import HookCounter from './HookCounter'
import GithubUser from './GithubUser'
import GithubUserList from './GithubUserList'

function OnLogin(state) {
  console.log(`state: ${state.username} ${state.password} ${state.checkbox}`)
}

export class App extends React.Component {
  state = {
    language: 'en',
  }
  handleLanguageChange = (e) => {
    this.setState({
      language: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value='en'>English</option>
          <option value='el'>Ελληνικά</option>
        </select>
        <hr />
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <GithubUser />
        <GithubUserList />
        <Sum />
        <Welcome name={<b>Bold Garen</b>} age='15' />
        <Counter initValue={100} incrementValue={-5} incrementInterval={1000} />
        <HookCounter incrementValue={5} />
        <ClickCounter />
        <HookClickCounter />
        <ClickTracker />
        <section>
          <h2>Forms</h2>
          <InteractiveWelcome />
        </section>
        <section>
          <LogIn onLogin={OnLogin} />
        </section>
        <section>
          <UncontrolledLogIn onLogin={OnLogin} />
        </section>
        <section>
          <TodoList
            render={(todoListItems, handleDelete) => {
              return todoListItems.map((todo, index) => (
                <li key={index}>
                  {todo}&nbsp;
                  <button id={index} onClick={handleDelete}>
                    delete
                  </button>
                </li>
              ))
            }}
          />
        </section>
        <Container title='My Title' />
      </div>
    )
  }
}
