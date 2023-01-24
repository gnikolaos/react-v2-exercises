import React from 'react'

export class Age extends React.Component {
  render() {
    return <p>Your age is {this.props.age}.</p>
  }
}

Age.defaultProps = {
  age: 30,
}
