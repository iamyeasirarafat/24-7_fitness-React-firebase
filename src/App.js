import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
     <Nav></Nav>
     
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path = {'/login'} element={<Login></Login>}/>
     </Routes>
    </div>
  );
}

export default App;
