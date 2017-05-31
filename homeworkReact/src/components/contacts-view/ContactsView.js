import React from 'react'
import {  Form,
          Button,
          FormGroup,
          ControlLabel,
          FormControl} from 'react-bootstrap'

export default class ContactsView extends React.Component {

  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
      this.setState({
          users: this.state.users.concat(
            {
              id: new Date().getTime(),
              name: this.state.name,
              surname: this.state.surname,
              age: this.state.age
            })
        }, function () {
          localStorage.setItem('contacts-state', JSON.stringify(this.state))
        }
      )
    }
    const data=localStorage.getItem('contacts-state')
    if (data) {
      this.state=JSON.parse(data)
    } else {
      this.state={
        name: '',
        surname: '',
        age: '',
        users: [  ]
      }
    }
  }


  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <hr/>
        <h3>ZADANIE 8  </h3>
        <h4> formularz pozwalający na dodawanie kontaktów - dane zapisują się w <code> local-storage </code></h4>
        <hr/>
        <h3>Dodaj kontakt:</h3>
        <hr/>
        <Form inline onSubmit={this.handleSubmit}>

          <FormGroup bsSize="sm" controlId="formInlineName">
            <ControlLabel>Imię:</ControlLabel>
            {' '}
            <FormControl type="text"
                         placeholder="Jan"
                         onChange={event => this.setState({name: event.target.value})}
            />
            {' '}
            <ControlLabel>Nazwisko:</ControlLabel>
            {' '}
            <FormControl type="text"
                         placeholder="Kowalski"
                         onChange={event => this.setState({surname: event.target.value})}
            />
            {' '}
            <ControlLabel>Wiek:</ControlLabel>
            {' '}
            <FormControl type="number"
                         placeholder="0"
                         onChange={event => this.setState({age: event.target.value})}
            />
          </FormGroup>
          {' '}
          <Button type="submit" bsSize="sm">Zapisz</Button>
        </Form>
        <hr/>
        <h4>Kontakty zapisane do 'localStorage':</h4>
        <ul>
          {
            this.state.users.map(
              user =>
                <li key={user.id}>
                  {user.name} {user.surname} {user.age}
                </li>
            )
          }
        </ul>
        <hr/>
      </div>
    )
  }
}