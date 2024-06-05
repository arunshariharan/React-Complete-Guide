import { useState } from "react";

export default function Players({ player }) {
  const [isEditing, setIsEditing] = useState(false);

  console.log(player);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{player.name}</span>
        ) : (
          <input
            type="text"
            className="player input"
            name="Player name"
            required
          />
        )}
        <span className="player-symbol">{player.symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
