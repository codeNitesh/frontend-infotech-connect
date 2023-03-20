import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Colleges from './pages/colleges/Colleges';
import MyEvents from './pages/myevents/MyEvents';
import Explore from './pages/explore/Explore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = (message) => toast(message);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard notify={notify} />} />
          <Route path="colleges" element={<Colleges />} />
          <Route path="my-events" element={<MyEvents notify={notify} />} />
          <Route path="explore" element={<Explore notify={notify} />} />
          {/*  <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
