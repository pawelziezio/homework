import React from 'react'
import {connect} from 'react-redux'

import {Table, Well, Grid, Row, Col} from 'react-bootstrap'

const mapStateToProps = state => ({
  users: state.usersData.users
})

const UsersView = (props) => {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <hr/>
      <h3>ZADANIE 9 </h3>
      <h4> dane w tabeli pobrane asynchronicznie funkcją <code> fetch </code></h4>
      <hr/>
      <Col xs={8} xsOffset={1}>
        <h3>Użytkowinicy:</h3>
      </Col>
      <br/>
      <br/>
      <br/>
      <Grid>
        <Row>
          <Col xs={9} xsOffset={1}>
            <Well>

              <Table striped bordered condensed hover responsive>
                <thead >
                <tr >
                  <th></th>
                  <th>Imię</th>
                  <th>Nazwisko</th>
                  <th>Email</th>
                  <th>Użytkownik</th>
                  <th>Państwo</th>
                  <th>Miasto</th>

                </tr>
                </thead>
                <tbody >
                {
                  props.users.map(
                    user =>
                      <tr key={user.id}>
                        <td >{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.user}</td>
                        <td>{user.country}</td>
                        <td>{user.city}</td>
                      </tr>
                  )
                }
                </tbody>
              </Table>

            </Well>
          </Col>
        </Row>
      </Grid>

    </div>
  )
}

export default connect(mapStateToProps)(UsersView)