import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../themeProvider";
import bgContact from "../assets/Working-women.gif";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <div
        id="contact"
        className={
          darkMode
            ? "bg-white pt-24 flex flex-col md:flex-row"
            : "bg-black pt-24 text-white flex flex-col md:flex-row"
        }
      >
        <div className="max-w-2xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
          <div>
            <h4 className="mt-12 text-3xl font-semibold text-purple-900">
              Connect with me!
            </h4>
            <p className="text-gray-500 text-xl">
              I'm open to internship opportunities to collaborate with
              like-minded professionals, innovative brands and forward-thinking
              leaders.
              <br />
              If you'd like to connect to explore working together, shoot me a
              message on{" "}
              <span className="text-blue-500 text-xl">
                <a href="https://www.linkedin.com/in/shehzadi17/">Linkedin!</a>
              </span>
            </p>
          </div>
          <div className="pt-8 flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
            <div className="w-full md:pr-8">
              <p className="text-gray-500 text-xl">
                For quick inquiries, project proposals and conference chat
                invite links, email's the fastest route to my inbox. Email me at
                <h4 className="text-blue-500 text-xl">
                  <a href="https://mailto:khushi.shareeff@gmail.com/">
                    khushi.shareeff@gmail.com
                  </a>
                </h4>
              </p>
            </div>
          </div>
        </div>
        <div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={bgContact}
            alt=""
            className="md:w-3/6 hidden sm:block py-20"
          />
        </div>
      </div>
      {/* <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg flex justify-center md:mt-20"
            : "w-full bg-white-900 text-white text-lg flex justify-center md:mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Khazi Shiekh Qurrath Shehzadi
      </div> */}
    </div>
  );
};

export default Contact;
