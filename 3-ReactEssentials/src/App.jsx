import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts";
import TabButton from "./Components/TabButton/TabButton";

function App() {
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
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Children</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
