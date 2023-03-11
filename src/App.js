
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Header />
      <Hello name="Arsen" age="25" />
      <Hello name="Kenan" age="24"/>
      <Hello name="Beka" age="22"/>
      <Footer />
    </div>
    
  );
}

export default App;

