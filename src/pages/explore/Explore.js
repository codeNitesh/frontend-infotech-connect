import React, { useEffect, useState } from "react";
import "./Explore.css";
import { useNavigate } from "react-router-dom";


function Explore({notify, BASEURL}) {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let navigate = useNavigate(); 

  useEffect(() => {
    getEventDetails();
  }, []);

  
  const getEventDetails = ()=>{
    fetch(BASEURL+"/all-events/")
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
    const token = localStorage.getItem("INFOTECT_TOKEN")
    const payload = {
        event : id,
        status: 'Active'
    }
    fetch(BASEURL+"/register-student-for-event/", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Token ${token}` 
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if(result?.error === 'Already registered'){
            notify('You have already registered for this event')
          }else if(result.error){
            notify(result.error)
            navigate("/login");
            localStorage.clear()
            return;
          }else{
            notify('Registered Successfully')
          }

          setIsLoaded(true);
          setCurrentEvents(result.currentEvents);
          setPastEvents(result.pastEvents);

          
          getEventDetails();
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          notify('Error')
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
                    .replace(", ", " | ").replaceAll("/", "-")}
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
