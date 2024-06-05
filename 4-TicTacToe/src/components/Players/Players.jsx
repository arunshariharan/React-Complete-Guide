export default function Players({ players }) {
  return (
    <ol id="players">
      {players.map((player) => (
        <li>
          <span className="player">
            <span className="player-name">{player.name}</span>
            <span className="player-symbol">{player.symbol}</span>
          </span>
          <button>Edit</button>
        </li>
      ))}
    </ol>
  );
}
