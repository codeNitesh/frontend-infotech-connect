import React, {useEffect, useState} from "react";
import "./Dashboard.css";
import { Outlet, Link } from "react-router-dom";

function Dashboard({BASEURL}) {

  const [colleges, setColleges] = useState([]);
  const [competitive_events, setCompetitiveEvents] = useState([]);
  const [current_events, setCurrentEvents] = useState([]);
  const [upcoming_events, setUpcomingEvents] = useState([]);

  useEffect(() => {
    getDashboardDate();
  }, []);

  const getDashboardDate = () => {
    const token = localStorage.getItem("INFOTECT_TOKEN");

    fetch(BASEURL+"/dashboard-data/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Token ${token}`,
      }
    })
    .then((res) => res.json())
    .then(
      (result) => {
        setColleges(result.colleges);
        setCompetitiveEvents(result.competitive_events);
        setCurrentEvents(result.current_events);
        setUpcomingEvents(result.upcoming_events);
        console.log(result);
      },
      (error) => {
        // setIsLoaded(true);
        // setError(error);
        console.log(error);
      }
    );
  
  }
  return (
    <div className="main-box">
      <div className="box-college">
        <div className="heading-bar">
          <p className="heading">Colleges</p>
          <p className="heading-view-more">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="colleges">View all {">>"}</Link>
          </p>
        </div>

        <div className="card-content">
          {colleges.map((college, index) => (
            <div key={index} className="grid-item">
              <img src={college.img} />
              <p><span style={{fontWeight: 700}}>{college.name}</span> - {college.address}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="box-current-events">
        <div className="heading-bar">
          <p className="heading">Current Opportunities</p>
          <p className="heading-view-more">{">>"}</p>
        </div>
        <div className="card-content">
          {current_events.map((event, index) => (
            <div key={index} className="grid-item">
              <img src={event.img} />
              <div className="grid-info">
                <p className="grid-info-title">{event.event_name}</p>
                <p className="grid-info-subtitle">{event.company_name}</p>
              </div>
              </div>
          ))}
        </div>
      </div>
      <div className="box-coding">
        <div className="heading-bar">
          <p className="heading">Competitive Coding</p>
          <p className="heading-view-more">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="my-events">View all {">>"}</Link>
          </p>
        </div>
        <div className="card-content">
          {competitive_events.map((event, index) => (
            <div key={index} className="grid-item">
              {index%3 === 0 ? <img src="https://economictimes.indiatimes.com/thumb/msid-57387551,width-1200,height-900,resizemode-4,imgsize-4974333/hackerearth-now-seeks-coders-across-seven-seas.jpg?from=mdr" />
              : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rOQU0ckrbpn47PtVXV4d7E6PVgFzlFJoNQ" />}
              <p><span style={{fontWeight: 700}}>{event['name']}</span> - {event['type_']}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="box-upcoming-events">
        <div className="heading-bar">
          <p className="heading">Upcoming Opportunities</p>
          <p className="heading-view-more">{">>"}</p>
        </div>
        <div className="card-content">
          {upcoming_events.map((event, index) => (
            <div key={index} className="grid-item">
              <div className="grid-info">
                <p className="grid-info-title">{event.event_name}</p>
                <p className="grid-info-subtitle">{event.company_name}</p>
                <p className="grid-info-subtitle-subtitle">
                {new Date(event.registration_last_date)
                    .toLocaleString()
                    .replace(", ", " | ").replaceAll("/", "-")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
