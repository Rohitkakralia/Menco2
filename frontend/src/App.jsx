import './App.css';
import Home from './compnents/Home'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './compnents/Navbar'; 
import Login from './compnents/Login';
import Signup from './compnents/Signup';
import MentorSignup from './compnents/Mentorsignup';
import Beforelogin from './compnents/Beforelogin';
import Navbar2 from './compnents/Navbar2';
import About from './compnents/About';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar2/><Beforelogin/></>
    },
    {
      path: "/home",
      element: <><Home/></>
    },
    {
      path: "/login",
      element: <> <Login/></>
    },
    {
      path: "/signup",
      element: <> <Signup/></>
    },
    {
      path: "/mentorsignup",
      element: <> <MentorSignup/></>
    },
    
    {
      path: "/about",
      element: <> <Navbar/><About/></>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  );
}

export default App;
