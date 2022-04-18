import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Register from "./components/Login/Register/Register";
import ForgetPass from "./components/Login/ForgetPass/ForgetPass";
import ProtectedPage from "./components/ProtectedPage/ProtectedPage";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Blogs from "./components/Blogs/Blogs";
import { Toaster } from "react-hot-toast";
import AboutME from "./components/AboutMe/AboutME";
import UserInformation from "./components/UserInformation/UserInformation";
import UserSetting from "./components/UserSetting/UserSetting";

function App() {
  return (
    <div>
      <div><Toaster/></div>
     <Nav></Nav>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="home" element={<Home></Home>}></Route>
       <Route path='blogs' element={<Blogs></Blogs>}/>
       <Route path='about' element={<AboutME></AboutME>}></Route>
       <Route path ='userdetails' element={<UserInformation></UserInformation>}/>
       <Route path ="usersetting" element={<UserSetting></UserSetting>}></Route>
       <Route path = 'checkout' element={<ProtectedPage><Checkout></Checkout></ProtectedPage>}/>
       <Route path = 'login' element={<Login></Login>}/>
       <Route path ='forgetpassword' element={<ForgetPass></ForgetPass>}/>
       <Route path = 'register' element={<Register></Register>}/>
       <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
