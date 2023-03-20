import React from "react";
import "./Sidebar.css";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Sidebar() {

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");


  return (
    <>
      <div className="Side-bar">
        <div className="Box-logo">INFOTECH</div>
        <div className="Box-menu">
          <ul className="ul-menu">
          <Link to="">
            <li className={splitLocation[1] === "" ? "li-mneu Active-menu" : "li-mneu"}>
              <svg
                className="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
                <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
                <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
              </svg>
              <div className="title-menu">Home</div>              
            </li>
            </Link>
            <Link to="explore">
            <li className={splitLocation[1] === "explore" ? "li-mneu Active-menu" : "li-mneu"}>
              <svg
                className="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M22.5,21H5.5A2.5,2.5,0,0,1,3,18.5V1.5a1.5,1.5,0,0,0-3,0v17A5.506,5.506,0,0,0,5.5,24h17a1.5,1.5,0,0,0,0-3Z" />
                <path d="M9.5,9A1.5,1.5,0,0,0,8,10.5v7a1.5,1.5,0,0,0,3,0v-7A1.5,1.5,0,0,0,9.5,9Z" />
                <path d="M14,13.5v4a1.5,1.5,0,0,0,3,0v-4a1.5,1.5,0,0,0-3,0Z" />
                <path d="M20,9.5v8a1.5,1.5,0,0,0,3,0v-8a1.5,1.5,0,0,0-3,0Z" />
                <path d="M6,7.5a1.487,1.487,0,0,0,.936-.329L9.214,5.35a2.392,2.392,0,0,1,3.191.176,5.43,5.43,0,0,0,7.3.3l3.764-3.185A1.5,1.5,0,1,0,21.531.355L17.768,3.54A2.411,2.411,0,0,1,14.526,3.4a5.389,5.389,0,0,0-7.186-.4L5.063,4.829A1.5,1.5,0,0,0,6,7.5Z" />
              </svg>
              <div className="title-menu">Explore</div>
            </li>
            </Link>
            <Link to="colleges">
            <li className={splitLocation[1] === "colleges" ? "li-mneu Active-menu" : "li-mneu"}>
              <svg
                className="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z" />
                <circle cx="12" cy="15" r="1.5" />
                <circle cx="7" cy="15" r="1.5" />
                <circle cx="17" cy="15" r="1.5" />
              </svg>
              <div className="title-menu">Colleges</div>
            </li>
            </Link>
            <Link to="my-events">
            <li className={splitLocation[1] === "my-events" ? "li-mneu Active-menu" : "li-mneu"}>
              <svg
                className="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z" />
              </svg>
              <div className="title-menu">My Events</div>
            </li>
            </Link>
            <li className={splitLocation[1] === "login" ? "li-mneu Active-menu" : "li-mneu"}>
              <svg
                className="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
                <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z" />
              </svg>
              <div className="title-menu">Login/Signup</div>
            </li>
            <li className="li-mneu logout">
              <svg
                className="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z" />
                <path d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414L21.13,10.97,6,11a1,1,0,0,0,0,2H6l15.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z" />
              </svg>
              <div className="title-menu">Logout (Need based)</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
