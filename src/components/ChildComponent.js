import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() =>props.greetHandler("childrens")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
