import React, { useState } from "react";
import "./info.css";
import SubmitButton from "./buttons/SubmitButton";
import EditButton from "./buttons/EditButton";
import Input from "./buttons/Input";

const Info = ({ info, setInfo }) => {
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
      <h2 className="container-title">General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Input
            value={info.fullName}
            label="Full Name"
            handleChange={(value) => setInfo({ ...info, fullName: value })}
          />
          <Input
            value={info.email}
            label="Email"
            handleChange={(value) => setInfo({ ...info, email: value })}
          />
          <Input
            value={info.phone}
            label="Phone"
            handleChange={(value) => setInfo({ ...info, phone: value })}
          />
          <SubmitButton />
        </form>
      ) : (
        <div>
          <div>Full Name: {info.fullName}</div>
          <div>Email: {info.email}</div>
          <div>Phone: {info.phone}</div>
          <EditButton onClick={handleEdit} />
        </div>
      )}
    </section>
  );
};

export default Info;
