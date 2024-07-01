import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Registration = () => {
  const [userPhoto, setUserPhoto] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [previewImg, setPreviewImg] = useState("");
  const [previewLogo, setPreviewLogo] = useState("");

  const handleUserPhotoChange = (event) => {
    setUserPhoto(event.currentTarget.files[0]);
    setPreviewImg(event.target.files[0]);
  };

  const handleCompanyLogoChange = (event) => {
    setCompanyLogo(event.currentTarget.files[0]);
    setPreviewLogo(event.target.files[0]);
  };

  const initialValues = {
    ourServiceCity: "Kolkata",
    zone: "North",
    toliChapter: "Kolkata",
    registerThroughReferenceNumber: "Not required",
    yourReferenceNumber: "93311775951",
    emailAddress: "sandeep@fmail.com",
    password: "Password123",
    fullName: "Sandeep Roy",
    phoneNumber: "9876543210",
    alternativePhoneNumber: "9876543211",
    gender: "Male",
    bloodGroup: "O+",
    dateOfBirthDDMM: "01/01/1990",
    dateOfAnniversaryDDMM: "05/10",
    country: "India",
    stateUT: "West Bengal",
    city: "Kolkata",
    postalPinCode: "700001",
    organizationName: "ABC Corporation",
    businessCategory: "Technology",
    businessDescription: "We specialize in software development.",
    officeAddress: "123, Park Street, Kolkata",
    website: "https://example.com",
    googleMapLink: "https://maps.google.com",
    facebookLink: "https://facebook.com/example",
    instagramLink: "https://instagram.com/example",
    linkedinLink: "https://linkedin.com/company/example",
    twitterLink: "https://twitter.com/example",
    leaderShip: "Leadership & Extended Leader Role",
    committee: "Startup Committee",
    others: "Blood Donation Activity",
    yearsInCurrentBusiness: "5 years",
    currentBusinessSince: "2015",
    branchesIfAny: "Branch A, Branch B",
    majorProductsServices:
      "Our company specializes in developing advanced software solutions and providing expert consulting services.",
    majorBrands:
      "We proudly represent Brand X and Brand Y, known for their innovation and quality in the industry.",
    majorAchievements:
      "We have been honored with prestigious awards, including Award 1 and Award 2, recognizing our excellence and dedication.",
    majorClients:
      "Trusted by leading clients such as Client A and Client B, who rely on our solutions to drive their business forward.",
    connectedWithAnyTradeBody:
      "Yes, actively engaged with industry trade bodies to stay informed and compliant with industry standards.",
    associatedwithanyBusinessSocialNetworkingGroups:
      "No, while we value networking, our focus remains on delivering exceptional products and services to our clients.",
    userPhoto: "", 
    companyLogo: "", 
  };

  const [stage, setStage] = useState(1);
  // const [formData, setFormData] = useState({
  //   field1: "",
  //   field2: "",
  //   field3: "",
  //   field4: "",
  // });

  const handleNext = () => {
    setStage(stage + 1);
  };

  const handlePrevious = () => {
    setStage(stage - 1);
  };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === "userPhoto" && userPhoto) {
          formData.append("userPhoto", userPhoto);
        } else if (key === "companyLogo" && companyLogo) {
          formData.append("companyLogo", companyLogo);
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.post(
        "https://msmedost.onrender.com/api/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);
      
    } catch (error) {
      console.error("Registration Error:", error.response.data.message);
      alert("Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    
    <div className=" w-screen min-h-screen bg-gray-100 flex flex-col items-center">
      <img className=" h-[40vh] w-full object-cover" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1 className=" text-4xl text-center my-8">User Registration</h1>
      <div className=" bg-white shadow-2xl w-fit flex  items-center flex-col p-8 my-8 rounded-lg">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              {stage === 1 && (
                <>
                  <h1 className=" text-3xl mb-10 text-center">INITIAL CHECK</h1>
                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="ourServiceCity"
                      >
                        Our Service City
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="ourServiceCity"
                        name="ourServiceCity"
                        placeholder="Our Service City"
                      />
                      <ErrorMessage name="ourServiceCity" component="div" />
                    </div>
                    <div>
                      <label className=" flex flex-col" htmlFor="zone">
                        Zone
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="zone"
                        name="zone"
                        placeholder="Zone"
                      />
                      <ErrorMessage name="zone" component="div" />
                    </div>
                  </div>

                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label className=" flex flex-col" htmlFor="toliChapter">
                        Toli Chapter
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="toliChapter"
                        name="toliChapter"
                        placeholder="Toli Chapter"
                      />
                      <ErrorMessage name="toliChapter" component="div" />
                    </div>

                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="yourReferenceNumber"
                      >
                        Your Reference Number
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="yourReferenceNumber"
                        name="yourReferenceNumber"
                        placeholder="Your Reference Number"
                      />
                      <ErrorMessage
                        name="yourReferenceNumber"
                        component="div"
                      />
                    </div>
                  </div>

                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label className=" flex flex-col" htmlFor="fullName">
                        Full Name
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                      />
                      <ErrorMessage name="fullName" component="div" />
                    </div>

                    <div>
                      <label className=" flex flex-col" htmlFor="emailAddress">
                        Email Address
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        placeholder="Email Address"
                      />
                      <ErrorMessage name="emailAddress" component="div" />
                    </div>
                  </div>
                </>
              )}
              {stage === 2 && (
                <>
                  <h1 className=" text-3xl mb-10 text-center">
                    PERSONAL BASIC
                  </h1>
                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label className=" flex flex-col" htmlFor="phoneNumber">
                        Phone Number
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number"
                      />
                      <ErrorMessage name="phoneNumber" component="div" />
                    </div>

                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="alternativePhoneNumber"
                      >
                        Alternative Phone Number
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="alternativePhoneNumber"
                        name="alternativePhoneNumber"
                        placeholder="Alternative Phone Number"
                      />
                      <ErrorMessage
                        name="alternativePhoneNumber"
                        component="div"
                      />
                    </div>
                  </div>

                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label className=" flex flex-col" htmlFor="gender">
                        Gender
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2 w-[13.5rem]"
                        as="select"
                        id="gender"
                        name="gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Field>
                      <ErrorMessage name="gender" component="div" />
                    </div>

                    <div>
                      <label className=" flex flex-col" htmlFor="bloodGroup">
                        Blood Group
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="bloodGroup"
                        name="bloodGroup"
                        placeholder="Blood Group"
                      />
                      <ErrorMessage name="bloodGroup" component="div" />
                    </div>
                  </div>

                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="dateOfBirthDDMM"
                      >
                        Date of Birth (DD/MM)
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="dateOfBirthDDMM"
                        name="dateOfBirthDDMM"
                        placeholder="Date of Birth (DD/MM)"
                      />
                      <ErrorMessage name="dateOfBirthDDMM" component="div" />
                    </div>

                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="dateOfAnniversaryDDMM"
                      >
                        Date of Anniversary (DD/MM)
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="dateOfAnniversaryDDMM"
                        name="dateOfAnniversaryDDMM"
                        placeholder="Date of Anniversary (DD/MM)"
                      />
                      <ErrorMessage
                        name="dateOfAnniversaryDDMM"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label className=" flex flex-col" htmlFor="country">
                        Country
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Country"
                      />
                      <ErrorMessage name="country" component="div" />
                    </div>

                    <div>
                      <label className=" flex flex-col" htmlFor="stateUT">
                        State/UT
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="stateUT"
                        name="stateUT"
                        placeholder="State/UT"
                      />
                      <ErrorMessage name="stateUT" component="div" />
                    </div>
                  </div>

                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label className=" flex flex-col" htmlFor="city">
                        City
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                      />
                      <ErrorMessage name="city" component="div" />
                    </div>

                    <div>
                      <label className=" flex flex-col" htmlFor="postalPinCode">
                        Postal Pin Code
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="postalPinCode"
                        name="postalPinCode"
                        placeholder="Postal Pin Code"
                      />
                      <ErrorMessage name="postalPinCode" component="div" />
                    </div>
                  </div>
                </>
              )}

              {stage === 3 && (
                <>
                  <h1 className=" text-3xl mb-10 text-center">
                    BUSINESS DETAILS <br />& <br />
                    SOCIAL MEDIA
                  </h1>
                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="organizationName"
                      >
                        Organization Name
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        placeholder="Organization Name"
                      />
                      <ErrorMessage name="organizationName" component="div" />
                    </div>

                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="businessCategory"
                      >
                        Business Category
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="businessCategory"
                        name="businessCategory"
                        placeholder="Business Category"
                      />
                      <ErrorMessage name="businessCategory" component="div" />
                    </div>
                  </div>
                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="businessDescription"
                      >
                        Business Description
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded p-2 w-[13.5rem] min-h-20"
                        as="textarea"
                        id="businessDescription"
                        name="businessDescription"
                        placeholder="Business Description"
                      />
                      <ErrorMessage
                        name="businessDescription"
                        component="div"
                      />
                    </div>

                    <div>
                      <label className=" flex flex-col" htmlFor="officeAddress">
                        Office Address
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded p-2 w-[13.5rem] min-h-20"
                        as="textarea"
                        id="officeAddress"
                        name="officeAddress"
                        placeholder="Office Address"
                      />
                      <ErrorMessage name="officeAddress" component="div" />
                    </div>
                  </div>
                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label className=" flex flex-col" htmlFor="website">
                        Website
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="website"
                        name="website"
                        placeholder="Website"
                      />
                      <ErrorMessage name="website" component="div" />
                    </div>

                    <div>
                      <label className=" flex flex-col" htmlFor="googleMapLink">
                        Google Map Link
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="googleMapLink"
                        name="googleMapLink"
                        placeholder="Google Map Link"
                      />
                      <ErrorMessage name="googleMapLink" component="div" />
                    </div>
                  </div>
                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label className=" flex flex-col" htmlFor="facebookLink">
                        Facebook Link
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="facebookLink"
                        name="facebookLink"
                        placeholder="Facebook Link"
                      />
                      <ErrorMessage name="facebookLink" component="div" />
                    </div>

                    <div>
                      <label className=" flex flex-col" htmlFor="instagramLink">
                        Instagram Link
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="instagramLink"
                        name="instagramLink"
                        placeholder="Instagram Link"
                      />
                      <ErrorMessage name="instagramLink" component="div" />
                    </div>
                  </div>

                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label className=" flex flex-col" htmlFor="linkedinLink">
                        LinkedIn Link
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="linkedinLink"
                        name="linkedinLink"
                        placeholder="LinkedIn Link"
                      />
                      <ErrorMessage name="linkedinLink" component="div" />
                    </div>

                    <div>
                      <label className=" flex flex-col" htmlFor="twitterLink">
                        Twitter Link
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="twitterLink"
                        name="twitterLink"
                        placeholder="Twitter Link"
                      />
                      <ErrorMessage name="twitterLink" component="div" />
                    </div>
                  </div>
                </>
              )}
              {stage === 4 && (
                <>
                  <h3 className=" mb-8">
                    Would you like to contribute in an active role and wish to
                    increase your visibility and recall value in any of these?
                    <br />
                    (You may choose more than 1 as per your interest and
                    expertise)
                  </h3>
                  <div className=" flex justify-around mb-8">

                    <div>
                      <label className=" flex flex-col" htmlFor="leaderShip">
                        Leadership
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="leaderShip"
                        name="leaderShip"
                        placeholder="Leadership"
                      />
                      <ErrorMessage name="leaderShip" component="div" />
                    </div>
                    <div>
                      <label className=" flex flex-col" htmlFor="committee">
                        Committee
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="committee"
                        name="committee"
                        placeholder="Committee"
                      />
                      <ErrorMessage name="committee" component="div" />
                    </div>
                    <div>
                      <label className=" flex flex-col" htmlFor="others">
                        Others
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="others"
                        name="others"
                        placeholder="Others"
                      />
                      <ErrorMessage name="others" component="div" />
                    </div>
                  </div>
                </>
              )}
              {stage === 5 && (
                <>
                  <h1 className=" text-3xl mb-10 text-center">
                    ADDITIONAL DETAILS
                  </h1>
                  <div className=" flex gap-4 mb-6">
                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="yearsInCurrentBusiness"
                      >
                        Years in Current Business
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="yearsInCurrentBusiness"
                        name="yearsInCurrentBusiness"
                        placeholder="Years in Current Business"
                      />
                      <ErrorMessage
                        name="yearsInCurrentBusiness"
                        component="div"
                      />
                    </div>

                    <div>
                      <label
                        className=" flex flex-col"
                        htmlFor="currentBusinessSince"
                      >
                        Current Business Since
                      </label>
                      <Field
                        className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2"
                        type="text"
                        id="currentBusinessSince"
                        name="currentBusinessSince"
                        placeholder="Current Business Since"
                      />
                      <ErrorMessage
                        name="currentBusinessSince"
                        component="div"
                      />
                    </div>
                  </div>

                  <div className=" mb-4">
                    <label className=" flex flex-col" htmlFor="branchesIfAny">
                      Branches If Any
                    </label>
                    <Field
                      className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2 w-full min-h-20"
                      type="text"
                      as="textarea"
                      id="branchesIfAny"
                      name="branchesIfAny"
                      placeholder="Branches If Any"
                    />
                    <ErrorMessage name="branchesIfAny" component="div" />
                  </div>

                  <div className=" mb-4">
                    <label
                      className=" flex flex-col"
                      htmlFor="majorProductsServices"
                    >
                      Major Products/Services
                    </label>
                    <Field
                      className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2 w-full min-h-20"
                      type="text"
                      as="textarea"
                      id="majorProductsServices"
                      name="majorProductsServices"
                      placeholder="Major Products/Services"
                    />
                    <ErrorMessage
                      name="majorProductsServices"
                      component="div"
                    />
                  </div>

                  <div className=" mb-4">
                    <label className=" flex flex-col" htmlFor="majorBrands">
                      Major Brands
                    </label>
                    <Field
                      className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2 w-full min-h-20"
                      type="text"
                      as="textarea"
                      id="majorBrands"
                      name="majorBrands"
                      placeholder="Major Brands"
                    />
                    <ErrorMessage name="majorBrands" component="div" />
                  </div>

                  <div className=" mb-4">
                    <label
                      className=" flex flex-col"
                      htmlFor="majorAchievements"
                    >
                      Major Achievements
                    </label>
                    <Field
                      className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2 w-full min-h-20"
                      type="text"
                      as="textarea"
                      id="majorAchievements"
                      name="majorAchievements"
                      placeholder="Major Achievements"
                    />
                    <ErrorMessage name="majorAchievements" component="div" />
                  </div>

                  <div className=" mb-4">
                    <label className=" flex flex-col" htmlFor="majorClients">
                      Major Clients
                    </label>
                    <Field
                      className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2 w-full min-h-20"
                      type="text"
                      as="textarea"
                      id="majorClients"
                      name="majorClients"
                      placeholder="Major Clients"
                    />
                    <ErrorMessage name="majorClients" component="div" />
                  </div>

                  <div className=" mb-4">
                    <label
                      className=" flex flex-col"
                      htmlFor="connectedWithAnyTradeBody"
                    >
                      Connected with any Trade Body
                    </label>
                    <Field
                      className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2 w-full min-h-20"
                      type="text"
                      as="textarea"
                      id="connectedWithAnyTradeBody"
                      name="connectedWithAnyTradeBody"
                      placeholder="Connected with any Trade Body"
                    />
                    <ErrorMessage
                      name="connectedWithAnyTradeBody"
                      component="div"
                    />
                  </div>

                  <div className=" mb-4">
                    <label
                      className=" flex flex-col"
                      htmlFor="associatedwithanyBusinessSocialNetworkingGroups"
                    >
                      Associated with any Business/Social Networking Groups
                    </label>
                    <Field
                      className=" border-[0.5px] outline-none border-black bg-gray-100 rounded h-10 p-2 w-full min-h-20"
                      type="text"
                      as="textarea"
                      id="associatedwithanyBusinessSocialNetworkingGroups"
                      name="associatedwithanyBusinessSocialNetworkingGroups"
                      placeholder="Associated with any Business/Social Networking Groups"
                    />
                    <ErrorMessage
                      name="associatedwithanyBusinessSocialNetworkingGroups"
                      component="div"
                    />
                  </div>
                </>
              )}
              {stage === 6 && (
                <>
          
                  <h1 className=" text-3xl mb-10 text-center">ATTACHMENTS</h1>

                  <div className="flex items-center justify-center w-full gap-4 mb-20">
                    <label
                      htmlFor="dropzone-file"
                      className=" flex flex-col items-center justify-center w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      Your recent photo
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {previewImg ? (
                          <div>
                            <img
                              className=" min-w-16 max-w-32 min-h-8 max-h-32 object-contain"
                              src={URL.createObjectURL(previewImg)}
                              alt=""
                            />
                          </div>
                        ) : (
                          <>
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>

                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
    
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG or JPG
                            </p>
                          </>
                        )}
                      </div>
                      <input
                        id="dropzone-file"
                        name="userPhoto"
                        type="file"
                        className="hidden"
                        onChange={handleUserPhotoChange}
                      />
                    </label>

                    <label
                      htmlFor="companyLogo"
                      className="flex flex-col items-center justify-center w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      Your company logo
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {previewLogo ? (
                          <div>
                            <img
                              className=" min-w-16 max-w-32 min-h-8 max-h-32 object-contain"
                              src={URL.createObjectURL(previewLogo)}
                              alt=""
                            />
                          </div>
                        ) : (
                          <>
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                             
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG or JPG
                            </p>
                          </>
                        )}
                      </div>
                      <input
                        id="companyLogo"
                        name="companyLogo"
                        type="file"
                        className="hidden"
                        onChange={handleCompanyLogoChange}
                      />
                    </label>
                  </div>
                </>
              )}

              <div className=" w-full flex justify-center gap-4">
                <span
                  className={` cursor-pointer bg-black text-white rounded-md px-4 py-2 ${
                    stage > 1 && stage <= 6 ? "" : "hidden"
                  }`}
                  onClick={handlePrevious}
                >
                  Back
                </span>
                <span
                  className={` cursor-pointer bg-black text-white rounded-md px-4 py-2 ${
                    stage === 6 ? "hidden" : " static"
                  }`}
                  onClick={handleNext}
                >
                  {stage < 6 ? "Next" : ""}
                </span>
               
                <button
                  className={`${
                    stage !== 6 ? " hidden" : ""
                  } bg-black text-white rounded-md px-4 py-2`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
