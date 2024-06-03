import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./Components/Header/Header";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts";
import TabButton from "./Components/TabButton/TabButton";
import Examples from "./Components/Examples/Examples";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(
    <Examples {...EXAMPLES.components} />
  );

  const [selectedTab, setSelectedTab] = useState("components");

  const handleSelect = (selectedButton) => {
    setSelectedTopic(<Examples {...EXAMPLES[selectedButton]} />);
    setSelectedTab(selectedButton);
  };

  const setTopic = (topic, tab) => {};

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
            <TabButton
              isSelected={selectedTab === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          <section id="examples">{selectedTopic}</section>
        </section>
      </main>
    </div>
  );
}

export default App;
