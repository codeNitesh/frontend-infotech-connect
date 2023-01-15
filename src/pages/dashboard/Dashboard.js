import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.css";
import { Outlet, Link } from "react-router-dom";


function Dashboard() {
  return (
    <div className="main-box">
      <div className="box-college">
        <div className="heading-bar">
          <p className="heading">Colleges</p>
          <p className="heading-view-more">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/colleges">View all {">>"}</Link>
          </p>
        </div>

        <div className="card-content">
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <p>Modern Institute of Technology and Reserach Centre, Alwar</p>
          </div>
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <p>Modern Institute of Technology and Reserach Centre, Alwar</p>
          </div>
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <p>Modern Institute of Technology and Reserach Centre, Alwar</p>
          </div>
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <p>Modern Institute of Technology and Reserach Centre, Alwar</p>
          </div>
        </div>
      </div>
      <div className="box-current-events">
        <div className="heading-bar">
          <p className="heading">Current Opportunities</p>
          <p className="heading-view-more">{">>"}</p>
        </div>
        <div className="card-content">
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <div className="grid-info">
              <p className="grid-info-title">Meta Cube Drive</p>
              <p className="grid-info-subtitle">Software Developer</p>
            </div>
          </div>
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <div className="grid-info">
              <p className="grid-info-title">Meta Cube Drive</p>
              <p className="grid-info-subtitle">Software Developer</p>
            </div>
          </div>
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <div className="grid-info">
              <p className="grid-info-title">Meta Cube Drive</p>
              <p className="grid-info-subtitle">Software Developer</p>
            </div>
          </div>
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <div className="grid-info">
              <p className="grid-info-title">Meta Cube Drive</p>
              <p className="grid-info-subtitle">Software Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-coding">
        <div className="heading-bar">
          <p className="heading">Competitive Coding</p>
          <p className="heading-view-more">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/my-events">View all {">>"}</Link>
          </p>
        </div>
        <div className="card-content">
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <p>Modern Institute of Technology and Reserach Centre, Alwar</p>
          </div>
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <p>Modern Institute of Technology and Reserach Centre, Alwar</p>
          </div>
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <p>Modern Institute of Technology and Reserach Centre, Alwar</p>
          </div>
          <div class="grid-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16" />
            <p>Modern Institute of Technology and Reserach Centre, Alwar</p>
          </div>
        </div>
      </div>
      <div className="box-upcoming-events">
        <div className="heading-bar">
          <p className="heading">Upcoming Events</p>
          <p className="heading-view-more">{">>"}</p>
        </div>
        <div className="card-content">
          <div class="grid-item">
            <div className="grid-info">
              <p className="grid-info-title">How to improve coding skills</p>
              <p className="grid-info-subtitle">By Mr. Shashi Kant Raza</p>
              <p className="grid-info-subtitle-subtitle">
                13:00 | Jan 25, 2023
              </p>
            </div>
          </div>
          <div class="grid-item">
            <div className="grid-info">
              <p className="grid-info-title">How to improve coding skills</p>
              <p className="grid-info-subtitle">By Mr. Shashi Kant Raza</p>
              <p className="grid-info-subtitle-subtitle">
                13:00 | Jan 25, 2023
              </p>
            </div>
          </div>
          <div class="grid-item">
            <div className="grid-info">
              <p className="grid-info-title">How to improve coding skills</p>
              <p className="grid-info-subtitle">By Mr. Shashi Kant Raza</p>
              <p className="grid-info-subtitle-subtitle">
                13:00 | Jan 25, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
