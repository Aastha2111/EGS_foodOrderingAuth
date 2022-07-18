import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RegisterComponent = () => {
//   const navigate = useNavigate();
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

    //   navigate("/login");
    }
  };


  return (
    <div>  {/* navigate to signup page */}
    <form method="POST">
      {/* //form-input-name*/}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          className="fa fa-envelope fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          {/* <label>Email address</label> */}
          <input
            type="string"
            className="form-control inputbox"
            name="name"
            value={user.name}
            onChange={handleInputs}
            placeholder="Full Name"
          />
        </div>
      </div>

      {/* //form-input-address*/}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          className="fa fa-address-book fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          {/* <label>Email address</label> */}
          <input
            type="string"

            className="form-control inputbox"
            name="address"
            value={user.address}
            onChange={handleInputs}
            placeholder="Address"
          />
        </div>
      </div>

      {/* //form-input-email*/}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          className="fa fa-user fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          {/* <label>Email address</label> */}
          <input
            type="email"
            className="form-control inputbox"
            name="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="Email address"
          />
        </div>
      </div>

      {/* //form-input-phn*/}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          className="fa fa-phone fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          <input
            type="phone"
            className="form-control inputbox"
            name="phone"
            value={user.phone}
            onChange={handleInputs}
            placeholder="Phone Number"
          />
        </div>
      </div>

      {/* //form-input-pwd*/}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          className="fa fa-lock fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          {/* <label>Email address</label> */}
          <input
            type="password"
            className="form-control inputbox"
            placeholder="Password"
            value={user.password}
            onChange={handleInputs}
            name="password"
          />
        </div>
      </div>

      {/* //form-input-confirm_pwd*/}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          className="fa fa-lock fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          {/* <label>Email address</label> */}
          <input
            type="password"
            className="form-control inputbox"
            value={user.password_confirmation}
            onChange={handleInputs}
            placeholder="Confirm Password"
            name="password_confirmation"
            
          />
        </div>
      </div>

      {/* //form-input-GST*/}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          className="fa fa-address-card fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          {/* <label>Email address</label> */}
          <input
            type="string"
            className="form-control inputbox"
            value={user.GST}
            onChange={handleInputs}
            name="GST"
            placeholder="GST"
            
          />
        </div>
      </div>

      {/* //form-input-restaurantTYpe*/}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          className="fa fa-user fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          <input
            type="string"
            className="form-control inputbox"
            name="res_type"
            value={user.res_type}
            onChange={handleInputs}
            placeholder="Restaurant Category"
          
          />
        </div>
      </div>

      {/* loginBUtton */}
      <button
        className="btn rounded-pill btn-lg mb-5"
         onClick={PostData}
        style={{ backgroundColor: "#F8600A", width: "100%" }}
      >
        {/* loginUser send data using fetch APi */}
        <span style={{'fontFamily': 'Roboto' ,'fontWeight':'bolder','fontSize':'25px'}}>REGISTER</span>
      </button>
    </form>
   
    
    </div>
  )
}

export default RegisterComponent







// <div className=" container social-media ">
// <div className="row ">
//   <div className="col">
//     {/* <!-- Facebook --> */}
//     <p className="text-end ">
//       <a
//         class="btn rounded-circle"
//         style={{ "background-color": "#3b5998" }}
//         href="#!"
//         role="button"
//       >
//         <i class="fa fa-facebook-f"></i>
//       </a>
//     </p>
//   </div>
//   <div className="col">
//     {/* <!-- Twitter --> */}
//     <a
//       class="btn rounded-circle"
//       style={{ "background-color": "#55acee" }}
//       href="#!"
//       role="button"
//     >
//       <i class="fa fa-twitter"></i>
//     </a>
//   </div>
// </div>

// <div className="row">
//   <div className="col">
//     {/* <!-- Google --> */}
//     <p className="text-end">
//       <a
//         class="btn rounded-circle"
//         style={{ "background-color": "#dd4b39" }}
//         href="#!"
//         role="button"
//       >
//         <i class="fa fa-google"></i>
//       </a>
//     </p>
//   </div>
//   <div className="col">
//     {/* <!-- Instagram --> */}
//     <a
//       class="btn rounded-circle"
//       style={{ "background-color": "#ac2bac" }}
//       href="#!"
//       role="button"
//     >
//       <i class="fa fa-instagram"></i>
//     </a>
//   </div>
// </div>
// </div>