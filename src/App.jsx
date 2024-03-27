import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Home";
import AdminHome from "./Admin/Home";
import { useState } from 'react'
import AdminRegister from "./Admin/Register";
import AdminLogin from "./Admin/Login";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Success from "./Components/Success";
import Cancel from "./Components/Cancel";
import DeliveryRegistration from "./Delivery_Man/Registration";
import DeliveryLogin from "./Delivery_Man/Login";
import DeliveryHome from "./Delivery_Man/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Success' element={<Success/>}/>
        <Route path='/Cancel' element={<Cancel/>}/>
        <Route path='/admin/' element={<AdminHome/>}/>
        <Route path='/admin/register' element={<AdminRegister/>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/delivery_man/' element={<DeliveryHome/>}/>
        <Route path='/delivery_man/register' element={<DeliveryRegistration/>}/>
        <Route path='/delivery_man/login' element={<DeliveryLogin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
