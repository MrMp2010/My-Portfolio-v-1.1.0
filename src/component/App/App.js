import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import CirclePages from "../Circle/CirclePages";
import Users from "../Circle/pages/page3/Users";
import Home from "../Circle/pages/page3/Home"; // مسیر صحیح
import Login from "../Circle/pages/page3/Login"; // مسیر صحیح
import Register from "../Circle/pages/page3/Register"; // مسیر صحیح
import Navbar from "../Circle/pages/page3/Navbar"; // مسیر صحیح

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  
  return (
    <div className="app-container">
      <Navbar />
      
      {isHomePage && (
        <>
          <h1 className="t1">My projects</h1>
          <p className="p1">«توضیحات شما...»</p>
        </>
      )}
      
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/circle/*" element={<CirclePages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;