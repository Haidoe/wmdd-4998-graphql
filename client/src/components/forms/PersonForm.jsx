import MainButton from "../buttons/MainButton";
import InputField from "./InputField";

const PersonForm = ({ onSubmit }) => {
  return (
    <form className="flex justify-center gap-4" onSubmit={onSubmit}>
      <InputField title="First Name" isRequired name="firstName" />

      <InputField title="Last Name" isRequired name="lastName" />

      <MainButton title="Add Person" />
    </form>
  );
};

export default PersonForm;
