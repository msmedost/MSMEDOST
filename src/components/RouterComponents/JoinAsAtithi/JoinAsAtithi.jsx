import React, { useEffect, useState } from "react";
import atithiimg from "../../../assets/4937376232777325.jpg";
import indianStatesAndUTs from "../../StateArray";
import businessCategory from "../../BusinessCategoryArray";
import { Select, Option, Button } from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import ReCAPTCHA from "react-google-recaptcha";


function JoinAsAtithi({handleCaptchaChange, captchaError, handleSubmit}) {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: ""
})

const handleChange = (e)=>{
    setFormData({
        ...formData, [e.target.name]: e.target.value
    })
}

// const handleSubmit = async (e)=>{
//     e.preventDefault()
//     try {
//         const response = await axios.post("http://localhost:8000/api/registerAtithi", formData)
//         console.log("successful:", response);
//     } catch (error) {
//         console.log("error:", error);
//     }
// }






  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [userMobileValue, setUserMobileValue] = useState("");
  const [introducerMobileValue, setIntroducerMobileValue] = useState("");
  const [pincodeValue, setPincodeValue] = useState("");

  const handleMobileNo = (event, mobileValue) => {
    const inputValue = event.target.value;
    if (inputValue === "" || (/[6-9]/.test(inputValue) && (!isNaN(inputValue) && inputValue.length <= 10))) {
      mobileValue(inputValue);
    }
  };

  const handleUserMobile = (event)=>{
    handleMobileNo(event, setUserMobileValue)
  }
  const handleIntroducerMobile = (event) =>{
    handleMobileNo(event, setIntroducerMobileValue)
  }
  const handlePinCode = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "" || (!isNaN(inputValue) && inputValue.length <= 6)) {
      setPincodeValue(inputValue);
    }
  };

 
  return (
    <div className="bg-gray-100">
      
        <img
          className=" w-screen h-[40vh] object-cover mb-10 sm:h-[20vh]"
          src="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
   
      <h1 className=" text-center text-3xl font-medium mb-10">ABOUT MSME DOST</h1>
      <div className=" w-full flex justify-center items-center mb-4 px-8">
        <p className=" w-4/5 sm:w-full">MSME DOST is a SHUDH SWADESHI Business Networking Forum for new Bharat; it's a dynamic ecosystem designed to empower Micro, Small, and Medium Enterprises (MSMEs) and foster collaborative growth. It has been formed with a vision to bridge the gap between MSMEs and opportunities, MSME DOST provides a supportive and enriching environment where businesses can grow, and create lasting partnerships with the core values of integrity, inclusivity, and transparency, ensuring that every member feels welcomed and valued.
        
        MSME DOST believes in the mantra "SERVING COMMUNITY WITH RESPONSIBILITY" MSMEDost mantra is 3R's Rating, Review & Repeat.
        
        MSME DOST organizes structured meetings of DOSTS in both PHYSICAL & DIGITAL modes, a perfect mix of Tradition with Technology, know each other, their Businesses, exchange Business, ideas, and best practices and pass Business Opportunities in their network for growth & betterment of DOSTS, a win-win situation for all concerned.
        </p>
      </div>
      <div data-aos="fade-up" className=" flex justify-center items-center gap-10 p-4 py-8 lg:flex-col">
        <form
          className=" bg-white shadow-xl flex gap-4 flex-col p-8 rounded-md"
          action=""
          onSubmit={handleSubmit}
        >
          <div className=" flex gap-4 sm:flex-col">
  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " name="name" value={formData.name}  onChange={handleChange}/><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Name
    </label>
</div>  
  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " name="email" value={formData.email} onChange={handleChange}/><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Email
    </label>
</div>  
          </div>
          <div className=" flex gap-4 sm:flex-col">
          <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " 
      value={userMobileValue}
      onChange={handleUserMobile} />
      <label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Mobile No.
    </label>
</div>  
            {/* <Input label="Mobile No."
            value={userMobileValue}
            onChange={handleUserMobile}
            /> */}
            
            <Select className=" flex justify-between" label="Select State">
              {indianStatesAndUTs.map((states, index) => (
                <Option key={index} value={states}>
                  {states}
                </Option>
              ))}
            </Select>

          </div>
          <div className=" flex gap-4 sm:flex-col">
          <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" "  
      value={pincodeValue}
      onChange={handlePinCode}/>
      <label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Pin Code
    </label>
</div>  

<div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">City
    </label>
</div>  
            {/* <Input label="Pin Code"
            value={pincodeValue}
            onChange={handlePinCode}/> */}

            {/* <Input label="City"/> */}
          </div>
          <div className=" w-full">
          <Select label="Business Category">
          {businessCategory.map((business, index)=>(
            <Option key={index} value={business}>{business}</Option>
          ))}
         </Select>
          </div>

          
<div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 sm:h-36">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 px-6 sm:text-center">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload Your Photo</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
<div className=" flex gap-4 sm:flex-col">
<div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Introducer Name
    </label>
</div>  
<div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " 
      value={introducerMobileValue}
      onChange={handleIntroducerMobile}/>
      <label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Introducer Mobile No.
    </label>
</div>  
            {/* <Input label="Introducer Name"/>
            <Input label="Introducer Mobile No."
            value={introducerMobileValue}
            onChange={handleIntroducerMobile}/> */}
          </div>
          <div className=" w-full flex justify-center items-center relative">
          <div
                  className={`absolute overflow-hidden -top-14 transition-all duration-200 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-200 dark:bg-gray-800 dark:text-red-600 opacity-0 scale-0 ${captchaError !== "" ? "opacity-100 scale-[100%]":""}`}
                  role="alert"
                >
                  {captchaError}
                </div>
            <ReCAPTCHA
                  sitekey="6LdGVPkpAAAAAK_gm2lWwK1-YEdnxLljw_Ga_j_1"
                  onChange={handleCaptchaChange}
                />
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-80">Submit</button>
        </form>

        <div className=" bg-white p-6 w-fit h-fit rounded-md shadow-xl lg:w-full">
          <img className=" object-cover xl:w-full" src={atithiimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default JoinAsAtithi;
