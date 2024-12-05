import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <h1>Count : {count}</h1>

      <button onClick={() => {
        setCount(count + 1);
      }} >Increase</button>

      <Work  name = {count}/>

    </div>
  );
}


function Work(props) {
  return (
    <div>

      <h2>This is the {props.name} function</h2>


    </div>
  )
}


export default App;
