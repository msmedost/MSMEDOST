import axios from 'axios'
import React, { useState } from 'react'

function JoinAsAtithiTest() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNo: ""
    })

    const handleChange = (e)=>{
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8000/api/registerAtithi", formData)
            console.log("successful:", response);
        } catch (error) {
            console.log("error:", error);
        }
    }
    
  return (
    <div className=' h-screen w-screen'>
        <form className=' flex justify-center items-center h-full' onSubmit={handleSubmit}>
            <label htmlFor="fname"> Name:</label><br />
            <input type="text" id="fname" name="name" value={formData.name}  onChange={handleChange} />
            <br />
            <label htmlFor="lname">Email:</label><br />
            <input type="email" id="lname" name="email" value={formData.email} onChange={handleChange}/>
            <br />
            <label htmlFor="lname">Phone Number:</label><br />
            <input type="tel" id="lname" name="mobileNo" value={formData.mobileNo} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default JoinAsAtithiTest