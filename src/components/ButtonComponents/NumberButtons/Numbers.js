import React, {useState} from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton'
const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersData] = useState(numbers)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbersData.map( index => <NumberButton number={index} /> )}
    </div>
  );
};

export default Numbers
