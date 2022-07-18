import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import logIn from "../assets/logIn.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";

import "../../src/App.css";
import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";
// import Register from "./components/Register";
// import Login from "./components/Login";
import bottomNav from "./bottomNav";

const LoginDesign = () => {
  // var theme-orange = '#F8600A',
  return (
  


    <div
      className=""
      style={{ marginTop: "19px", marginBottom: "20px", height: "120px" }}
    >
      <div
        className="card shadow  mb-5 bg-black rounded m-auto cardShadow"
        style={{ width: "50%" }}
      >
        <div className=" d-flex flex-wrap">
          {/* //image */}
          {/* <div className="image " >
            <img style={{ width: "100%", height: "100%" ,'maxHeight':'900px'}} src={logIn} alt=''></img>
          </div> */}

          {/* input-form */}

          <div className="mx-auto py-auto p-2" style={{ width: "70%" }}>
            <ul
              class="nav nav-pills my-5 rounded-pill mx-auto"
              id="pills-tab"
              role="tablist"
              style={{
                backgroundColor: "#F8600A",
                width: "13rem",
                height: "60px",
              }}
            >
              <li class="nav-item m-auto" role="presentation">
                <button
                  class="nav-link active rounded-pill"
                  id="pills-login-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-login"
                  type="button"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                  style={{
                    // width: "6rem",
                    height: "60px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bolder",
                      fontSize: "25px",
                      color: "black",
                    }}
                  >
                    Login
                  </span>
                </button>
              </li>
              <li class="nav-item m-auto" role="presentation">
                <button
                  class="nav-link rounded-pill"
                  id="pills-signup-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-signup"
                  type="button"
                  role="tab"
                  aria-controls="pills-signup"
                  aria-selected="false"
                  style={{
                    // width: "6rem",
                    height: "60px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bolder",
                      fontSize: "25px",
                      color: "black",
                    }}
                  >
                    SignUp
                  </span>
                </button>
              </li>
            </ul>
            {/* tabContent */}
            <div class="tab-content" id="pills-tabContent">
              {/* LoginPageContent */}
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
                tabindex="0"
              >
                <LoginComponent />
                {/* <Login /> */}
              </div>

              {/* //register tab content */}
              <div
                class="tab-pane fade"
                id="pills-signup"
                role="tabpanel"
                aria-labelledby="pills-signup-tab"
                tabindex="0"
              >
                <RegisterComponent />
                {/* <Register /> */}
              </div>
            </div>
          </div>

          {/* //Social Media icon */}
          <div className=" container social-media mb-5">
            <div className="row d-flex justify-content-center">
              <img
                src={whatsapp}
                alt=""
                style={{ height: "50px", width: "53px" }}
              ></img>
              <img
                src={youtube}
                alt=""
                style={{ height: "50px", width: "60px" }}
              ></img>
              <img
                src={facebook}
                alt=""
                style={{ height: "50px", width: "53px" }}
              ></img>

<bottomNav/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDesign;
