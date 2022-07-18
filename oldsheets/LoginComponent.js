import React from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginComponent = () => {
// const history =useHistory();
const navigate = useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const loginUser = async (e) =>{
  e.preventDefault();
  console.log("inloginuser");
  //auth mei jis route pe data bhjna hai
  const res = await fetch('/login',{
    method :"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    //server pe Stringform mei bhjna hai hence Stringify
    body:JSON.stringify({
      email,  //emial:email
      password
    })
  });
  const data =res.json();
  console.log(`@@@@___@@@${data.password}`);
  if(res.status===400 || !data){
    window.alert("Invalid credential");
    // history.push("/login");
    // navigate('/register');
  }
  else{
    window.alert("succesful login");
   navigate('/home');
    
    
  }
}




  return (
    <div>{/* //LoginForm */}
    <div className='card' style={{
        // 'backdrop-filter': 'blur(1px)',
        //     'background-color': 'rgba(255, 255, 255, 0.1 )',
        //     '-webkit-backdrop-filter':' blur( 1px )',
        //     'box-shadow': '0 2px 4px 0',
            'backdrop-filter': 'blur(2px) saturate(85%)',
            '-webkit-backdrop-filter': 'blur(2px) saturate(85%)',
            'background-color': 'rgba(255, 255, 255, 0.16)',
           ' border-radius': '12px',
           ' border': '1px solid rgba(209, 213, 219, 0.3)',
            
            }}>
        <div className='card-body'>
        <form method="POST">
      {/* //form-input-email */}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          className="fa fa-envelope fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          {/* <label>Email address</label> */}
          <input
            type="email"
            className="form-control inputbox mb-4"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email address"
            
          />
        </div>
      </div>

      {/* form-input-password */}
      <div className="d-flex flex-row align-items-center mb-4">
        <i
          class="fa fa-lock fa-lg me-3 fa-fw"
          style={{ color: "grey" }}
        ></i>
        <div className="form-outline flex-fill mb-0">
          {/* <label>Password</label> */}
          <input
            type="password"
            className="form-control inputbox mb-4"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            
          />
        </div>
      </div>

      {/* //forgotPassword */}
      {/* <p className="text-end text-danger">Forgot Password ?</p> */}
      <div className="d-flex  flex-row justify-content-end mb-3">
        <NavLink to="/home">Forgot Password?</NavLink>
      </div>

      {/* loginBUtton */}
      <button
        className="btn rounded-pill btn-lg mb-5"
         onClick={loginUser}
        style={{ backgroundColor: "#F8600A", width: "100%" }}
      >
        {/* loginUser send data using fetch APi */}
        
       <span style={{'fontFamily': 'Roboto' ,'fontWeight':'bolder','fontSize':'25px','color':'black'}}>  LOGIN </span>
      </button>
    </form>
        </div>

    </div>

    {/* <hr style={{'width':'50%',  'height': '1px', 'color':'black'}}> OR</hr> */}

  
    </div>
  )
}

export default LoginComponent




