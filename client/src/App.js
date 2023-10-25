import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import CarForm from "./components/forms/CarForm";
import PersonForm from "./components/forms/PersonForm";
import Header from "./components/layout/Header";
import Records from "./components/list/Records";
import { ADD_PERSON, GET_PEOPLE } from "./graphql/queries";

export default function App() {
  const [addPerson] = useMutation(ADD_PERSON);

  const handleAddPerson = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      addPerson({
        variables: {
          id: uuidv4(),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
        },
        update: (cache, { data: { addPerson } }) => {
          const data = cache.readQuery({ query: GET_PEOPLE });

          //Optimistically Add Person to People Property
          cache.writeQuery({
            query: GET_PEOPLE,
            data: {
              ...data,
              people: [...data.people, addPerson],
            },
          });
        },
      });

      e.target.reset();
    } catch (error) {
      alert("Failed to add person");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-[1200px] min-h-screen p-4">
        <Header />

        <main className=" flex flex-col gap-4">
          <section className="py-4 mt-4">
            <h2 className="text-center font-semibold uppercase my-4">
              Add Person
            </h2>

            <PersonForm onSubmit={handleAddPerson} />
          </section>

          <section className="py-4 mb-8">
            <h2 className="text-center font-semibold uppercase my-4">
              Add Car
            </h2>
            <CarForm />
          </section>

          <Records />
        </main>
      </div>
    </>
  );
}
