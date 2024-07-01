// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import comments from './testimonialItems';

// function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,   // Display three slides at a time
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     draggable: true,
//     onSwipe: (direction) => {
//       if (direction === 'left') {
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//       } else if (direction === 'right') {
//         setCurrentIndex((prevIndex) => prevIndex - 1);
//       }
//     },
//     beforeChange: (oldIndex, newIndex) => {
//       setCurrentIndex(newIndex);
//     },
//   };

//   return (
//     <div className=' w-screen h-screen flex justify-center items-center'>
// <Slider {...settings}>
//   {comments.map((index, item)=>(
//     <div key={index}>
//       <h1>{item.name}</h1>
//       <p>{item.description}</p>
//     </div>
//   ))}
// Current Slide: {currentIndex + 1}
// </Slider>
//     </div>
//   )
// }
// export default Testimonial



import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import comments from './testimonialItems';
import { FaQuoteLeft } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Testimonial = () => {
  const isMobile = useMediaQuery({ maxWidth: 850 });

  function PrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className='flex items-center h-full text-5xl sm:text-2xl absolute -left-20 z-10 sm:-left-8'
      onClick={onClick}
      ><div className=' inline-block text-indigo-900'>
        <MdKeyboardDoubleArrowLeft />
      </div>
      </div>
    );
  }


  
  function NextArrow(props) {
    const {  onClick } = props;
    return (
      <div className='flex items-center h-full text-5xl sm:text-2xl absolute -right-20 top-0 z-10 sm:-right-10'
        onClick={onClick}
      ><div className=' inline-block text-indigo-900'>
        <MdKeyboardDoubleArrowRight />
      </div>
      </div>
    );
  }
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
    
  };

  return (
    <div className=" pt-4 pb-16 w-screen sm:px-2 flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 ">
      <div className=' text-center w-4/5'>
        <h1 className=' text-2xl font-semibold py-4'>TESTIMONIALS</h1>
        <p>Discover the Success Stories of Our Valued DOSTS. Read firsthand experiences and feedback from our satisfied members, highlighting the positive impact and benefits of being a part of MSME DOST. Their testimonials showcase the value and effectiveness of our platform in fostering business connections, growth, and success.</p>
      </div>
      <div className=" w-3/4 mt-8">
        <Slider {...settings}>
          {comments.map((comment, index)=>(
            <div key={index} className=' p-4 sm:p-2'>
              <div className=' bg-white shadow-lg rounded-lg w-[35vw] lg2:w-full min-h-[36vh] 2xl:min-h-[40vh] xl2:min-h-[45vh] p-8 text-[max(0.8vw,13px)]'>
              <FaQuoteLeft className=' text-[max(1.7vw,25px)] mb-4'/>
                <p>{comment.description}</p>
                <div className=' flex gap-4 items-center mt-12 xl2:mt-10'>
                  <img className=' h-20 w-20 rounded-md' src={comment.partnerImage} alt="" />
                  <h1 className=' text-[max(1vw,15px)] font-bold'>{comment.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

