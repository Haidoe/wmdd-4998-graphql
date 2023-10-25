import { useState } from "react";
import MainButton from "../buttons/MainButton";
import InputField from "./InputField";
import PersonSelectField from "./PersonSelectField";

const CarForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITT!!");
  };

  return (
    <form className="flex justify-center gap-4" onSubmit={handleSubmit}>
      <InputField
        title="Year"
        isRequired
        value={firstName}
        onChange={setFirstName}
      />

      <InputField
        title="Make"
        isRequired
        value={lastName}
        onChange={setLastName}
      />

      <InputField
        title="Model"
        isRequired
        value={lastName}
        onChange={setLastName}
      />

      <InputField
        title="Price"
        isRequired
        value={lastName}
        onChange={setLastName}
      />

      <PersonSelectField />

      <MainButton title="Add Car" />
    </form>
  );
};

export default CarForm;
