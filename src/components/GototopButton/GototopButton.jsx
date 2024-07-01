
import { FaArrowDown } from "react-icons/fa";
import "./others.css"
import { useEffect, useState } from "react";
function Others() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 135;
      document.getElementById("svg-path").style.strokeDashoffset = 135 - progress;
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);

    document.querySelector('.first-circle').addEventListener('click', scrollToTop);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelector('.first-circle').removeEventListener('click', scrollToTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div>
        <div  style={{
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
        opacity: isVisible ? '1' : '0'
      }}
      onClick={scrollToTop} className="gototop-section">
            <div className="first-circle">
              <div className="gototop">
                <FaArrowDown className="gototop-arrow"/>
              </div>
              <svg className=" absolute rotate-90 z-20"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="44px"
                height="44px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  id="svg-path"
                  cx="22"
                  cy="22"
                  r="21"
                  strokeLinecap="round"
                  fill="url(#GradientColor)"
                />
              </svg>
            </div>
          </div>
    </div>
  )
}
export default Others