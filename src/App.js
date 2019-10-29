import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentList from './StudentList.jsx'

const studentList = [
  {id:1,name:'John Doe',grade:1, school:'React Redux School'},
  {id:2,name:'Jane Doe',grade:2, school:'React Redux School'},
  {id:3,name:'Terry Adams',grade:3, school:'React Redux School'},
  {id:4,name:'Jerry Smith',grade:4, school:'React Redux School'},
];

if(localStorage.getItem("students")===null){
  localStorage.setItem("students",JSON.stringify(studentList));
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
