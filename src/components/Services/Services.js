import React from "react";

export default function Services() {
  return (
    <>
      <section about="Santosh service section">
        <h1 className="text-center fw-bolder pb-4">Services</h1>

        <div className="container-fluid px-5">
          <h2 className="blueColor fw-bold px-5 mx-3">What I Provide</h2>

          <div className="row pt-5  d-flex justify-content-evenly py-4">
            <div
              className="col-md-3  bg-transparent border rounded"
              align="center"
            >
              <img
                src="../assets/images/tech-icons/web-development.png"
                alt="web"
                className="img-fluid py-3"
              />
              <p className="fw-bold py-2">Web Application Development</p>
            </div>
            <div
              className="col-md-3  bg-transparent border rounded"
              align="center"
            >
              <img
                src="../assets/images/tech-icons/frontend-development.png"
                alt="web"
                className="img-fluid py-3"
              />
              <p className="fw-bold py-2">Frontend Development</p>
            </div>
            <div
              className="col-md-3  bg-transparent border rounded"
              align="center"
            >
              <img
                src="../assets/images/tech-icons/web-development.png"
                alt="web"
                className="img-fluid py-3"
              />
              <p className="fw-bold py-2">Backend Development</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
