import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'


function MobileSidebar({isOpen, setIsOpen}) {
 

  return (
    <div>
    {isOpen?<div className={` w-screen h-screen bg-black bg-opacity-70 transition-all duration-500 z-20 fixed transition-bg top-0`}></div>:""}
      <div className={`w-[80vw] h-screen fixed z-20 bg-white top-0 right-0 transition-all ease-in-out duration-500 p-4 ${!isOpen ? "translate-x-[80vw] opacity-0" : "translate-x-0" }`}>
        <Link to="/"><img className=' w-40' src={logo} alt="" /></Link>
      <ul className=' px-8 flex flex-col gap-4 pt-20'>
        <li className=' border-b-[0.5px] border-opacity-15 border-black'>Home</li>
        <li className=' border-b-[0.5px] border-opacity-15 border-black'>About Us</li>
        <li className=' border-b-[0.5px] border-opacity-15 border-black'>Join As Atithi</li>
        <li className=' border-b-[0.5px] border-opacity-15 border-black'>Contact</li>
      </ul>
      </div>
      
    </div>
  )
}
export default MobileSidebar