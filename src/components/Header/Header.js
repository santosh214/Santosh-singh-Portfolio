import React from "react";
import Typewriter from "typewriter-effect";
import "./header.css";
export default function Header() {
  return (
    <>
      <div className="container-fluid headerContainer">
        <div className="row">
          <div className="col-md-6">
            <h1>
              Hi, I am <span className="myName"> Santosh Singh</span>{" "}
            </h1>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    " Full Stack Developer",
                    "Web Developer",
                    "Front End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 100,
                  wrapperClassName: "typewriter-wrapper",
                  cursorClassName: "typewriter-cursor",
                  cursorBlinkSpeed: 500,
                  cursorBlink: true,
                  cursor: "|",
                  loopCount: Infinity,
                  onComplete: () => {
                    console.log("Completed");
                  },
                }}
              />
            </h1>
            <p>
              I am a Front-End / Full-Stack Developer, currently i am working at
              iMentus Technologies as a Software Engineer.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <img
                src="../assets/images/social-icons/instagram2.svg"
                width={50}
                height={50}
                className="rounded-3 img-fluid mx-2"
                alt=""
              />
              <img
                src="../assets/images/social-icons/github2.png"
                width={50}
                height={50}
                className="rounded-3 img-fluid mx-2"
                alt=""
              />
              <img
                src="../assets/images/social-icons/linkedin3.svg"
                width={50}
                height={50}
                className="rounded-3 img-fluid mx-2"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="../assets/images/header.svg"
              alt="santosh img"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}
