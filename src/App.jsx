import './App.css'
import FixedHeader from './components/FixedHeader/FixedHeader'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Contact from './components/RouterComponents/Contact/Contact'
import JoinAsAtithi from './components/RouterComponents/JoinAsAtithi/JoinAsAtithi'
import { Rotate } from 'hamburger-react'
import Gallery from './components/Gallery/Gallery'
import GototopButton from './components/GototopButton/GototopButton'
import AboutForRoute from './components/RouterComponents/Others/AboutForRoute'
import BecomeMember from './components/BecomeMember/BecomeMember'
import RegistrationForm from './components/BecomeMember/RegistrationForm'
// import Registration from './components/BecomeMember/Registration'
import FranchiseRegistration from './components/RouterComponents/FranchiseRegistration/FranchiseRegistration'
import ErrorPage from './components/RouterComponents/ErrorPage/ErrorPage'
import WhyToJoinForRoute from './components/RouterComponents/Others/WhyToJoinForRoute'
import FaqsForRoute from './components/RouterComponents/Others/FaqsForRoute'
import JoinAsAtithiTest from './components/RouterComponents/JoinAsAtithi/JoinAsAtithiTest'



// import MobileSidebar from './components/MobileSidebar/MobileSidebar'


function App() {
const location = useLocation()
const navigate = useNavigate()
// const [isOpen, setIsOpen] = useState(false)

  const ScrollToTop=()=>{
    const { pathname } = useLocation();

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  const [showLogin,setShowLogin] = useState(false)
  const[showMemberRegGuide, setShowMemberRegGuide] = useState(false)
  

  const logoGotoTopOrHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      navigate("/");
    }
  };
  
  const gotoFaqs = () => {
    if (location.pathname !== "/") {
      navigate("/faqs");
    }
  };
  
  const handleAboutClick = () => {
    if (location.pathname !== '/') {
      navigate("/about");
    }
  };
  
  const gotoWhytojoin = () => {
    if (location.pathname !== '/') {
      navigate("/services");
    }
  };
  

    function generateRandomCharacter() {
      const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
      const randomIndex = Math.floor(Math.random() * characters.length);
      return characters[randomIndex];
    }
    
    function generateRandomArray(length) {
      let array = [];
      for (let i = 0; i < length; i++) {
        array.push(generateRandomCharacter());
      }
      return array;
    }
    
    const random = generateRandomArray(100);

    // const [randomState] = useState(random.join(""))


    // for captcha

    const [captcha, setCaptcha] = useState("");
    const [captchaError, setCaptchaError] = useState("");
    const timeoutRef = useRef(null)

    const handleCaptchaChange = (token) => {
      console.log("the token is :", token);
      setCaptcha(token);
  
      if (token && captchaError) {
        setCaptchaError("");
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!captcha) {
        setCaptchaError("Please submit the Captcha");
  
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setCaptchaError("");
          timeoutRef.current = null;
        }, 3000);
        
        return;
      }
      console.log("it is submitted");
    };

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     {showMemberRegGuide? <BecomeMember setShowMemberRegGuide={setShowMemberRegGuide} /*randomState={randomState}*//> : <></>}
     <div>
      <Header setShowLogin={setShowLogin} setShowMemberRegGuide={setShowMemberRegGuide} logoGotoTopOrHome={logoGotoTopOrHome} handleAboutClick={handleAboutClick} gotoFaqs={gotoFaqs} />
      <FixedHeader setShowLogin={setShowLogin} setShowMemberRegGuide={setShowMemberRegGuide} logoGotoTopOrHome={logoGotoTopOrHome} handleAboutClick={handleAboutClick}/>

     <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/atithi' element={<JoinAsAtithi handleCaptchaChange={handleCaptchaChange} captchaError={captchaError} handleSubmit={handleSubmit}/>}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path="/about" element={<AboutForRoute />}/>
        {/* <Route path={`/register/${randomState}`} element={<RegistrationForm/>}/> */}
        <Route path={`/register`} element={<RegistrationForm/>}/>
        {/* <Route path={`/register/`} element={<Registration/>}/> */}
        <Route path='/franchise' element={<FranchiseRegistration handleCaptchaChange={handleCaptchaChange} handleSubmit={handleSubmit} captchaError={captchaError}/>}/>
        <Route path='/services' element={<WhyToJoinForRoute />}/>
        <Route path='/faqs' element={<FaqsForRoute/>}/>
    
        <Route path='/abc' element={<JoinAsAtithiTest/>}/>
        
        <Route path='*' element={<ErrorPage logoGotoTopOrHome={logoGotoTopOrHome}/>}/>
        </Routes>
      <Footer handleAboutClick={handleAboutClick} logoGotoTopOrHome={logoGotoTopOrHome} gotoWhytojoin={gotoWhytojoin}/>
     </div>
     <GototopButton />
    </>
  )
}

export default App
