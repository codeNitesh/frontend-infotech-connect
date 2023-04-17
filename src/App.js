import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Colleges from "./pages/colleges/Colleges";
import MyEvents from "./pages/myevents/MyEvents";
import Explore from "./pages/explore/Explore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./pages/admin/admin-login/AdminLogin";
import AdminDashboard from "./pages/admin/admin-dashboard/AdminDashboard";
import AdminEventDetails from "./pages/admin/admin-dashboard/AdminEventDetails/AdminEventDetails";

function App() {
  const notify = (message) => toast(message);
  const BASEURL = "http://localhost:8000";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="login"
          element={<Login notify={notify} BASEURL={BASEURL} />}
        />
        <Route path="" element={<Login notify={notify} BASEURL={BASEURL} />} />
        <Route path="register" element={<Register BASEURL={BASEURL} />} />

        <Route path="/app" element={<Layout />}>
          <Route
            index
            element={<Dashboard notify={notify} BASEURL={BASEURL} />}
          />
          <Route path="colleges" element={<Colleges BASEURL={BASEURL} />} />
          <Route
            path="my-events"
            element={<MyEvents notify={notify} BASEURL={BASEURL} />}
          />
          <Route
            path="explore"
            element={<Explore notify={notify} BASEURL={BASEURL} />}
          />
        </Route>

        <Route
          path="admin"
          element={<AdminLogin notify={notify} BASEURL={BASEURL} />}
        />

        <Route path="/admin" element={<Layout />}>
          <Route
            path="my-events"
            element={<AdminDashboard notify={notify} BASEURL={BASEURL} />}
          />

          <Route
            path="colleges"
            element={<Colleges notify={notify} BASEURL={BASEURL} />}
          />

          <Route
            path="my-events/:id"
            element={<AdminEventDetails notify={notify} BASEURL={BASEURL} />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
