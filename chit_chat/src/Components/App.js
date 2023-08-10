import { Routes, Route} from 'react-router-dom';
import { Home, Login,Signup } from '../Pages';
import { Loader, Navbar } from '.';
import Page404 from './Page404';
import { Toaster } from 'react-hot-toast';
import { useAuth } from '../hooks';

const About = () => {
  return <h1>About</h1>;
};
const UserInfo = () => {
  return <h1>User</h1>;
};

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Navbar />
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/acbacv" element={<UserInfo/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
