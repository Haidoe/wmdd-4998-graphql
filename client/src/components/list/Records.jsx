import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "../../graphql/queries";
import PersonCard from "../listItem/PersonCard";

const Records = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <section>
      <h2 className="text-center font-semibold uppercase mb-4">Records</h2>

      <div className="flex flex-col gap-4">
        {data.people.map((person) => (
          <PersonCard
            key={person.id}
            id={person.id}
            firstName={person.firstName}
            lastName={person.lastName}
          />
        ))}
      </div>
    </section>
  );
};

export default Records;
