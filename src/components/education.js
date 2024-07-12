import React, { useState } from "react";

const Education = ({ education, setEducation }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
              value={education.school}
              onChange={(e) =>
                setEducation({ ...education, school: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label>Degree</label>
            <input
              type="text"
              value={education.degree}
              onChange={(e) =>
                setEducation({ ...education, degree: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label>Start Date</label>
            <input
              type="date"
              value={education.startDate}
              onChange={(e) =>
                setEducation({ ...education, startDate: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label>End Date</label>
            <input
              type="date"
              value={education.endDate}
              onChange={(e) =>
                setEducation({ ...education, endDate: e.target.value })
              }
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <div>School Name: {education.school}</div>
          <div>Degree: {education.degree}</div>
          <div>Start Date: {education.startDate}</div>
          <div>End Date: {education.endDate}</div>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
};

export default Education;
