import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Register from "./components/Login/Register/Register";
import ForgetPass from "./components/Login/ForgetPass/ForgetPass";

function App() {
  return (
    <div>
     <Nav></Nav>
     
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path = {'/login'} element={<Login></Login>}/>
       <Route path ={'/forgetpassword'} element={<ForgetPass></ForgetPass>}/>
       <Route path = {'/register'} element={<Register></Register>}/>
     </Routes>
    </div>
  );
}

export default App;
