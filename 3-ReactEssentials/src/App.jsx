import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

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

// Here the function params are destructred to take in only required params
// Alternatively, you could just get "props" and then do props.image etc inside the function
function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{description}</h3>
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
            {CORE_CONCEPTS.map((concept) => (
              // Here since the properties of CORE_CONCEPTS are the same as the function that accepts it, 
              // we can use the spread operator to pass in props this way  
              // Alternatively, you would pass in <CoreConcepts title="concept.title" image="" descriotion="" />          
              <CoreConcepts {...concept} /> 
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
