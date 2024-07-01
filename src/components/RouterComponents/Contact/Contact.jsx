import ReCAPTCHA from "react-google-recaptcha";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <img
        className=" w-screen h-[40vh] object-cover  sm:h-[10vh] "
        src="https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg"
        alt=""
      />
      
      <div data-aos="fade-up" className=" w-screen bg-gray-100 p-10 flex gap-5 justify-between items-start lg2:flex-col xl2:flex-col xl2:items-center">

       <div className=" flex flex-col gap-4 w-full">
        <div className=" text-center p-4 bg-white h-40 shadow-2xl flex flex-col items-center ">
       <FaLocationDot className=" border-2 border-yellow-700 border-dotted rounded-full text-5xl p-3"/>
        <h1 className=" font-semibold text-lg text-gray-500">Our Address</h1>
        <p className=" text-gray-500">Kolkata,West Bengal 700001</p>
        </div>
        <div className=" flex gap-5 sm:flex-col">
          <div className=" bg-white h-40 shadow-2xl w-full flex flex-col items-center p-4">
          <MdEmail className=" border-2 border-yellow-700 border-dotted rounded-full text-5xl p-3"/>
            <h1 className=" font-semibold text-lg text-gray-500">Email Us</h1>
            <a className=" text-gray-500" href="mailto:msmedostskj@gmail.com">msmedostskj@gmail.com</a>
          </div>
          <div className=" bg-white h-40 shadow-2xl w-full flex flex-col items-center p-4">
          <IoCall className=" border-2 border-yellow-700 border-dotted rounded-full text-5xl p-3"/>
            <h1 className=" font-semibold text-lg text-gray-500">Call Us</h1>
            <a className=" text-gray-500" href="tel:+918582848434">+91 85828 48434</a>
          </div>
        </div>
        </div> 

        <form className=" p-4 bg-white w-full shadow-2xl flex flex-col justify-center items-center gap-4 min-w-[50%] sm:w-full" action="">
          <div className=" flex gap-4 w-full sm:flex-col">
            <div className=" flex flex-col w-1/2 sm:w-full gap-4">
              <input className=" border-black border-[0.5px] border-opacity-30 outline-none focus:border-opacity-100 rounded p-2 w-full" type="text" name="" id="" placeholder="Your Name" required/>
              <input className=" border-black border-[0.5px] border-opacity-30 outline-none focus:border-opacity-100 rounded p-2 w-full" type="email" name="" id="" placeholder="Email" required/>
              <input className=" border-black border-[0.5px] border-opacity-30 outline-none focus:border-opacity-100 rounded p-2 w-full" type="text" name="" id="" placeholder="State" required/>
            </div>
            <div className=" flex flex-col w-1/2 sm:w-full gap-4">
              <input className=" border-black border-[0.5px] border-opacity-30 outline-none focus:border-opacity-100 rounded p-2 w-full" type="text" name="" id="" placeholder="Mobile No" required/>
              <input className=" border-black border-[0.5px] border-opacity-30 outline-none focus:border-opacity-100 rounded p-2 w-full" type="text" name="" id="" placeholder="City" required/>
              <input className=" border-black border-[0.5px] border-opacity-30 outline-none focus:border-opacity-100 rounded p-2 w-full" type="text" name="" id="" placeholder="PIN Code" required/>
            </div>
            
          </div>
          <select name="" id="" className="w-full h-10 rounded outline-blue-300 outline-4 border-[0.5px] border-black border-opacity-30">
              <option value="subject">Subject</option>
              <option value="atithi">Atithi</option>
              <option value="member">Member</option>
              <option value="franchise">Franchise</option>
              <option value="others">Others</option>
            </select>
            <textarea className=" w-full border-black border-[0.5px] border-opacity-30 outline-none p-4 rounded focus:border-opacity-100" name="" id="" placeholder="Message" required></textarea>
            <ReCAPTCHA className=" sm:scale-90" sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"/>
            <button className=" bg-gray-950 text-white p-2 rounded-md hover:bg-gray-800">Send Message</button>
        </form>


      </div>
    </div>
  );
}
export default Contact;
