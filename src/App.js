//The code written inside this file is JavaScript(the file name is .js)

import './App.css';

/*function App() {
  return (
    //jsx start 
    //Only one element can be returned.Here it is "App".     <>... </>  use it for using the tag(<h1>,<p>) before App content. 
     <div classNameName="App">    
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
         <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
          <a
            classNameName="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>  //jsx start 
  );
}*/

import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   
      <>
  
      <Navbar title="TextUtils" about="about us"/>
      <div className="container">
        <TextForm/> 
      </div>
   
      </>
    
  )
}


export default App;
