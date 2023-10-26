import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { useQuery } from "@apollo/client";
import { GET_CARS_OF_PERSON_BY_ID } from "../../graphql/queries";
import { Link } from "react-router-dom";

const PersonCard = ({ id, firstName, lastName }) => {
  const { loading, error, data } = useQuery(GET_CARS_OF_PERSON_BY_ID, {
    variables: { id: id },
  });

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <div className="p-4 border-2">
      <header className="flex justify-between">
        <h3>
          {firstName} {lastName}
        </h3>

        <div className="flex gap-4 items-center">
          <Link to={`/person/${id}`}>
            <button className="uppercase text-blue-500">Learn More</button>
          </Link>

          <button>
            <FaPenToSquare />
          </button>

          <button>
            <FaTrashCan />
          </button>
        </div>
      </header>

      <div className="content p-4 mt-4">
        {data.carsOfPersonId.map((car) => (
          <div key={car.id} className="flex justify-between items-center">
            <p>
              {car.year} {car.make} {car.model} {"->"} $
              {car.price.toLocaleString()}
            </p>

            <div className="flex gap-4">
              <button className="text-gray-500">
                <FaPenToSquare />
              </button>

              <button className="text-red-500">
                <FaTrashCan />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonCard;
