import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <ToastContextProvider>
        <Router>
          <AuthContextProvider>
            <Nav></Nav>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/register" element={<Register></Register>}></Route>

              <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
          </AuthContextProvider>
        </Router>
      </ToastContextProvider>
    </div>
  );
};

export default App;
