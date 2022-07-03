import React from "react";

export default function About() {
  const technologies = [
    {
      img: "react",
      name: "React",
      url: "https://reactjs.org/",
    },
    {
      img: "bootstrap",
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
    },
    {
      img: "html5",
      name: "HTML",
      url: "https://www.w3.org/standards/html/",
    },
    {
      img: "css3",
      name: "CSS",
      url: "https://www.w3.org/standards/css/",
    },
    {
      img: "javascript",
      name: "JavaScript",
      url: "https://www.w3.org/standards/html/",
    },
    {
      img: "nodejs",
      name: "NodeJS",
      url: "https://nodejs.org/en/",
    },
    // {
    //   img: "nextjs",
    //   name: "NextJs",
    //   url: "https://nextjs.org/",
    // },
    {
      img: "redux",
      name: "Redux",
      url: "https://redux.js.org/",
    },
    {
      img: "typescript",
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      img: "tailwindcss",
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
    },
    {
      img: "git",
      name: "Git",
      url: "https://git-scm.com/",
    },
    {
      img: "heroku",
      name: "Heroku",
      url: "https://www.heroku.com/",
    },
    {
      img: "mysql",
      name: "MySQL",
      url: "https://www.mysql.com/",
    },
    {
      img: "postman",
      name: "Postman",
      url: "https://www.getpostman.com/",
    },
  ];

  return (
    <>
      <section about="Santosh singh About section" className="py-5">
        <div className="container-fluid px-5 ">
          <h1 className="text-center fw-bolder pb-4">About Me</h1>
          <div className="row px-3">
            <div className="col-12">
              <h1 className="blueColor fw-bold">A bit about me</h1>
              <p className="lineHeight py-2">
                I'm a self-taught Web developer and Frontend Developer with
                experience in designing new features from ideation to
                production, implementation of wireframes and design flows into
                high performance software applications. I take into
                consideration the user experience while writing reusable and
                efficient code. I passionately combine good design, technology,
                and innovation in all my projects, which I like to accompany
                from the first idea to release.Currently, I'm focused on the
                backend development.
              </p>
            </div>
            <div className="col-12">
              <h1 className="blueColor fw-bold">Technologies and Tools</h1>
              <p className="lineHeight py-2">
                Using a combination of cutting-edge technologies and reliable
                open-source software I build user-focused, performant apps and
                websites for smartphones, tablets, and desktops.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            {technologies.length > 0
              ? technologies.map((item, index) => {
                  return (
                    <div className="col-md-2 m-4 " key={index}>
                      <div className="col   py-3 px-5  d-flex justify-content-evenly">
                        <img
                          src={`../assets/images/tech-icons/${item.img}.svg`}
                          alt="react"
                          className="img-fluid  rounded circle "
                          width={80}
                        />
                        <p className="h5 pt-4 ms-4">{item.name}</p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </section>
    </>
  );
}
