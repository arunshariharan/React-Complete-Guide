import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts";
import TabButton from "./Components/TabButton/TabButton";

function App() {
  const handleSelect = () => {
    console.log("Handle Select clicked");
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              // Here since the properties of CORE_CONCEPTS are the same as the function that accepts it,
              // we can use the spread operator to pass in props this way
              // Alternatively, you would pass in <CoreConcepts title="concept.title" image="" descriotion="" />
              <CoreConcepts {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Children</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
          Dynamic content
        </section>
      </main>
    </div>
  );
}

export default App;
