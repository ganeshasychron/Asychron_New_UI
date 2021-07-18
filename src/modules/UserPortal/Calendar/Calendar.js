import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { createEventId } from "./event-utils";
import "./Calendar.css";
import { FaSquare } from "react-icons/fa";
import * as services from "../../../services/services";

class Calendar extends React.Component {
  state = {
    weekendsVisible: true,
    dob: "",
    leaveFrom: "",
    leaveTo: "",
    currentEvents: [],
    initialEvents: [],
  };

  componentDidMount() {
    this.getUsersData();
  }
  async getUsersData() {
    
    await services.getService("leaves").then((res) => {
      console.log(res.data);
      let eventArr = this.generateEvents(res.data.Leaves);
      this.setState({
        initialEvents: [...this.state.currentEvents, ...eventArr],
            });
    });
  }

  generateEvents=(data)=>{
    
    let localEvents=[]
    for(let i=0;i<data.length;i++)
    {
      localEvents.push({
        id: createEventId(),
        title: "Leaves",
        start: data[i].leaveFrom,
        end: data[i].leaveTo,
        color: "peachpink",
        
      });console.log(localEvents)
    }
    return localEvents;
    
  }

  render() {
   
    return (
      <div className="jumbotron-calendar">
        <div className="demo-app">
          <div className="demo-app-main">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              
              }}
              themeSystem= 'bootstrap'
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={this.state.weekendsVisible}
              // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
              events={this.state.initialEvents}
              select={this.handleDateSelect}
              eventContent={renderEventContent} // custom render function
              eventClick={this.handleEventClick}
              eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
              /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
            />
          </div>
          {this.renderSidebar()}
        </div>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <div className="calander-square">
            <h5>
              <FaSquare className="calander-event-square-1" /> Leaves
            </h5>
            <h5>
              <FaSquare className="calander-event-square-3" /> Birthday{" "}
            </h5>
            <h5>
              <FaSquare className="calander-event-square-4" /> Events
            </h5>
            <h5>
              <FaSquare className="calander-event-square-2" /> Meetings
            </h5>
          </div>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        color: selectInfo.color,
      });
    }
  };

  handleEventClick = (clickInfo) => {
    if (
      alert(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };
}

const renderEventContent=(eventInfo)=> {
  return (
    <>
    
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {

  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      
      </b>
      <i>{event.title}</i>
    </li>
  );
}

export default Calendar;


// (alias) const INITIAL_EVENTS: {
//     id: string;
//     title: string;
//     start: string;
//     color: string;
// }[]
// import INITIAL_EVENTS

// 0:
// color: "yellow"
// id: "2"
// start: "1997-02-02"
// title: "Leaves"
// __proto__: Object

