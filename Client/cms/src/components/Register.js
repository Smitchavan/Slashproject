import React from "react";
import { useState, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,

} from "mdb-react-ui-kit";

const Register = ({ children }) => {
  const { toast } = useContext(ToastContext);
  const { RegisterUser } = useContext(AuthContext);

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !register.name ||
      !register.email ||
      !register.password ||
      !register.confirmPassword
    ) {
      toast("Please enter all fileds");
      return;
    }
    if (register.password !== register.confirmPassword) {
      toast("Passwords doest match");
      return;
    }
    const userData = { ...register, confirmPassword: undefined };
    RegisterUser(userData);
  };

  return (
    <>
      {children}
      <ToastContainer autoClose={2000} />
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your business
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                  name="name"
                  value={register.name}
                  onChange={handleInputChange}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form2"
                  type="email"
                  name="email"
                  value={register.email}
                  onChange={handleInputChange}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form3"
                  type="password"
                  name="password"
                  value={register.password}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  id="form4"
                  type="password"
                  name="confirmPassword"
                  value={register.confirmPassword}
                  onChange={handleInputChange}
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn className="w-100 mb-4" size="md" onClick={handleSubmit}>
                  sign up
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Register;
