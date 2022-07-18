import React from "react";
import logIn from "../assets/logIn.png";



import "../../src/App.css";

const Home = () => {
  return (
    <div
      className=""
      style={{ marginTop: "19px", marginBottom: "20px", height: "120px" }}
    >
      <div
        className="card p-3 mb-5 m-auto "
        style={{ width: "60%", 
        'borderRadius' :'2px',
        // 'border': '2px solid grey',
        // 'border': '0.23px outset hsla(0,0%,100%,0.5)',
        // 'boxShadow': '1px 2px 9px #F4AAB9 !important',
        // 'border-radius': '5px !important',
        // '-webkit-filter': '$blur',
        // 'filter': '$blur',
        
        
  // 'box-shadow': '1px 2px 3px 4px rgba(255,0,0,0.2) !important',
       }}
      >
        <div className=" d-flex flex-wrap">
          {/* //image */}
          <div className="image ">
            <img
              style={{ width: "100%", height: "100%", maxHeight: "900px" }}
              src={logIn}
              alt=""
            ></img>
          </div>

          {/* right section */}

          <div className="mx-auto my-auto py-auto p-2" style={{ width: "23rem" }}>
            <div>
            <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "25px",
                    color: "white",
//                     font-family: Nerko One;
// font-size: 32px;
// font-weight: 400;
// line-height: 39px;
// letter-spacing: 0em;
// text-align: center;
                  }}
                >
                 
                 I LOVE TO EAT 
                </span>
                <p style={{'fontfamily': 'Nerko One', 'fontWeight':'400','fontSize':'32px'}}>  </p> 
             
             <p style={{
                'fontFamily': "Inter",
                'fontWeight': "400",
                'fontSize': "25px",
                'color': "white",
//                 font-family: Kiwi Maru;
// font-size: 16px;
// font-weight: 400;
// line-height: 23px;
// letter-spacing: 0em;
// text-align: center;
             }}> Quick delivery at your doorstep  </p>


              </div>
              <button
                className="btn rounded-pill btn-lg mb-5 "
                style={{ backgroundColor: "#F8600A", width: "100%" }}
              >
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bolder",
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                 
                  LOGIN
                </span>
              </button>
              <button
                className="btn rounded-pill btn-lg mb-5 "
                style={{ backgroundColor: "white", width: "100%" }}
              >
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bolder",
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                
                  REGISTER
                </span>
              </button>


            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Home;

//  {/* <From NAvigation> */}
//  <div className="FormNavigation" >

//  <button className="btn rounded-pill btn-lg mb-5 " style={{ backgroundColor: "#F8600A", width: "100%" }}>

// <span style={{'fontFamily': 'Roboto' ,'fontWeight':'bolder','fontSize':'25px','color':'black'}}>  LOGIN </span>
// </button>

// </div>
