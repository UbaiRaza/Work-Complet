import React from "react";
import web from "../../assets/img/bg-showcase-2.jpg";

function Fi() {
  return (
    <div className="">
      <div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-6">
              <img src={web} width="100%" height="70%"/>
            </div>
            <div className="col-md-6">
              <h5>Fully Responsive Desing</h5>
              <p>
                When you use a them created by start Bootstap you know that the
                theme will look <br /> great on any Device,Whether it's a
                Phone,tabelate, or Desktopthe page Will behave <br />
                responsively !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fi;
