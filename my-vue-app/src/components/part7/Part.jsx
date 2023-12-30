import React from "react";
import web from "../../assets/img/testimonials-1.jpg";
import webb from "../../assets/img/testimonials-2.jpg";
import webbb from "../../assets/img/testimonials-3.jpg";
function Part() {
  return (
    <div className="bg-light">
      <div className="container ">
        <div className="row">
          <h1 className="text-center">What People are saying...</h1>
          <div className="col-md-4 m-0 text-center mt-5">
            <img
              style={{ borderRadius: "50%" }}
            width='200px '
              src={web}
              alt=""
            />
            <h4>Margaret E.</h4>
            <p>"This is Fantastic"</p>
          </div>
          <div className=" col-md-4 m-0 text-center mt-5">
            <img
              style={{ borderRadius: "50%" }}
              width='200px '
              src={webb}
              alt=""
            />
            <h4>Margaret E.</h4>
            <p>"This is Fantastic"</p>
          </div>
          <div className="col-md-4 m-0 text-center mt-5">
            <img
              style={{ borderRadius: "50%" }}
              width='200px '
              src={webbb}
              alt=""
            />
            <h4>Margaret E.</h4>
            <p>"This is Fantastic"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part;
