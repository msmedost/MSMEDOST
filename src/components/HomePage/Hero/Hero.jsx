import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import hero1 from "../../../assets/Hero/2829596233576006.jpg";
import hero2 from "../../../assets/Hero/54878302316424.jpg";
import hero3 from "../../../assets/Hero/2042269148115493.jpg";
import hero4 from "../../../assets/Hero/2618459630671571.jpg";
import hero5 from "../../../assets/Hero/4055222518733092.jpg";

const images = [
  { original: hero1 },
  { original: hero2 },
  { original: hero3 },
  { original: hero4 },
  { original: hero5 },
];

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh()
  }, []);
  return (
      <div className="gallery-container top-0 left-0 w-screen h-fit" data-aos="fade-up">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideInterval={8000}
          showNav={true}
          showBullets={true}
          disableSwipe={false}
          renderItem={(item) => (
            <div className=" w-full h-full">
              <img
                src={item.original}
                alt={item.description}
                className="w-full"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          )}
        />
      </div>

  );
}
export default Hero;


// import React, { useState } from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import hero1 from '../../assets/Hero/2829596233576006.jpg'
// import hero2 from '../../assets/Hero/54878302316424.jpg'
// import hero3 from '../../assets/Hero/2042269148115493.jpg'
// import hero4 from '../../assets/Hero/2618459630671571.jpg'
// import hero5 from '../../assets/Hero/4055222518733092.jpg'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


// const images = [
//   { original: hero1 },
//   { original: hero2 },
//   { original: hero3 },
//   { original: hero4 },
//   { original: hero5 },
// ];

// function Hero() {
//   const [disableSwipe, setDisableSwipe] = useState(false);

//   const handleDragStart = () => {
//     setDisableSwipe(true);
//   };

//   const handleDragEnd = () => {
//     setDisableSwipe(false);
//   };

//   return (
//     <div className=" absolute -z-10 top-0 w-screen">
//       <div className="gallery-container top-0 left-0 w-full h-full z-50">
//         <ImageGallery
//           items={images}
//           showThumbnails={false}
//           showFullscreenButton={false}
//           showPlayButton={false}
//           autoPlay={!disableSwipe}
//           slideInterval={5000}
//           showNav={false}
//           showBullets={true}
//           disableSwipe={disableSwipe}
//           renderItem={(item) => (
//             <div className=" w-screen h-full">
//               <img
//                 src={item.original}
//                 alt={item.description}
//                 className=" object-contain w-full"
//                 onContextMenu={(e) => e.preventDefault()}
//                 onDragStart={handleDragStart}
//                 onDragEnd={handleDragEnd}
//               />
//             </div>
//           )}
//           renderLeftNav={(onClick, disabled) => (
//             <button
//               className="image-gallery-left-nav"
//               onClick={onClick}
//               disabled={disabled}
//             >
//               {/* Your custom left arrow icon */}
//               {"<"}
//             </button>
//           )}
//           renderRightNav={(onClick, disabled) => (
//             <button
//               className="image-gallery-right-nav z-20 bg-red-600 p-20 absolute"
//               onClick={onClick}
//               disabled={disabled}
//             >
//               <FontAwesomeIcon icon={faArrowRight} />
//               {">"}fgdfdsfasfas
//             </button>
//           )}
//         />
//       </div>
//     </div>
//   );
// }

// export default Hero;

