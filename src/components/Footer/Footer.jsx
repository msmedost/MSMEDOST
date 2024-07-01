import { Link } from 'react-router-dom'
import logo from '../../assets/MSME_logo.png'
import './Footer.css'
import { Link as ScrollLink } from 'react-scroll';


function Footer({handleAboutClick,logoGotoTopOrHome,gotoWhytojoin,setShowMemberRegGuide}) {
  return (

    <div className='footer'>
      <div className='flex p-10 justify-evenly gap-10 text-white lg2:flex-col'>
            <div className=' flex flex-col gap-4 z-10'>
              <Link to="/"><img src={logo} alt="" /></Link>
              <p>Kolkata 700001, India</p>
              <a href="tel:+918582848434">Phone: +91 85828 48434</a>
              <a href="mailto:msmedostskj@gmail.com">Email: msmedostskj@gmail.com</a>
            </div>
            <div className=' z-10'>
                <h1 className=' text-2xl font-medium mb-5 text-gray-200 '>Useful Links</h1>
                <div className=' flex flex-col gap-4 items-start'>
                    <button onClick={logoGotoTopOrHome}><span className=' mr-3 text-xl'>{">"}</span>Home</button>
                    <ScrollLink to="about-section" smooth={true} duration={800}><button onClick={handleAboutClick}><span className=' mr-3 text-xl'>{">"}</span>About Us</button></ScrollLink>
                    <ScrollLink to='whytojoin' smooth={true} duration={800}><button onClick={gotoWhytojoin}><span className=' mr-3 text-xl'>{">"}</span>Services</button></ScrollLink>
                    <Link to="/gallery"><button><span className=' mr-3 text-xl'>{">"}</span>Gallery</button></Link>
                </div>
            </div>
            <div className=' z-10'>
                <h1 className=' text-2xl font-medium mb-5 text-gray-200'>Our Services</h1>
                <ul className=' flex flex-col gap-4'>
                    <Link to="/atithi"><li><span className=' mr-3 text-xl'>{">"}</span>Register As an Atihti</li></Link>
                    <li className=' cursor-pointer' onClick={()=>setShowMemberRegGuide(true)}><span className=' mr-3 text-xl'>{">"}</span>Become a MSME DOST</li>
                    <Link to="/franchise"><li><span className=' mr-3 text-xl'>{">"}</span>Franchise Registration</li></Link>
                    <Link to="/contact"><li><span className=' mr-3 text-xl'>{">"}</span>Support</li></Link>
                </ul>
          </div>
      </div>
    </div>
  )
}
export default Footer