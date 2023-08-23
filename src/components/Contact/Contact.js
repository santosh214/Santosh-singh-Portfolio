import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import RESUME from '../../assets/files/SANTOSH_SINGH.pdf'
export default function Contact() {
  return (
    <motion.section about="Santosh contact us section" className="contactSection"
    
    initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="container fade-in-image">
      <h1 className="contactH1 pb-4 text-md-start text-center">Contact Me</h1>

        <div className="row">
          <div className="col">
            <p className="text-secondary px-md-0 px-2">
              Here's how to reach me, looking forward to talk with you all!.
            </p>
            <p className="text-secondary px-md-0 px-2">
              Inquiries via email at{" "}
              <a href="mailto:santoshsingh74827@gmail.com">
                <u className="linkColor"> santoshsingh74827@gmail.com </u>
              </a>{" "}
              or via socials below:.
            </p>
            <ul>
              <li className="pt-3">
                Github-{" "}
                <a className="linkColor" href="https://github.com/santosh214">
                  https://github.com/santosh214
                </a>{" "}
              </li>
              <li className="pt-3">
                Linkedin-{" "}
                <a
                  className="linkColor"
                  href="https://www.linkedin.com/in/santosh-singhh/"
                >
                  https://www.linkedin.com/in/santosh-singhh
                </a>{" "}
              </li>
              <li className="pt-3">
                Telegram-{" "}
                <a className="linkColor" href="https://t.me/MangoMan214">
                  https://t.me/MangoMan214
                </a>{" "}
              </li>
            </ul>
            <p className="pt-3 text-secondary">
              View my resume in{" "}
              <a
                href={RESUME}
                download
                className="linkColor"
              >
                pdf format.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
