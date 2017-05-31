import React from 'react'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'


BigCalendar.momentLocalizer(moment);

moment.locale("pl");

export default class CalendarView extends React.Component {
  constructor() {
    super  ()

    this.state = {
      events: [
        {
          title: 'Dwie zupy',
          start: new Date(2017, 0, 3),
          end: new Date(2017, 0, 4)
        },
        {
          title: 'Long Zupa',
          start: new Date(2017, 0, 5),
          end: new Date(2017, 0, 6)
        },
        {
          title: 'Some Zupa',
          start: new Date(2017, 0, 14, 8, 0, 0),
          end: new Date(2017, 0, 14, 10, 30, 0)
        },
        {
          title: 'Conference Zupa',
          start: new Date(2017, 0, 13, 13, 0, 0),
          end: new Date(2017, 0, 13, 18, 0, 0)
        },
        {
          title: 'Meeting Zup',
          start: new Date(2017, 0, 10, 10, 30, 0, 0),
          end: new Date(2017, 0, 10, 12, 30, 0, 0)
        },
        {
          title: 'Lunch Zupa',
          start: new Date(2017, 0, 9, 12, 0, 0, 0),
          end: new Date(2017, 0, 9, 13, 0, 0, 0)
        }
      ]
    }

    this.newEvent = (slotInfo) => {
      event.preventDefault()

      const name = prompt('Wydarzenie:', 'Sex, drugs and rockandroll czy różaniec u Babci?')

      this.setState({
          events: this.state.events.concat({
            title: name,
            start: slotInfo.start,
            end: slotInfo.end
          })
        }, function () {
          localStorage.setItem('events-state', JSON.stringify(this.state))
        }
      )
    }
  }


  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <hr/>
        <h3>ZADANIE 10 </h3>
        <h4>Użycie <code>react-big-calendar</code> z możliwością zapisywania wydarzeń do <code>local store</code>.</h4>
        <hr/>
        <div>
          <h3>BigCalendar</h3>
          <hr/>
          <div>

            <div style={{height: 500}}>
              <BigCalendar
                selectable
                popup
                onSelectSlot={(slotInfo) => this.newEvent(slotInfo)}

                events={this.state.events}
                step={15}
                timeslots={6}
                defaultView='week'
                defaultDate={new Date()}
                messages={{
                  allDay: 'cały dzień',
                  week: 'tydzień',
                  day: 'dzień',
                  month: 'miesiąc',
                  next: 'następny',
                  back: 'poprzedni',
                  today: 'dziś'
                }}

              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
