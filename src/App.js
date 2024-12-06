import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CustomNavbar from './navbar/navbar';
import './App.css';

function App() {


  return (
    <div className="App">
      <CustomNavbar />
      
      <Work name="Home"/>

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
