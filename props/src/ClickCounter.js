import React from 'react';

export class ClickCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { countValue: 0 }
    // make `this` work in the callback
    this.incrementValue = this.incrementValue.bind(this)
  }

  incrementValue() {
    this.setState((state) => {
      return { countValue: state.countValue + 1 }
    })
  }
  
  render() {
    return (
      <div>
        <h3>Click Component</h3>
        <p>Current value: {this.state.countValue}</p>
        <button onClick={this.incrementValue}>Increment</button>
      </div>
    )
  }
}
