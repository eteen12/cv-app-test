import React, { useState } from "react";

const Education = () => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `School: ${school}, Degree: ${degree}, Start Date: ${startDate}, End Date: ${endDate}`
    );
    setIsEditing(false);
  };

  return (
    <section className="container">
      <h2 className="container-title">Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>School Name</label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label>Degree</label>
            <input
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <div>School Name: {school}</div>
          <div>Degree: {degree}</div>
          <div>Start Date: {startDate}</div>
          <div>End Date: {endDate}</div>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
};
export default Education;
