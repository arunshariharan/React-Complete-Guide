import Players from "./components/Players/Players";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players player={{ name: "Player 1", symbol: "X" }} />
          <Players player={{ name: "Player 2", symbol: "O" }} />
        </ol>
      </div>
    </main>
  );
}

export default App;
