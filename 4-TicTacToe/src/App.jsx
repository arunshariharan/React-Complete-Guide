import Players from "./components/Players/Players";

function App() {
  const players = [
    {
      name: "Player 1",
      symbol: "X",
    },
    {
      name: "Player 2",
      symbol: "O",
    },
  ];
  return (
    <main>
      <div id="game-container">
        <Players players={players} />
      </div>
    </main>
  );
}

export default App;
