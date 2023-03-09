
import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <h1>приветствие {name}</h1>
      <Hello name="Arsen" />
      <Hello name="Kenan" />
      <Hello name="Beka" />
    </div>
  );
}

export default App;
