import CarForm from "./components/forms/CarForm";
import PersonForm from "./components/forms/PersonForm";
import Header from "./components/layout/Header";
import Records from "./components/list/Records";

export default function App() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] min-h-screen p-4">
        <Header />

        <main className=" flex flex-col gap-4">
          <section className="py-4">
            <h2 className="text-center font-semibold uppercase my-4">
              Add Person
            </h2>
            <PersonForm />
          </section>

          <section className="py-4">
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
