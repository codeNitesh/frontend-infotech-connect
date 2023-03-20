import React, { useEffect, useState } from "react";
import "./Explore.css";

function Explore({notify}) {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getEventDetails();
  }, []);

  
  const getEventDetails = ()=>{
    fetch("http://localhost:8000/all-events/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCurrentEvents(result.currentEvents);
          setPastEvents(result.pastEvents);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }
  const onRegisterClick = (id) =>{
    const user_id = 1;
    const payload = {
        student: user_id,
        event : id,
        status: 'Active'
    }
    fetch("http://localhost:8000/register-student-for-event/", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCurrentEvents(result.currentEvents);
          setPastEvents(result.pastEvents);

          if(result?.error === 'Already registered'){
            notify('You have already registered for this event')
          }else{
            notify('Registered Successfully')
          }
          getEventDetails();
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  
  return (
    <div className="myevents">
      <div className="myevents__grid">
        <div className="myevents__grid__item">
          <h2>Current On-going Events</h2>
          <div className="myevents__grid__item__events">
            {currentEvents && currentEvents.map((event, i) => (
              <div key={i} className="myevents__grid__item__events__item">
                <img
                  src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg"
                  alt="Event 1"
                />
                <p className="myevents__grid__item__events__item___heading">
                  {event.event_name}
                </p>
                <p className="myevents__grid__item__events__item___subtitle">
                  {event.company_name}
                </p>
                <p className="myevents__grid__item__events__item___subsubtitle">
                  {new Date(event.registration_last_date)
                    .toLocaleString()
                    .replace(", ", " | ")}
                </p>
                <p>
                  <button onClick={()=>onRegisterClick(event.id)}>Register</button>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="myevents__grid__item">
          <h2>Past Events</h2>
          <div className="myevents__grid__item__events">
            {pastEvents && pastEvents.map((event, i) => (
              <div key={i} className="myevents__grid__item__events__item">
                <img
                  src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg"
                  alt="Event 1"
                />
                <p className="myevents__grid__item__events__item___heading">
                  {event.event_name}
                </p>
                <p className="myevents__grid__item__events__item___subtitle">
                  {event.company_name}
                </p>
                <p className="myevents__grid__item__events__item___subsubtitle">
                  {new Date(event.registration_last_date)
                    .toLocaleString()
                    .replace(", ", " | ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
