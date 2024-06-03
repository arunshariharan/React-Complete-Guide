import "./CoreConcepts.css";


// Here the function params are destructred to take in only required params
// Alternatively, you could just get "props" and then do props.image etc inside the function
export default function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{description}</h3>
    </li>
  );
}
