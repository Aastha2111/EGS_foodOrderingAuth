import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import loginPage from "../assets/loginPage.png";


const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    GST: "",
    res_type: "",
  });
  let name, value;
  const handleInputs = (e) => {
    // console.log(`&&&&&handle register level`);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const {
      name,
      address,
      email,
      phone,
      password,
      password_confirmation,
      GST,
      res_type,
    } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //server pe Stringform mei bhjna hai hence Stringify
      // server want data in string format
      body: JSON.stringify({
        name,
        address,
        email,
        phone,
        password,
        password_confirmation,
        GST,
        res_type,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registeration");
      console.log("Invalid Registeration");
    } else {
      window.alert("Registeration succefu;");
      console.log("successful registeration");

      navigate("/login");
    }
  };
  return (
    <div className="container w-50 mx-auto" >
      <div className="row d-flex justify-content-center flex-wrap">
        {/* //form */}
        <div className="col col-md-offset-4">
          <form>
            <h2></h2>
            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fa fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                {/* <label> Name</label> */}
                <input
                  type="string"
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fa fa-address-book fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                {/* <label>address </label> */}
                <input
                  type="string"
                  className="form-control"
                  name="address"
                  value={user.address}
                  onChange={handleInputs}
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                {/* <label>Email address</label> */}
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fa fa-phone fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                {/* <label>Phone</label> */}
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleInputs}
                  name="password"
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                {/* <label>Confirm Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  value={user.password_confirmation}
                  onChange={handleInputs}
                  placeholder="Confirm Password"
                  name="password_confirmation"
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fa fa-address-card fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                {/* <label> GST </label> */}
                <input
                  type="string"
                  className="form-control"
                  value={user.GST}
                  onChange={handleInputs}
                  name="GST"
                  placeholder="GST"
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className=" fa fa-user fa-lg me-3 fa-fw"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-utensils" /> */}
              <div className="form-outline flex-fill mb-0">
                {/* <label> Restaurant type </label> */}
                <input
                  type="string"
                  className="form-control"
                  name="res_type"
                  value={user.res_type}
                  onChange={handleInputs}
                  placeholder="Restaurant Category"
                />
              </div>
            </div>

            <button onClick={PostData} className="btn btn-primary">
              Register
            </button>
          </form>
        </div>

        {/* // image */}
        <div className="col">
        <div className="">
        <img src={loginPage} className='w-100 h-100 '>
        </img>
        </div>
        </div>
       
    </div></div>
  );
};

export default Register;

// https://www.tutsmake.com/registration-form-validation-in-react-js/
