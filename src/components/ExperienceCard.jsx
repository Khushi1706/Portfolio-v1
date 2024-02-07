import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import euclid_logo from "../assets/euclid.png";
import realpage_logo from "../assets/realpage_logo.png";
import zuddl_logo from "../assets/zuddl_logo.png";
import nineleaps_logo from "../assets/nineleaps_logo.png";
import backgroundUrlVideo from "../assets/bg-1.jpg";
import Modal from "./Modal";

const ExperienceCard = ({
  title,
  company,
  background,
  description,
  years,
  link,
  id,
}) => {
  return (
    <>
      <motion.div
        initial={"hidden"}
        layout
        layoutId={id}
        whileInView={"visible"}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
      >
        <div className="p-5">
          <a href={link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
              {title} @ {company}
            </h5>
          </a>
          <p className="text-black font-bold mb-4">{years}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default ExperienceCard;
