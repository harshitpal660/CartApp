import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Harshit"
  const loggedin = false;
  // if(load){
  //   return <h1>Loading...</h1>
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Hello {loggedin ? name : "World"}  */}
          {loggedin && <p>Hello {name}</p>}
          {!loggedin && <p>Hello World</p>}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
