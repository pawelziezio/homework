import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { ProgressBar } from 'react-bootstrap'

const mapStateToProps = state => ({
  value: state.counter.value
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({type: 'INCREMENT'}),
  decrement: () => dispatch({type: 'DECREMENT'}),
  reset: () => dispatch({type: 'RESET'})
})

const SmartCounterView = (props) => (
  <div>
    <br/>
    <br/>
    <br/>
    <hr/>
    <h3>ZADANIE 7</h3>
    <h4>licznik podłączony do <code> reduxa </code></h4>
    <hr/>
    <h2>{props.value}</h2>
    <hr/>
    <Button bsStyle="success" onClick={props.increment}>Increment</Button>
    {' '}
    <Button bsStyle="danger" onClick={props.decrement}>Decrement</Button>
    {' '}
    <Button onClick={props.reset}>Reset</Button>
    <br/>
    <hr/>
    <ProgressBar now={props.value} />
    <hr/>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(SmartCounterView)