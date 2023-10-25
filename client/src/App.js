import Header from "./components/layout/Header";
import Records from "./components/list/Records";

export default function App() {
  return (
    <>
      <div className="mx-auto max-w-[1024px] min-h-screen p-4">
        <Header />

        <main className=" flex flex-col gap-4">
          <h2>Add Person</h2>

          <Records />
        </main>
      </div>
    </>
  );
}
