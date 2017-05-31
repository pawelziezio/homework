import React from 'react'
import { Button } from 'react-bootstrap'
import { ProgressBar } from 'react-bootstrap'

export default class CounterView extends React.Component {
  constructor() {
    super()

    this.state = {
      value: 0
    }

    this.handleIncreaseClick = () => this.setState({
      value: Math.min(this.state.value + 1, 50)
    })

    this.handleDecreaseClick = () => this.setState({
      value: Math.max(this.state.value - 1, 0)
    })

    this.handleResetClick = () => this.setState({
      value: 0
    })
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <hr/>
        <h3>ZADANIE 7</h3>
        <h4>licznik w oparciu o stan komponentu <code> this.setState </code></h4>
        <hr/>
        <h2>{this.state.value}</h2>
        <hr/>
        <Button bsStyle="success" onClick={this.handleIncreaseClick}>Increase</Button>
        {' '}
        <Button bsStyle="danger" onClick={this.handleDecreaseClick}>Decrease</Button>
        {' '}
        <Button onClick={this.handleResetClick}>Reset</Button>
        <br/>
        <hr/>
        <ProgressBar now={this.state.value} />
        <hr/>
      </div>
    )
  }
}