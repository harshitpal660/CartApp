import { Page404 } from "../Pages/Page404";
import { Home } from "../Pages/Home";
import {MyProfile} from "../Pages/Myprofile"
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/acbacv" element={<MyProfile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Home/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
