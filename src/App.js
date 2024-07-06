import "./App.css";
import Info from "./components/info.js";
import Education from "./components/education.js";

function App() {
  return (
    <div className="cv-wrapper">
      <div className="sidebar">
        <div className="name-wrapper">
          <Info />
        </div>
        <div className="education-wrapper"><Education /></div>
      </div>
      <div className="resume-wrapper">Resume</div>
    </div>
  );
}

export default App;
