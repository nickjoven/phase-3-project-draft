import PlayerProvider from "./components/PlayerProvider";
import MiniSequencer from "./components/MiniSequencer";
function App() {
  return (
    <PlayerProvider>
      {({ player }) => {
        if (!player) {
          return <p>loading...</p>
        }
        return (
          <div className="App">
            <h2>NavBar</h2>
            <MiniSequencer player={player} />
          </div>
        )
      }}
    </PlayerProvider>
  );
}

export default App;
