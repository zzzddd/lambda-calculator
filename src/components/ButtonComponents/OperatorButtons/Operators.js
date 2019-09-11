import React, {useState} from "react";
import {operators,numbers} from '../../../data'
import OperatorButton from './OperatorButton'
// import NumberButton from "./NumberButtons";

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorsData, setOperators] = useState(operators)
  return (
    <div className="operators" >
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorsData.map(index => (
        <OperatorButton operator={index} />
      ))}
    </div>
  );
};

export default Operators
