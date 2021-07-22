import Lottery from './Lottery'

function App() {
  return (
    <div className="App" >
      <Lottery 
        title="Lotto"
        maxBalls={6}
        maxNumber={40}
      />
      <Lottery 
        title="Mini Lotto"
        maxBalls={4}
        maxNumber={10}
      />
    </div>
  );
}

export default App;
