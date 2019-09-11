import React,{useState} from "react";
import {Numbers} from "../../../data"
import NumberButton from "./NumberButton"
//import any components needed
import "./NumberButton"
//Import your array data to from the provided data file
import data from data
const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersData, setNumbers] = useState(numbers)  
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
                {numbersData.map( number => <NumberButton number={number} 
                displayNumber={props.displayNumber} /> )}

    </div>
  );
};
export default Numbers

