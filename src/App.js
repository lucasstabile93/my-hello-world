import logo from './logo.svg';
// import Hello from './Hello';
import './App.css';
// import Counter from './Counter';
import Mensagem from './Mensagem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite o arquivo <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
        <Mensagem/>
        {/* <Hello />
        <Counter/> */}
      </header>
    </div>
  );
}

export default App;
