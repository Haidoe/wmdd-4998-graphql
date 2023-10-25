import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "../../graphql/queries";

const Records = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <section>
      <h2>Records</h2>

      <ul>
        {data.people.map((person) => (
          <li key={person.id}>
            {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Records;
