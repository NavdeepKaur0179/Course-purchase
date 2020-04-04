import React,{Component} from 'react';
import logo from './logo.svg';
import Coursesale from './Coursesale';
import './App.css';

class App extends Component {  
  render()
  {
    var courses=[
      {name:'Complete course Ios',price:150},
      {name:'Complete Course Android',price:120},
      {name:'Complete Javascript course',price:100},
      {name:'Complete React courses',price:200},
    ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is a Course Purchase App
        </p>          
      </header>
      <Coursesale items={courses}/>   
    </div>
  );
}
}
export default App;
