
import React, { useState } from "react";
import './../styles/App.css';
import Component1 from "../Component/Component1";
import Component2 from "../Component/Component2";

const App = () => {

  const [selectedOption , setSelectedOption] = useState(false)


  return (
    <div className="parent"
      style={{
        backgroundColor : "green",
        padding : "10px"
      }}
    >

      <h1>Parent Component</h1>
      <Component1 
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Component2 
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <p>Selected Option: {selectedOption == 1 ?'Option 1' : selectedOption == 2 ? 'Option 2' : ''}</p>
     
    </div>
  )
}

export default App
