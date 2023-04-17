import React, { useEffect, useState } from "react";
import './AdminDashboard.css';
import { useNavigate } from "react-router-dom";

import noImage from '../../../No_Image_Available.jpg';

const AdminDashboard = ({ BASEURL, notify }) => {

  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("INFOTECT_TOKEN");

    fetch(BASEURL + "/event_detail_for_admin/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setEvents(result);
          console.log(result);
        },
        (error) => {
          console.log("error");
        }
      );
  }, []);

  const onEventClickHandler = (id) => {
    navigate(`${id}`);
  }

  return (
    <div style={{width: '100%'}}>
      <div className="colleges">
        <h1>All Events</h1>

        <div className="colleges__grid">
          {events.map((college, i) => (
            <div key={i} className="colleges__grid__item" onClick={()=>onEventClickHandler(college.id)}>
              {college.img === null ? (
                <img src={noImage} />
              ) : <img src={college.img} />}
              
              <p>{college.event_name}</p>
              <p>
                <span>{college.company_name}</span><br/>
                <span>{college.registration_last_date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
