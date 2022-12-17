import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ToastContext from "../context/ToastContext";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }, nav) => {
  const navigate = useNavigate();
  // const location = useLocation();

  const { toast } = useContext(ToastContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUserLoggedin();
  }, []);

  const checkUserLoggedin = async () => {
    try {
      const res = await fetch(`http://localhost:4001/api/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await res.json();
      if (!result.error) {
        // console.log(result)
        setUser(result);
        navigate("/", { replace: true });
      } else {
        navigate("/login",{replace:true})
        console.log(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };


  //login request
  const loginUser = async (userdata) => {
    try {
      const res = await fetch(`http://localhost:4001/api/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userdata }),
      });
      const result = await res.json();
      if (!result.error) {
        // console.log(result);
        toast.success(`Logging in the Username: ${result.user.name}`);
        localStorage.setItem("token", result.token);
        setUser(result.user);
        navigate("/", { replace: true });
      } else {
        console.log(result.error);
        toast.error(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //register request
  const RegisterUser = async (userdata) => {
    try {
      const res = await fetch(`http://localhost:4001/api/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userdata }),
      });
      const result = await res.json();
      if (!result.error) {
        navigate("/login", { replace: true });
        // console.log(result);
        toast.success(
          "User Registered Successfully, Please Login to Your Account"
        );

        localStorage.setItem("token", result.token);
      } else {
        //console.log(result.error);
        toast.error(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ loginUser, RegisterUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
