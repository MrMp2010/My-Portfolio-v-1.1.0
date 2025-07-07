import Navbar from "./Navbar"
import Users from "./Users"
import Home from "./Home"
import Register from "./Register"
import Login from "./Login"

import {Route} from "react-router-dom"
import {Routes} from "react-router-dom"
const Page3 = () => {
  return ( 
    <>
      <Navbar/>
      <div className="container mt-3">
        
        <Routes>
          <Route path="/users" element={<Users />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />   
        </Routes>            
      </div>  
    </> 
   );
}
 
export default Page3;