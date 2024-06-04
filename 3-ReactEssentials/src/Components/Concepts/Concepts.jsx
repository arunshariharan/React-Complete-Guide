import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import CoreConcepts from "../CoreConcepts/CoreConcepts";

export default function Concepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          // Here since the properties of CORE_CONCEPTS are the same as the function that accepts it,
          // we can use the spread operator to pass in props this way
          // Alternatively, you would pass in <CoreConcepts title="concept.title" image="" descriotion="" />
          <CoreConcepts key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
