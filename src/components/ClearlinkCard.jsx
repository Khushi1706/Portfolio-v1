import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import euclid_logo from "../assets/euclid.png";
import realpage_logo from "../assets/realpage_logo.png";
import zuddl_logo from "../assets/zuddl_logo.png";
import nineleaps_logo from "../assets/nineleaps_logo.png";
const ClearlinkCard = (props) => {
  const { name, years, description, background } = props;
  const [image, setImage] = useState(euclid_logo);
  const getImageName = () => {
    if (background === "euclid") {
      setImage(euclid_logo);
    }
    if (background === "realpage") {
      setImage(realpage_logo);
    }
    if (background === "zuddl") {
      setImage(zuddl_logo);
    }
    if (background === "nineleaps") {
      setImage(nineleaps_logo);
    }
  };

  useEffect(() => {
    getImageName();
  }, [props]);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="bg-cover bg-center h-48"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{years}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to="/clearlink"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ClearlinkCard;
