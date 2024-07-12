import "./App.css";
import Info from "./components/info.js";
import Education from "./components/education.js";
import Resume from "./components/resume.js";
import React, { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
  });

  return (
    <div className="cv-wrapper">
      <div className="sidebar">
        <div className="name-wrapper">
          <Info info={info} setInfo={setInfo} />
        </div>
        <div className="education-wrapper">
          <Education education={education} setEducation={setEducation} />
        </div>
      </div>
      <div className="resume-wrapper">
        <Resume info={info} education={education} />
      </div>
    </div>
  );
}

export default App;
