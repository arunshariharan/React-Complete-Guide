import { Children } from "react";

export default function TabButton({children}) {
  const handleClick = () => {
    console.log("Clicked");
  }
  
  return (
    <li>
      <button onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}