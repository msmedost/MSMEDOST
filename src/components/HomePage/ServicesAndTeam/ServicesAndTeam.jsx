import { motion } from "framer-motion";
import "./ServicesAndTeam.css";
import { firstRow, secondRow, thirdRow, fourthRow } from "./teamImages";
import { useEffect, useRef, useState } from "react";


import Aos from "aos";
import "aos/dist/aos.css";

function ServicesAndTeam() {
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState("first");
  // const carousel = useRef();

  const carouselRefs = {
    first: useRef(null),
    second: useRef(null), 
    third: useRef(null),
    fourth: useRef(null)
  }

  useEffect(() => {
    setWidth(carouselRefs[selected].current.scrollWidth - carouselRefs[selected].current.offsetWidth);
    Aos.init({ duration: 1000 });
  }, [selected]);
  
  return (
    <div data-aos="fade-up" className=" bg-gradient-to-r from-purple-50 to-blue-50 pb-16">
      <div className=" p-4 mt-10 text-center">
        <h1 className=" text-2xl font-bold text-center mb-4">OUR TEAM</h1>
        <p>
        We proudly accept our National Advisory Team as our Guide, Mentor and all time Advisor for entire steps we take and our frequent update, suggestions and support from them is the keep to our growth and success.
        </p>
      </div>

            {/* Team */}
            <div data-aos="fade-up" className=" py-4 flex gap-6 justify-center m-10 flex-wrap sm:gap-4 sm:mx-0 sm:m-0 text-center">
        <div
          className={`text-xl flex items-center w-72 h-24 justify-center border-[0.5px] border-opacity-30 border-black hover:text-fuchsia-800 cursor-pointer transition-all duration-300 px-2 xl2:w-64 xl:w-52 lg:w-40 lg2:w-32 md:w-28 sm:w-16 sm:h-16   ${
            selected === "first"
              ? " bg-teal-700 text-white hover:text-white"
              : "hbg-white text-black hover:text-teal-800"
          }`}
          onClick={() => {
            setSelected("first");
          }}
        >
          
          <h1 className=" text-lg p-2 lg:hidden">NATIONAL TEAM</h1>
        </div>

        <div
          className={`text-xl flex items-center  w-72 h-24 justify-center border-[0.5px] border-opacity-30 border-black hover:text-fuchsia-800 cursor-pointer transition-all duration-300 px-2 xl2:w-64 xl:w-52 lg:w-40 lg2:w-32 md:w-28 sm:w-16 sm:h-16   ${
            selected === "second"
              ? "bg-teal-700 text-white hover:text-white"
              : "hbg-white text-black hover:text-teal-800"
          }`}
          onClick={() => {
            setSelected("second");
          }}
        >
          
          <h1 className=" text-lg p-2 lg:hidden">STARTUP ADVISORY COMMITTEE</h1>
        </div>

        <div
          className={`text-xl flex items-center  w-72 h-24 justify-center border-[0.5px] border-opacity-30 border-black hover:text-fuchsia-800 cursor-pointer transition-all duration-300 px-2 xl2:w-64 xl:w-52 lg:w-40 lg2:w-32 md:w-28 sm:w-16 sm:h-16   ${
            selected === "third"
              ? " bg-teal-700 text-white hover:text-white"
              : "hbg-white text-black hover:text-teal-800"
          }`}
          onClick={() => {
            setSelected("third");
          }}
        >
          
          <h1 className=" text-lg p-2 lg:hidden">WOMEN EMPOWERMENT COMMITTEE</h1>
        </div>

        <div
          className={`text-xl flex items-center  w-72 h-24 justify-center border-[0.5px] border-opacity-30 border-black hover:text-fuchsia-800 cursor-pointer transition-all duration-300 px-2 xl2:w-64 xl:w-52 lg:w-40 lg2:w-32 md:w-28 sm:w-16 sm:h-16   ${
            selected === "fourth"
              ? " bg-teal-700 text-white hover:text-white"
              : "hbg-white text-black hover:text-teal-800"
          }`}
          onClick={() => {
            setSelected("fourth");
          }}
        >
          
          <h1 className=" text-lg p-2 lg:hidden">SKILL-DEVELOPMENT AND ENABLING COMMITTEE</h1>
        </div>
      </div>

      
      <div
          style={{ display: selected === "first" ? "flex" : "none" }}
          className=" w-full"
        >
         <motion.div
        ref={carouselRefs.first}
        className="carousel outline-none"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.8}
          className="inner-carousel"
        >
          {firstRow.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
        </div>
      <div
          style={{ display: selected === "second" ? "flex" : "none" }}
          className=" w-full"
        >
         <motion.div
        ref={carouselRefs.second}
        className="carousel outline-none"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.8}
          className="inner-carousel"
        >
          {secondRow.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
        </div>
      <div
          style={{ display: selected === "third" ? "flex" : "none" }}
          className=" w-full"
        >
         <motion.div
        ref={carouselRefs.third}
        className="carousel outline-none"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.8}
          className="inner-carousel"
        >
          {thirdRow.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
        </div>
      <div
          style={{ display: selected === "fourth" ? "flex" : "none" }}
          className=" w-full"
        >
         <motion.div
        ref={carouselRefs.fourth}
        className="carousel outline-none"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.8}
          className="inner-carousel"
        >
          {fourthRow.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
        </div>
      

      {/* <motion.div
        ref={carouselRefs.second}
        className="carousel outline-none"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.8}
          className="inner-carousel"
        >
          {teamImages.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div> */}
    </div>
  );
}

export default ServicesAndTeam;
