import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import store from './store'

import App from './components/app/App';
import CounterView from './components/counter-view/CounterView'
import SmartCounterView from './components/smart-counter-view/SmartCounterView'
import MainInfoView from './components/main-info-view/MainInfoView'
import ContactsView from './components/contacts-view/ContactsView'
import UsersView from './components/users-view/UsersView'
import CalendarView from './components/calendar-view/CalendarView'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import './index.css';

import { fetchUsers } from './state/users/actionCreators'

const fetchUsersOnEnter = () => store.dispatch(fetchUsers())

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/counter" component={CounterView}/>
        <Route path="/smartcounter" component={SmartCounterView}/>

        <Route path="/maininfo" component={MainInfoView}/>

        <Route path="/contacts" component={ContactsView}/>

        <Route path="/users" component={UsersView} onEnter={fetchUsersOnEnter}/>

        <Route path="/calendar" component={CalendarView}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
