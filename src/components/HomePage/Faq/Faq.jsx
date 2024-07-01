import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import questionAnswer from "./faqQuestionAnswer";
import React, { useState, useRef, useEffect } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Aos from "aos";
import "aos/dist/aos.css";


const Faq = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 50 });
    
  }, []);

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

  const [openStates, setOpenStates] = useState(questionAnswer.map(() => false));
  const [answerHeights, setAnswerHeights] = useState(questionAnswer.map(() => "0px"));
  const answerRefs = questionAnswer.map(() => useRef(null));


// for keep open other answers while open a new one

  // const toggleOpen = (index) => {
  //   setOpenStates((prevOpenStates) => {
  //     const newOpenStates = [...prevOpenStates];
  //     newOpenStates[index] = !newOpenStates[index];
  //     return newOpenStates;
  //   });
  //   setAnswerHeights((prevAnswerHeights) => {
  //     const newAnswerHeights = [...prevAnswerHeights];
  //     newAnswerHeights[index] = newAnswerHeights[index] === "0px" ? `${answerRefs[index].current.scrollHeight}px` : "0px";
  //     return newAnswerHeights;
  //   });

  // }


  const toggleOpen = (index) => {
    setOpenStates((prevOpenStates) => {
      return prevOpenStates.map((state, i) => i === index ? !state : false);
    });
  
    setAnswerHeights((prevAnswerHeights) => {
      return prevAnswerHeights.map((height, i) => i === index ? 
        (height === "0px" ? `${answerRefs[index].current.scrollHeight}px` : "0px") : 
        "0px"
      );
    });
  }
  

  return (
    <>
    <div className={` w-screen p-4 px-44 2xl:px-10 md:px-2 transition-all duration-500 ${isDarkMode ? " bg-gray-700 text-white" : ""}`}>
      <h1 className=" text-center text-2xl font-semibold">FREQUENTLY ASKED QUESTIONS</h1>
      <div className=" w-full flex justify-center items-center my-4">
        <DarkModeSwitch className=" text-center float-right"
        checked={isDarkMode}
        onClick={toggleDarkMode}
        />
      </div>
      {questionAnswer.map((item, index) => (
        <div data-aos="fade-up" key={index}>
  <div className=" flex justify-between items-center rounded cursor-pointer mt-4 border-b-[0.5px] pb-4 xl:px-6 border-gray-200" onClick={() => toggleOpen(index)}>
    <span className={` pt-5 text-gray-600 text-xl hover:text-blue-500 transition-all duration-300 ${isDarkMode ? " text-slate-200 hover:text-slate-400" : ""}`}>{item.question}</span>
    <IoIosArrowDown className={` transition-all duration-300 ${openStates[index] ? ' rotate-180' : ' rotate-0'} text-3xl`} />
  
  </div>
  <div
    key={`${index}-answer`}
    ref={answerRefs[index]}
    style={{ maxHeight: `${answerHeights[index]}`, transition: "max-height 0.3s ease-in-out" }}
    className="overflow-hidden"
    >
    <div className= {` bg-gray-100 py-2 px-4 mt-2 text-gray-700 text-lg border-b-4 border-black ${isDarkMode ? " bg-gray-500 text-slate-100 border-b-4 border-gray-300" : ""}`}>{item.answer}</div>
  </div>
    </div>
))} 
    </div>
        </>
  );
};
export default Faq;


