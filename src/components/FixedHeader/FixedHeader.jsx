import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { CgProfile } from "react-icons/cg";
import { Link as ScrollLink } from 'react-scroll'

function FixedHeader({setShowLogin, setShowMemberRegGuide, logoGotoTopOrHome,handleAboutClick}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const sideBarOnclick = ()=>{
    logoGotoTopOrHome()
    setIsOpen(false)
  }

  const aboutOnclick = ()=>{
    handleAboutClick()
    setIsOpen(false)
  }

  useEffect(()=>{
    const handleScroll = () =>{
      const scrollTop = window.pageYOffset;
      if(scrollTop > 150){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
  },[])
  return (
    <>
  
    <div className={`fixed z-10 shadow-2xl w-full top-0 transition-all duration-500 ${isScrolled ? ' translate-y-0' : '-translate-y-20 transition-none'}`}>
    {isOpen? <div className=' w-screen h-screen bg-black bg-opacity-70 transition-all duration-500 z-20 fixed top-0'></div> : <div></div>}
    <div className={`w-[80vw] h-screen fixed z-20 bg-white top-0 right-0 transition-all ease-in-out duration-500 p-4 ${!isOpen ? "translate-x-[80vw] opacity-0" : "translate-x-0" }`}>
        <Link to="/"><img onClick={sideBarOnclick} className=' w-40' src={logo} alt="" /></Link>
      <ul className=' px-8 flex flex-col gap-4 pt-20'>
        <li className=' border-b-[0.5px] border-opacity-15 border-black' onClick={sideBarOnclick}>Home</li>
        <ScrollLink to="about-section" smooth={true} duration={800}><li className=' border-b-[0.5px] border-opacity-15 border-black' onClick={aboutOnclick}>About Us</li></ScrollLink>
        <Link to="/atithi"><li onClick={()=>setIsOpen(false)} className=' border-b-[0.5px] border-opacity-15 border-black'>Join As Atithi</li></Link>
        <Link to="/contact"><li onClick={()=>setIsOpen(false)} className=' border-b-[0.5px] border-opacity-15 border-black'>Contact</li></Link>
      </ul>
      </div>
      <div className=' flex justify-around items-center h-20 bg-white bg-opacity-95'>
          <img onClick={logoGotoTopOrHome} src={logo} alt="" className=' w-40 cursor-pointer'/>
          <div>
          <ul className=' flex gap-5 lg2:hidden'>
              <button onClick={logoGotoTopOrHome}>Home</button>
              <ScrollLink to="about-section" smooth={true} duration={800}><li className=' cursor-pointer' onClick={handleAboutClick}>About Us</li></ScrollLink>
              <Link to="/atithi"><li>Join as Atithi</li></Link>
              <Link to="/contact"><li>Contact Us</li></Link>
              <button onClick={()=>setShowMemberRegGuide(true)}>Register Now</button>
              <button onClick={()=>setShowLogin(true)}><FontAwesomeIcon icon={faUser} className=' px-2'/>Login</button>
            </ul>
          </div>
          <div className=' hidden lg2:block text-4xl'><CgProfile onClick={()=>setShowLogin(true)} /></div>
          <div className={`${isOpen ? "fixed right-4" : "static"} hidden lg2:block z-20`}><Hamburger toggled={isOpen} toggle={setIsOpen}/></div>
        </div>
    </div>
    </>
  )
}
export default FixedHeader