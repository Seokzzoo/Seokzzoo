import React, { Component } from "react"

class Heading extends Component {
  render() {
    if (this.props.type === "h2") {
      return <h2>{this.props.children}</h2>
    }
    return <h1>{this.props.children}</h1>
  }
}

export default Heading
