import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student: string = 'Jeff';
let age: number = 10;
let isSmart: boolean = true;

let students: string[] = ['saimon', 'monirul'];
let fees: number[] = [12, 34, 56, 66];

interface Person {
  name: string;
  job: string;
  age?: number;
  location?: string | number,
}

const person: Person = {
  name: "Bill Clinton",
  job: 'Jobless',
  // age: 22,
  location: 55
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
