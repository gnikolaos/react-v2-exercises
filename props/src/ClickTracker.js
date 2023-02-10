import React from 'react'

export class ClickTracker extends React.Component {
  state = { lastBtn: '...' }
  handleClick = (e) => {
    this.setState(() => {
      return {
        lastBtn: e.target.innerText,
      }
    })
  }
  render() {
    return (
      <>
        <h1>Last Button Pressed: {this.state.lastBtn}</h1>
        <div>
          <button onClick={this.handleClick}>Button 1</button>
          <button onClick={this.handleClick}>Button 2</button>
          <button onClick={this.handleClick}>Button 3</button>
        </div>
      </>
    )
  }
}
