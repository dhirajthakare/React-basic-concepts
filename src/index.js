import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import FirstComponant from "./common/FirstComponant";
import CarComp from "./common/CarComponant";

import Forms from "./common/FromsComponant";
import reportWebVitals from "./reportWebVitals";
import Component1 from "./common/Component1";
import Component6 from "./common/Component6";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <div>
    <div>
      <FirstComponant name="dhiraj" />
    </div>
    <div className="col-md-3 m-4">
      <h4>My Forms </h4>
      <Forms />
    </div>
    <div className="col-md-3 m-4 card card-body">
      <h5> React Context </h5>

      <div className=" my-4 ">
      <Component1>
        
        <Component6/>
      </Component1>
      </div>

    </div>
  </div>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
