import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import './App.css'

const mapStateToProps = (state) => ({
  value: state.counter.value
})

const App = (props) => (
  <Grid>
    <Navbar collapseOnSelect fixedTop inverse>

      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/maininfo"> ZADANIA DOMOWE </Link>
        </Navbar.Brand>

        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={1} title="Zadanie #7" id="basic-nav-dropdown">
            <LinkContainer to="/counter">
              <MenuItem eventKey={1.01}>Zadanie #7 this.setState</MenuItem>
            </LinkContainer>

            <LinkContainer to="/smartcounter">
              <MenuItem eventKey={1.02}>Zadanie #7 redux </MenuItem>
            </LinkContainer>
          </NavDropdown>

          <LinkContainer to="/contacts">
            <NavItem eventKey={2}>Zadanie #8</NavItem>
          </LinkContainer>

          <LinkContainer to="/users">
            <NavItem eventKey={3}>Zadanie #9</NavItem>
          </LinkContainer>

          <LinkContainer to="/calendar">
            <NavItem eventKey={3}>Zadanie #10</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Row>
      <Col md={12}>
        {props.children}
      </Col>
    </Row>

  </Grid>
)
export default connect(mapStateToProps)(App)