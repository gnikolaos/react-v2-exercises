import React from 'react'
import { CounterDisplay } from './CounterDisplay'

export class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.initValue,
    }
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementValue,
        }
      })
    }, this.props.incrementInterval)
  }

  render() {
    return <CounterDisplay countState={this.state.count} />
  }
}

Counter.defaultProps = {
  initValue: 0,
  incrementValue: 1,
  incrementInterval: 1000,
}
