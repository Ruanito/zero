import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date().getTime() - new Date("October 30, 2020").getTime(); 
  
  const zero = Math.floor(date / (1000 * 60 * 60 * 24));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estamos a {zero} dias sem ninguém pedir demissão.
        </p>
        <p>
          Nosso recorde é {zero} dias.
        </p>
      </header>
    </div>
  );
}

export default App;
