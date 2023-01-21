import React from "react";

const hello = "Hello, World!"

export class Hello extends React.Component {
  render() {
    return <h1>{ hello }</h1>
  }
}
