import React from 'react'
import './container.css'

class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>{this.props.title}</h1>
        <p>Container Component</p>
      </div>
    )
  }
}

export default Container
