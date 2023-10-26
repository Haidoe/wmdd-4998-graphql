import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import IconButton from "../buttons/IconButton";
import { useMutation } from "@apollo/client";
import {
  GET_CARS_OF_PERSON_BY_ID,
  REMOVE_PERSONS_CAR,
} from "../../graphql/queries";

const CarCard = ({ id, year, model, make, price, personId }) => {
  const [removeCar] = useMutation(REMOVE_PERSONS_CAR);

  const handleRemovePerson = () => {
    let result = window.confirm("Are you sure you want to delete this car?");

    if (result) {
      removeCar({
        variables: { id: id },
        update: (cache, { data: { addCar } }) => {
          const data = cache.readQuery({
            query: GET_CARS_OF_PERSON_BY_ID,
            variables: { id: personId },
          });

          //Optimistically Add Car to Cars Property
          cache.writeQuery({
            query: GET_CARS_OF_PERSON_BY_ID,
            variables: { id: personId },
            data: {
              ...data,
              carsOfPersonId: [
                ...data.carsOfPersonId.filter((car) => car.id !== id),
              ],
            },
          });
        },
      });
    }
  };

  return (
    <div className="flex justify-between items-center hover:bg-gray-200 rounded-sm px-4 py-2">
      <p>
        {year} {make} {model} {"->"} ${price.toLocaleString()}
      </p>

      <div className="flex gap-2">
        <IconButton className="hover:text-gray-500">
          <FaPenToSquare />
        </IconButton>

        <IconButton className="hover:text-red-500" onClick={handleRemovePerson}>
          <FaTrashCan />
        </IconButton>
      </div>
    </div>
  );
};

export default CarCard;
