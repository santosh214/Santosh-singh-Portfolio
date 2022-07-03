import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navabr() {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    Init();
    return () => {};
  }, []);

  const Init = () => {
    setRoutes([
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about-us",
      },
      {
        name: "Services",
        path: "/services",
      },
      {
        name: "Projects",
        path: "/projects",
      },
      {
        name: "Contact",
        path: "/contact",
      },
    ]);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand lavishFont ps-5 " to="/">
            {"<Santosh/>"}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {routes.length > 0
                ? routes.map((route, index) => {
                    return (
                      <Link
                        className="nav-item mx-4 fw-bold hover-underline-animation"
                        key={index}
                        to={route.path}
                      >
                        {route.name}
                      </Link>
                    );
                  })
                : ""}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
