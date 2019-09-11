import React,{ useState }from "react";
import "./App.css";
// import "./data";
// import "./components/ButtonComponents";
// import "./components/DisplayComponents";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Display from "./components/DisplayComponents/Display"
import Numbers from "./components/ButtonComponents/NumberButtons/NumberButton"
import Operators from "./components/ButtonComponents/OperatorButtons/OperatorButton"
import Specials from "./components/ButtonComponents/SpecialButtons/SpecialButton"
// Logo has already been provided for you. Do the same for the remaining components
 import Logo from "./components/DisplayComponents/Logo"
// import display from"./components/DisplayComponents/Display"

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
 const [display, setDisplay] = useState(0)
  const displayNumber = (data) => {
      setDisplay(display + data)
  }
  return (
    <div className="container">
      <div className="App">
        <Logo />
        <Display display={display}/>
        <div className="AllButtons">
          <div className="SpecialsAndNumbers">
            <Specials />
            <Numbers displayNumber={displayNumber} />
          </div>
          <Operators />
        </div>
      </div>
    </div>
  );
}

export default App;
