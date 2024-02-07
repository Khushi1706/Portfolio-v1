import React, { useContext } from "react";
import { experianceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import ExperienceCard from "../components/ExperienceCard";

const Experiance = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
      id="experiance"
      //   style={{
      //     backgroundImage: `url('https://i.pinimg.com/originals/5b/48/56/5b48564c2305bb078bbf279ec477ccc3.gif')`,
      //     backgroundSize: "cover",
      //   }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="experience"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Experience
        </h2>

        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {experianceData.map((el) => (
            <ExperienceCard
              key={el.name}
              title={el.title}
              years={el.timePeriod}
              description={el.description}
              link={el.link}
              company={el.name}
              background={el.image}
              id={el.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
