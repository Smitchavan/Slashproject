import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { toast } = useContext(ToastContext);
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      {/* <center><h1>QA Management System</h1></center> */}
 
      {user ? (
        <>
          <button
            onClick={() => {
              setUser(null);
              localStorage.clear();
              toast.success("Logged Out");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <div>
          <Link to="/login"></Link>
          <Link to="/register"></Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
