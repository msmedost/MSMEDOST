import {
  RiGpsLine,
  RiBodyScanLine,
  RiSunLine,
  RiStoreLine,
} from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";


import aboutImage1 from "../../../assets/670571616555372.png";
import aboutImage2 from "../../../assets/tabs-2.jpg";
import aboutImage3 from "../../../assets/tabs-3.jpg";
import aboutImage4 from "../../../assets/tabs-4.jpg";
import { useEffect, useState } from "react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [selected, setSelected] = useState("first");
  return (
  <div className=" py-10 bg-gradient-to-r from-sky-50 via-purple-50 to-fuchsia-50" >
      <div data-aos="fade-up" className=" py-4 flex gap-6 justify-center m-10 flex-wrap sm:gap-4 sm:mx-0 sm:m-0">
        <div
          className={`text-xl flex items-center w-72 h-24 justify-center border-[0.5px] border-opacity-30 border-black hover:text-fuchsia-800 cursor-pointer transition-all duration-300 px-2 xl2:w-64 xl:w-52 lg:w-40 lg2:w-32 md:w-28 sm:w-16 sm:h-16 ${
            selected === "first"
              ? " bg-teal-700 text-white hover:text-white"
              : "hbg-white text-black hover:text-teal-800"
          }`}
          onClick={() => {
            setSelected("first");
          }}
        >
          <RiGpsLine className=" text-5xl sm:text-2xl" />
          <h1 className=" text-lg p-2 lg:hidden">About MSME DOST</h1>
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
          <RiBodyScanLine className=" text-5xl sm:text-2xl" />
          <h1 className=" text-lg p-2 lg:hidden">Our VISION & MISSION</h1>
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
          <RiSunLine className=" text-5xl sm:text-2xl" />
          <h1 className=" text-lg p-2 lg:hidden">Philosophies of MSME DOST</h1>
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
          <RiStoreLine className=" text-5xl sm:text-2xl" />
          <h1 className=" text-lg p-2 lg:hidden">How MSME DOST works?</h1>
        </div>
      </div>

      <div data-aos="fade-up" className=" w-screen flex justify-center items-center">
        <div
          style={{ display: selected === "first" ? "flex" : "none" }}
          className=" flex justify-center w-[70vw] gap-16 py-10 md:flex md:flex-col-reverse xl:w-[90vw] "
        >
          <p className=" p-2 w-[30vw] 2xl:w-[40vw] xl2:w-[70vw] xl:w-[90vw]">
            MSME DOST is a SHUDH SWADESHI Business Networking Forum for new
            Bharat; it's a dynamic ecosystem designed to empower Micro, Small, and
            Medium Enterprises (MSMEs) and foster collaborative growth. It has
            been formed with a vision to bridge the gap between MSMEs and
            opportunities, MSME DOST provides a supportive and enriching
            environment where businesses can grow, and create lasting partnerships
            with the core values of integrity, inclusivity, and transparency,
            ensuring that every member feels welcomed and valued. MSME DOST
            believes in the mantra "SERVING COMMUNITY WITH RESPONSIBILITY"
            MSMEDost mantra is 3R's Rating, Review & Repeat. MSME DOST organizes
            structured meetings of DOSTS in both PHYSICAL & DIGITAL modes, a
            perfect mix of Tradition with Technology, know each other, their
            Businesses, exchange Business, ideas, and best practices and pass
            Business Opportunities in their network for growth & betterment of
            DOSTS, a win-win situation for all concerned.
          </p>
          <img className=" object-cover border-4 border-teal-700 rounded-2xl h-96 max-w-96 w-full" src={aboutImage1} alt="About MSME Dost" />
        </div>
        <div
          style={{ display: selected === "second" ? "flex" : "none" }}
          className="flex justify-center w-[70vw] gap-16 py-10 md:flex md:flex-col-reverse xl:w-[90vw]"
        >
          <p className=" p-2 w-[30vw] xl2:w-[70vw] xl:w-[90vw]">
            Vision To make the world a small family where every opportunity or
            business connect is passed through a common network or reliable and
            trustworthy connections. MSME DOST aims to make word of mouth a
            powerful tool of marketing and every business is met and served by
            such one or another such referrals. Mission Mission We stands
            committed to partnering in Nation Building. We pledge to contribute
            the ecomony of the the Globe, increase Customer Satisfaction Index
            (CSI) and generate more and more Business and referal, employment
            opportunity and scaleup the capability of Business preneur and all
            concerned.
          </p>
          <img className=" object-cover border-4 border-teal-700 rounded-2xl w-96 h-fit" src={aboutImage2} alt="Our vision and mission" />
        </div>
        <div
          style={{ display: selected === "third" ? "flex" : "none" }}
          className=" flex justify-center w-[70vw] gap-16 py-10 md:flex md:flex-col-reverse xl:w-[90vw]"
        >
          <p className="p-2 w-[30vw] 2xl:w-[40vw] xl2:w-[70vw] xl:w-[90vw]">
            At MSME DOST, we believe in the power of connections, collaboration,
            inclusivity, continuous learning, and trust. We provide a platform for
            businesses to connect, exchange ideas, and forge partnerships. Through
            regular meetings and networking events, we encourage collaboration and
            celebrate diverse expertise. We prioritize personal development
            through educational sessions and workshops, keeping our members
            updated with industry trends. Trust and integrity are at the core of
            our community, promoting ethical business practices. Join us to
            experience the power of meaningful connections and collective success.
          </p>
          <img className="object-cover border-4 border-teal-700 rounded-2xl h-60 max-w-96 w-full" src={aboutImage3} alt="Philosophies of MSME DOST" />
        </div>
        <div
          style={{ display: selected === "fourth" ? "flex" : "none" }}
          className="flex justify-center w-[70vw] gap-16 py-10 md:flex md:flex-col-reverse xl:w-[90vw]"
        >
          <p className="p-2 w-[30vw] 2xl:w-[40vw] xl2:w-[70vw] xl:w-[90vw]">
            We believe that bringing a customer on the platform where there are a
            number of service providers who are like minded working with a pledge
            to timely serve the business community and the society and satisfy the
            customer at any cost is contributing indirectly to the business of
            customers thereby a partner in nation building. MSME DOST will take
            all necessary steps, follow up and incentivize the customer for
            providing their feedback, any complain, glitches on any suggestion so
            that they feel heard and we can improve our services timing value on
            anything that makes us even .0001% better than the last service
            provided by us. With every service completion, we will ask customers
            to give us an honest & proper review rating, share our portal and
            services network with the people in their connect, their customers,
            their vendors, their service providers even their employees or within
            their family.
          </p>
          <img className=" object-cover border-4 border-teal-700 rounded-2xl h-72 max-w-96 w-full" src={aboutImage4} alt="How MSM DOST works" />
        </div>
      </div>
    </div>
  );
}
export default About;
