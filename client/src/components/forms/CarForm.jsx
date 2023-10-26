import MainButton from "../buttons/MainButton";
import InputField from "../inputs/InputField";
import SelectField from "../inputs/SelectField";

const CarForm = ({ people, onSubmit }) => {
  return (
    <form className="flex justify-center gap-4" onSubmit={onSubmit}>
      <InputField title="Year" isRequired name="year" />

      <InputField title="Make" isRequired name="make" />

      <InputField title="Model" isRequired name="model" />

      <InputField title="Price" isRequired name="price" />

      <SelectField
        list={people.people}
        title="Person"
        placeholder="Select a person"
        isRequired
        name="personId"
      />

      <MainButton title="Add Car" />
    </form>
  );
};

export default CarForm;
