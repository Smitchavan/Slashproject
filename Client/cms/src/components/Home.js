import React, { useContext,useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const{user}=useContext(AuthContext);
    useEffect(() => {
        !user && navigate("/login",{replace:true})
    
    }, [navigate,user])
  return (
    <div>
      Welcome to Home.
    </div>
  )
}

export default Home
