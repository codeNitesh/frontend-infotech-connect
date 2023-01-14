import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.css";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="Page">
        <div className="Box-header">
          <div className="Box-search">
            <svg
              className="icon-search"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
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
              <g fill="none" fill-rule="evenodd">
                <path d="m0 0h32v32h-32z" />
                <path
                  d="m15 0c8.2842712 0 15 6.71572875 15 15 0 3.7823596-1.3999424 7.2377452-3.7099407 9.8762702l5.3667949 5.3663705-1.4142135 1.4142135-5.3663705-5.3667949c-2.638525 2.3099983-6.0939106 3.7099407-9.8762702 3.7099407-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 2c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-7.17970175-5.8202983-13-13-13z"
                  fill="white"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            <input className="input-search" placeholder="Search" type="text" />
          </div>
          <div className="box-alert-infomation">
            <div className="box-alert">
              <div className="staus-box-alert"></div>
              <svg
                className="icon-alert"
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
                <path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z" />
              </svg>
            </div>
            <div className="box-infomation">
              <img
                className="info-avatar"
                src="https://www.gravatar.com/avatar/bdb5b5c084e302df00d5963fcd6691b3?s=999999&d=identicon"
              />
              <div className="info-name">emnatkins</div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
