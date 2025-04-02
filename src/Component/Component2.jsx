import React from 'react'

const Component2 = ({setSelectedOption}) => {
  return (
    <div 
        
    style={{
        backgroundColor : "yellow",
        padding : "10px"
      }}
    >
      <h2>Child Component 1</h2>
      <button onClick={()=>setSelectedOption(2)}>Option 2</button>
    </div>
  )
}

export default Component2
