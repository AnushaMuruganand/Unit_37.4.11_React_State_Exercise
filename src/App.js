import './App.css';
import EightBall from './EightBall';
import answers from './answers';
import BoxesContainer from "./BoxesContainer";

function App() {
  return (
    <div className="App">
      <h1>Eight Ball</h1>
      <EightBall answers={answers} />
      <br/>
      <h1>Color Boxes</h1>
      <BoxesContainer />
      <br/>
    </div>
      
  );
}

export default App;
