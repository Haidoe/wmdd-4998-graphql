import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_CARS_OF_PERSON_BY_ID,
  GET_PEOPLE,
  REMOVE_PERSON,
} from "../../graphql/queries";
import { Link } from "react-router-dom";
import IconButton from "../buttons/IconButton";

const PersonCard = ({ id, firstName, lastName }) => {
  const [removePerson] = useMutation(REMOVE_PERSON, {
    update: (cache, { data: { removePerson } }) => {
      const data = cache.readQuery({ query: GET_PEOPLE });

      //Optimistically Removed Person to People Property
      const people = data.people.filter(
        (person) => person.id !== removePerson.id
      );

      cache.writeQuery({
        query: GET_PEOPLE,
        data: { people },
      });
    },
  });

  const { loading, error, data } = useQuery(GET_CARS_OF_PERSON_BY_ID, {
    variables: { id: id },
  });

  const handleRemovePerson = () => {
    let result = window.confirm("Are you sure you want to delete this person?");

    if (result) {
      removePerson({
        variables: { id: id },
      });
    }
  };

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <div className="p-4 border-2">
      <header className="flex justify-between">
        <h3>
          {firstName} {lastName}
        </h3>

        <div className="flex gap-2 items-center">
          <Link to={`/person/${id}`}>
            <button className="uppercase text-blue-500">Learn More</button>
          </Link>

          <IconButton className="hover:text-gray-500">
            <FaPenToSquare />
          </IconButton>

          <IconButton
            className="hover:text-red-500"
            onClick={handleRemovePerson}
          >
            <FaTrashCan />
          </IconButton>
        </div>
      </header>

      {data.carsOfPersonId.length > 0 ? (
        <div className="content p-4 mt-4">
          {data.carsOfPersonId.map((car) => (
            <div
              key={car.id}
              className="flex justify-between items-center hover:bg-gray-200 rounded-sm px-4 py-2"
            >
              <p>
                {car.year} {car.make} {car.model} {"->"} $
                {car.price.toLocaleString()}
              </p>

              <div className="flex gap-2">
                <IconButton className="hover:text-gray-500">
                  <FaPenToSquare />
                </IconButton>

                <IconButton className="hover:text-red-500">
                  <FaTrashCan />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PersonCard;
