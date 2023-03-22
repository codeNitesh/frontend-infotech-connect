import React, { useEffect, useState } from "react";
import "./MyEvents.css";
import { useNavigate } from "react-router-dom";

function MyEvents({ notify, BASEURL }) {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  let navigate = useNavigate(); 

  useEffect(() => {
    getEventDetails();
  }, []);

  const getEventDetails = () => {
    const token = localStorage.getItem("INFOTECT_TOKEN");
    fetch(BASEURL + "/my-events/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Token ${token}`,
      }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if(result.error){
            notify(result.error)
            navigate("/login");
            localStorage.clear()
            return;
          }
          setIsLoaded(true);
          setCurrentEvents(result.currentEvents);
          setPastEvents(result.pastEvents);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          notify("Error while fetching events...")
        }
      );
  };

  // const onRegisterClick = (id) =>{
  //   const user_id = 1;
  //   const payload = {
  //       student: user_id,
  //       event : id,
  //       status: 'Active'
  //   }
  //   fetch(BASEURL+"/register-student-for-event/", {
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

  const onUnregisterClick = (id) => {
    const token = localStorage.getItem("INFOTECT_TOKEN")
    fetch(BASEURL + "/unregister-student-for-event/" + id + "/", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          notify(
            "You have successfully withdrawn your registration for the event!"
          );
          getEventDetails();
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          getEventDetails();
        }
      );
  };

  return (
    <div className="myevents">
      <div className="myevents__grid">
        <div className="myevents__grid__item">
          <h2>Current Registered Events</h2>
          <div className="myevents__grid__item__events">
            {currentEvents.length === 0 ? (
              <p className="no-data-error">No Data Available</p>
            ) : null}
            {currentEvents &&
              currentEvents.map((registeredEvent, i) => (
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
                    {new Date(registeredEvent.event.registration_last_date)
                      .toLocaleString()
                      .replace(", ", " | ")}
                  </p>
                  <p>
                    <button
                      onClick={() => onUnregisterClick(registeredEvent.id)}
                    >
                      Withdraw Registration
                    </button>
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="myevents__grid__item">
          <h2>Past Registered Events</h2>
          <div className="myevents__grid__item__events">
            {pastEvents.length === 0 ? (
              <p className="no-data-error">No Data Available</p>
            ) : null}
            {pastEvents &&
              pastEvents.map((registeredEvent, i) => (
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
                    {new Date(registeredEvent.event.registration_last_date)
                      .toLocaleString()
                      .replace(", ", " | ")}
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
