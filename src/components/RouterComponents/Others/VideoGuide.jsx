import React from 'react'
import "./VideoGuide.css"
import { FaPlay } from "react-icons/fa";

function VideoGuide() {
  return (
    <div>
        <div className="why-choose-us-right">
                <div className="spinning-circle1"></div>
                <div className="spinning-circle2"></div>
                    <img id="inside-circle" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                    <div className="play-button-anim1"></div>
                    <div className="play-button-anim2"></div>
                        <div className="play-button">
                            <div className=' flex justify-center items-center text-orange-600'><FaPlay /></div>
                        </div>
                        
                </div>
    </div>
  )
}

export default VideoGuide