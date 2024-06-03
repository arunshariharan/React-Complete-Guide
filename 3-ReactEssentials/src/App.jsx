import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

function Header() {
  const descriptor = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptor} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.imgSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              title="Concept 1"
              description="Main Concept"
              imgSrc={componentsImg}
            />
            <CoreConcepts
              title="Concept 2"
              description="Main Concept 2"
              imgSrc={componentsImg}
            />

            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
