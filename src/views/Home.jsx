import React, { useContext } from "react";
import heroBg from "../assets/c-1.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/bg-1.jpg";
import cloudDark from "../assets/cloudDark.png";
import Resume from "../assets/Khazi_Shiekh_Qurrath_Shehzadi_FS_ResumeM.pdf";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-white" : " text-white"}
              >
                Hi,
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I am Khazi
              </motion.span>
              <span className="block text-purple-900 z-0 lg:inline">
                <Typical
                  steps={[
                    "Front End Developer",
                    900,
                    "Full Stack Developer",
                    900,
                    "Mobile Developer",
                    900,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              MS CS at University of South Florida | 5+ Years of Full Stack Dev
              Experiance | Actively looking for Summer Internships
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href={Resume}
                  download={"Khazi_Shiekh_Qurrath_Shehzadi_Resume"}
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-purple-900 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
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
            src={heroBg}
            alt=""
            className="md:w-3/6 hidden sm:block py-20"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
