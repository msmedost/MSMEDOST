import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import indianStatesAndUTs from "../StateArray";
import ReCAPTCHA from "react-google-recaptcha";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [currStep, setCurrStep] = useState(1);

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
  


  const nextStep = () => {
    if (currStep < 7) setCurrStep(currStep + 1);
  };
  const prevStep = () => {
    setCurrStep(currStep - 1);
  };

  const selectLength = username.length;
  const inputLength = username.length;

  const selectColor = selectLength.value === "Select City" ? "red" : "green";
  // const refNoColor =
  inputLength >= 1 ? "red" : inputLength === 11 ? "green" : "";

  // const inputColor =
  inputLength >= 1 && inputLength < 10
    ? "red"
    : inputLength === 10
    ? "green"
    : "";
  // const inputColor1 =
  inputLength >= 1 ? "red" : inputLength === 10 ? "green" : "";
  // const emailColor =
  username.includes("@") && username.includes(".") ? "green" : "red";

  const [test, setTest] = useState("");
  const handleChange = (e) => {
    setTest(e.target.value);
    console.log(e.target.value);
  };

  const stepLabels = {
    1: "INITIAL CHECKS",
    2: "PERSONAL BASIC",
    3: "BUSINESS DETAILS",
    4: "SOCIAL MEDIA",
    6: "ADDITIONAL DETAILS",
    7: "ATTACHMENTS",
  };

  return (
    <div>
      <div className=" h-[120px] md:hidden "></div>
      <div className=" min-h-[80vh] w-screen flex justify-center items-center flex-col bg-gray-100 py-12">
        {/* <h1 className=" text-2xl font-semibold mb-10">{currStep === 1 ?"INITIAL CHECKS": currStep === 2 ? "PERSONAL BASIC": currStep === 3 ? "BUSINESS DETAILS": currStep === 4 ? "SOCIAL MEDIA" : currStep === 5 ? "": currStep === 6 ? "ADDITIONAL DETAILS" : currStep === 7 ? "ATTACHMENTS": ""}</h1> */}
        <h1 className="text-2xl font-semibold mb-10">
          {stepLabels[currStep] || ""}
        </h1>
        <form
          action=""
          className={` bg-white p-8 rounded-lg shadow-xl flex flex-col gap-4 w-4/5  ${
            currStep === 7 ? " max-w-[450px]" : ""
          }`}
        >
          {currStep === 1 && (
            <>
              <div className=" flex gap-4 lg2:flex-col">
                <Select
                  value={test}
                  color={selectColor}
                  onChange={(e) => handleChange(e)}
                  label="Select City"
                >
                  <Option value="Kolkata">Kolkata</Option>
                </Select>
                <Select color={selectColor} label="Select Zone">
                  <Option>South</Option>
                </Select>
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Select color={selectColor} label="Select Toli">
                  <Option>Tagore</Option>
                  <Option>Bose</Option>
                </Select>
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Reference No."
                  // color={refNoColor}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Email Address"
                  // color={emailColor}
                  onChange={(e) => setUsername(e.target.value)}
                  type="email"
                />
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Full Name"
                  // color={inputColor}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </>
          )}
          {currStep === 2 && (
            <>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Phone No."
                />
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Alternate Phone No."
                />
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Select label="Select Gender">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Others">Others</Option>
                </Select>
                <Select label="Select Blood Group">
                  <Option value="A+">A+</Option>
                  <Option value="A-">A-</Option>
                  <Option value="B+">B+</Option>
                  <Option value="B-">B-</Option>
                  <Option value="O+">O+</Option>
                  <Option value="O-">O-</Option>
                  <Option value="AB+">AB+</Option>
                  <Option value="AB-">AB-</Option>
                </Select>
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Date of Birth (DD-MM)"
                />
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Date of Anniversary (DD-MM)"
                />
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Country"
                />
                <Select className=" flex justify-between" label="Select State">
                  {indianStatesAndUTs.map((states, index) => (
                    <Option key={index} value={states}>
                      {states}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="City"
                />
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Postal/Pin Code"
                />
              </div>
            </>
          )}
          {currStep === 3 && (
            <>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Organization Name"
                />
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Business Category"
                />
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Textarea
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Business Description"
                />
                <Textarea
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Office Address"
                />
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Website"
                />
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Google Map Link"
                />
              </div>
            </>
          )}
          {currStep === 4 && (
            <>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Facebook Link"
                />
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Instagram Link"
                />
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="LinkedIn Link"
                />
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Twitter Link"
                />
              </div>
            </>
          )}
          {currStep === 5 && (
            <>
              <div className={`px-20 xl2:px-4`}>
                <p className=" text-center mb-12">
                  Would you like to contribute in an active role and wish to
                  increase your visibility and recall value in any of these?
                  <br />
                  (You may choose more than 1 as per your interest and
                  expertise)
                </p>
                <ol className=" list-decimal font-medium">
                  <li>
                    Leadership
                    <div className=" flex items-center font-normal mb-8 ">
                      <p className=" flex items-center">
                        Leadership & Extended Leader Role with MSME DOST (These
                        roles need a few minutes of yours on a regular basis)
                      </p>
                      <Checkbox
                        ripple={false}
                        className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                      />
                    </div>
                  </li>
                  <li>
                    Committee
                    <div className=" flex flex-wrap font-normal mb-8">
                      <div className=" flex items-center mr-8  ">
                        Startup Committee
                        <Checkbox
                          ripple={false}
                          className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                        />
                      </div>
                      <div className=" flex items-center mr-8  ">
                        Women Empowerment Committee Skill
                        <Checkbox
                          ripple={false}
                          className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                        />
                      </div>
                      <div className=" flex items-center mr-8  ">
                        Development Committee
                        <Checkbox
                          ripple={false}
                          className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    Others
                    <div className=" flex flex-wrap font-normal mb-8">
                      <div className=" flex items-center mr-8  ">
                        Blood Donation Activity
                        <Checkbox
                          ripple={false}
                          className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                        />
                      </div>
                      <div className=" flex items-center mr-8  ">
                        Helping Senior Citizen
                        <Checkbox
                          ripple={false}
                          className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                        />
                      </div>
                      <div className=" flex items-center mr-8  ">
                        Donating Old Clothes
                        <Checkbox
                          ripple={false}
                          className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                        />
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </>
          )}
          {currStep === 6 && (
            <>
              <div className=" flex gap-4 lg2:flex-col">
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Years in Current Business"
                />
                <Input
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Current Business since"
                />
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Textarea
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Years in Current Business"
                />
                <Textarea
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Current Business since"
                />
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Textarea
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Major Brands"
                />
                <Textarea
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Major Achievement"
                />
              </div>
              <div className=" flex gap-4 lg2:flex-col">
                <Textarea
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Major Clientele"
                />
                <Textarea
                  style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                  label="Connected with any Trade Body"
                />
              </div>
              <Textarea
                style={{ borderTop: "1.5px solid rgba(54, 54, 54, 0.100)" }}
                label="Associated with any Business/ Social Networking Group"
              />
            </>
          )}
          {currStep === 7 && (
            <>
              <div className=" flex flex-col justify-center items-center gap-8">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="userImg"
                    className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 sm:h-36"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 px-6 sm:text-center">
                    {previewImg ? (
                          <div>
                            <img
                              className=" min-w-16 max-w-32 min-h-8 max-h-20 object-contain"
                              src={URL.createObjectURL(previewImg)}
                              alt=""
                            />
                          </div>
                        ) : (
                          <>
                          <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                        >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                          Click to upload{" "}
                          <span className=" text-green-600 underline">
                            Your Photo
                          </span>
                        </span>{" "}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG{" "}
                      </p>
                      </>
                        )}
                    </div>
                    <input id="userImg" type="file" className="hidden" onChange={handleUserPhotoChange}/>
                      
                  </label>
                </div>



                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="logo"
                    className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 sm:h-36"

                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 px-6 sm:text-center">
                    {previewLogo ? (
                          <div>
                            <img
                              className=" min-w-16 max-w-32 min-h-8 max-h-20 object-contain"
                              src={URL.createObjectURL(previewLogo)}
                              alt=""
                            />
                          </div>
                        ) : (
                          <>
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                          Click to upload{" "}
                          <span className=" text-green-600 underline">
                            Company Logo
                          </span>
                        </span>{" "}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG{" "}
                      </p>
                      </>
                      )}
                    </div>
                    <input id="logo" type="file" className="hidden" onChange={handleCompanyLogoChange}/>
                  </label>
                </div>
                <ReCAPTCHA
                  sitekey="6LdGVPkpAAAAAK_gm2lWwK1-YEdnxLljw_Ga_j_1"
                  // onChange={handleCaptchaChange}
                />
              </div>
            </>
          )}
          <div className=" w-full flex justify-center gap-4">
            <Button
              className={`${
                currStep > 1 && currStep <= 7 ? " static" : "hidden"
              }`}
              onClick={prevStep}
            >
              Back
            </Button>
            <Button onClick={nextStep}>
              {currStep < 7 ? "Next" : currStep === 7 ? "Submit" : ""}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
