import React, {useEffect, useState} from "react";
import "./MyEvents.css";

function MyEvents() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getEventDetails();
  }, [])


  const getEventDetails = () =>{
    const user_id = 1;
    fetch("http://localhost:8000/my-events/"+user_id+"/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCurrentEvents(result.currentEvents);
          setPastEvents(result.pastEvents);
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  // const onRegisterClick = (id) =>{
  //   const user_id = 1;
  //   const payload = {
  //       student: user_id,
  //       event : id,
  //       status: 'Active'
  //   }
  //   fetch("http://localhost:8000/register-student-for-event/", {
  //     method: 'POST',
  //     body: JSON.stringify(payload),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setCurrentEvents(result.currentEvents);
  //         setPastEvents(result.pastEvents);
  //         console.log(result);
  //         getEventDetails();
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }

  const onUnregisterClick = (id) =>{
    const user_id = 1;
    const payload = {
        user: user_id,
        event : id,
        status: 'Active'
    }
    fetch("http://localhost:8000/unregister-student-for-event/"+id+"/", {
      method: 'DELETE',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          getEventDetails()
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          getEventDetails()
        }
      );
  }

  return (
    <div className="myevents">
      <div className="myevents__grid">
        <div className="myevents__grid__item">
          <h2>Current Registered Events</h2>
          <div className="myevents__grid__item__events">
            {currentEvents && currentEvents.map((registeredEvent, i) => (
              <div key={i} className="myevents__grid__item__events__item">
                <img  
                  src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg"
                  alt="Event 1"
                />
                <p className="myevents__grid__item__events__item___heading">
                  {registeredEvent.event.event_name}
                </p>
                <p className="myevents__grid__item__events__item___subtitle">
                  {registeredEvent.event.company_name}
                </p>
                <p className="myevents__grid__item__events__item___subsubtitle">
                  {new Date(registeredEvent.event.registration_last_date).toLocaleString().replace(', ', ' | ')}
                </p>
                <p>
                  <button onClick={()=>onUnregisterClick(registeredEvent.id)}>Withdraw Registration</button>
                </p>
              </div>

            ))}
          </div>
        </div>
        <div className="myevents__grid__item">
          <h2>Past Registered Events</h2>
          <div className="myevents__grid__item__events">
            {pastEvents && pastEvents.map((registeredEvent, i) => (
              <div key={i} className="myevents__grid__item__events__item">
                <img  
                  src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg"
                  alt="Event 1"
                />
                <p className="myevents__grid__item__events__item___heading">
                  {registeredEvent.event.event_name}
                </p>
                <p className="myevents__grid__item__events__item___subtitle">
                  {registeredEvent.event.company_name}
                </p>
                <p className="myevents__grid__item__events__item___subsubtitle">
                  {new Date(registeredEvent.event.registration_last_date).toLocaleString().replace(', ', ' | ')}
                </p>
                {/* <p>
                  <button onClick={()=>onRegisterClick(registeredEvent.id)}>Register</button>
                </p> */}
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEvents;
