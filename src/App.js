import "./App.css";
import React from "react";
import Cards from "./Components/Cards";


const numarray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

function isprime(number) {
  if (number===0||number===1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const Numbers = ({ array }) => {
  const list = array.map((ele) => {
    if (isprime(ele)) {
      return <Cards  num={ele} color="#fd5e53"/>;
    } else {
      if (ele % 2 === 0) {
        return <Cards  num={ele} color="#21bf73"/>;
      } else {
        return <Cards  num={ele} color="#fddb3a"/>;
      }
    }
  });
  return list;
};

function App() {
  return (
    <div className="container">
      <div className="heading">
      
      <h1>30 Days of React</h1>
      <h2>Number generator</h2>
      </div>
      <div className="cardscontainer">
          <Numbers array={numarray} />
      </div>
      
      
    </div>
  );
}

export default App;