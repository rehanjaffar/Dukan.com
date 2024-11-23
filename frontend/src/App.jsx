import React, { useEffect, useState} from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import axios from "axios";
import Loader from "./pages/Loader";
import Admin from "./pages/Admin";

const App = () => {
 
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [loading,setLoading] = useState(true);
  const [username, setUsername] = useState("");
  useEffect(()=>{
const checkAuth = async ()=>{
  try {
    const res = await axios.get('http://localhost:5000/api/auth/check',{
      withCredentials:true
    });
    if(!res.data.authenticated){
      alert(res.data.message || 'session expired login again ');
      setIsAuthenticated(false)
    }else{
      setIsAuthenticated(true)
      const userRes = await axios.get("http://localhost:5000/api/auth/show", {
        withCredentials: true,
      });
      setUsername(userRes.data.username);
    }
   console.log(res.data.authenticated);
   console.log(res);
  } catch (error) {
    setIsAuthenticated(false)
    console.log(error); 
  } finally {
    setLoading(false);
  }
};
checkAuth();
  },[])

  console.log(isAuthenticated);
 console.log(username);
 
  
  if (loading){
    return <div><Loader/></div>
  }



  return (
    <>
    <BrowserRouter>
    <Routes>
<Route exact path="/" element={ <Home username={username} /> }/>
<Route exact path="/admin" element={ isAuthenticated ? <Admin username={username} /> : <Navigate to='/login' replace/>}/>
<Route exact path="/register" element={ <SignUp/>}/>
<Route exact path="/login" element={ <Login setAuth={setIsAuthenticated}/>}/>
<Route  path="*" element={ <NotFound/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
};

export default App;
