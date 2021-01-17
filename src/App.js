import logo from './logo.svg';
import './App.css';

function App(props) {

  
  return (
    <div className="App">
     <h1>Redux</h1>
     <button onClick={()=>props.LoginAction("Hello")}>Click ME</button>
      
    </div>
  );
}

export default App;
