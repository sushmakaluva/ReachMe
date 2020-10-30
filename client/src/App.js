import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    renderedResponse: ""
  }


  getResponse = async() => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error (body.message);
    return body
  };


componentDidMount () {
  this.getResponse()
  .then(res => {
    const someData = res;
    this.setState ({ renderedResponse: someData});
  })
}

render() {
  const { renderedResponse } = this.state;
}

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
