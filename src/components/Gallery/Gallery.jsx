import galleryImages from "./galleryImages";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function Gallery() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <img
        className=" w-screen h-[40vh] object-cover mb-10 sm:h-[20vh]"
        src="https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className=" text-center p-4">
        <h1 className=" text-3xl text-gray-700 font-medium">
          SOME BEAUTIFUL MOMENTS
        </h1>
        <p>
          We capture some beatiful moments of MSME DOST's meeting, parties &
          social activities in our camera
        </p>
      </div>

      <div className="  flex flex-wrap gap-5 justify-center items-center p-10">
        {galleryImages.map((image, index) => (
          <img data-aos="fade-up" key={index} className="w-[max(20vw,300px)]" src={image} alt="" />
        ))}
      </div>
    </div>
  );
}
export default Gallery;
