import { useState } from "react";
import MainButton from "../buttons/MainButton";
import InputField from "./InputField";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITT!!");
  };

  return (
    <form className="flex justify-center gap-4" onSubmit={handleSubmit}>
      <InputField
        title="First Name"
        isRequired
        value={firstName}
        onChange={setFirstName}
      />

      <InputField
        title="Last Name"
        isRequired
        value={lastName}
        onChange={setLastName}
      />

      <MainButton title="Add Person" />
    </form>
  );
};

export default PersonForm;
