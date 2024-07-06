import React, { useState } from "react";
import "./info.css";
import SubmitButton from "./buttons/SubmitButton";
import EditButton from "./buttons/EditButton";
import Input from "./buttons/Input";

const Info = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Full Name: ${fullName}, Email: ${email}, Phone: ${phone}`);
    setIsEditing(false);
  };

  return (
    <section className="container">
      <h2 className="container-title">General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Input
            value={fullName}
            label="Full Name"
            handleChange={setFullName}
          />
          <Input value={email} label="Email" handleChange={setEmail} />
          <Input value={phone} label="phone" handleChange={setPhone} />
          <SubmitButton />
        </form>
      ) : (
        <div>
          <div>Full Name: {fullName}</div>
          <div>Email: {email}</div>
          <div>Phone: {phone}</div>
          <EditButton onClick={handleEdit} />
        </div>
      )}
    </section>
  );
};
export default Info;
