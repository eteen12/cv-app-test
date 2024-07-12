import React from "react";

const Resume = ({ info, education }) => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div>
        <h3>General Information</h3>
        <p>Full Name: {info.fullName}</p>
        <p>Email: {info.email}</p>
        <p>Phone: {info.phone}</p>
      </div>
      <div>
        <h3>Education</h3>
        <p>School Name: {education.school}</p>
        <p>Degree: {education.degree}</p>
        <p>Start Date: {education.startDate}</p>
        <p>End Date: {education.endDate}</p>
      </div>
    </section>
  );
};

export default Resume;
