import React from 'react'

const Component1 = ({
    setSelectedOption
}) => {
  return (
    <div 
    style={{
        backgroundColor : "red",
        padding : "10px"
      }}
    >
      <h2>Child Component 1</h2>
      <button onClick={()=>setSelectedOption(1)}>Option 1</button>
    </div>
  )
}

export default Component1
