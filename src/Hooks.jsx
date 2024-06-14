import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Header from "./components/Header1";

// export default function Hooks() {
//   const [color, setColor] = useState("Red");

//   const changeColor = () => {
//     setColor("Blue");
//   };
//   return (
//     <>
//       <h1>My favourite color {color}</h1>
//       <button onClick={changeColor}>Blue</button>
//     </>
//   );
// }

// export default function Hooks() {
//   const [car,setCar] = useState({
//     car : "Lamborgini",
//     model : "Vitel",
//     year : "2023",
//     color : "Green"
//   })

//   const changeColor = ()=>{
//     setCar((prev)=>{
//       return {...prev,color:"Blue"}
//     })
//   }

//   return (
//     <>
//       <h1>My {car.car}</h1>
//       <h2>It is a {car.color} {car.model } from {car.year}</h2>
//       <button onClick={changeColor}>Blue</button>

//     </>
//   );
// }

// export default function Hooks() {
//     const [count,setCount] = useState(0)

//     const increaseCount = ()=>{
//       setCount(count=>count+4)

//     }

//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <button onClick={increaseCount}>increase</button>
//     </>
//   );
// }

// export default function Hooks() {
//   const [count ,setCount] = useState(0)
//   const [name ,setName] = useState("aadil")

//   useEffect(()=>{
//     setTimeout(() => {
//       setCount(count=> count+1)
//     }, 1000);
//   },[count,name])

//   return (
//     <>
//       <h1>I have renderd {count} times </h1>
//     </>
//   )
// }



// export default function Hooks() {
//   const [value, setValue] = useState(0);
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <button
//         onClick={() => {
//           setValue((count) => count + 1);
//         }}
//       >
//         +1
//       </button>
//       <h1>{value}</h1>
//       <button
//         onClick={() => {
//           setValue((count) => count - 1);
//         }}
//       >
//         -1
//       </button>
//       <h1>Render Count : {count.current}</h1>
//     </>
//   );
// }

  


// export default function Hooks() {
  
//   const inputElem = useRef()
//   const btnClicked = ()=>{
//     console.log(inputElem.current);
//     inputElem.current.style.background = "blue"
//   }
//   return (
//     <>
//       <input type="text"  ref={inputElem} />
//       <button onClick={btnClicked}>Click here</button>
//     </>
//   )
// }




// export default function Hooks() {
//   const [number,setNumber] = useState(0)
//   const [counter,setCounter] = useState(0)

//   function cubeNumber(num) {
//     console.log("calculation done !");
//     return Math.pow(num,3)
//   }
//   const result = cubeNumber(number)

//   return (
//     <>
//       <input type="number"  value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
//       <h1>Cube of NUmber is :{result}</h1>
//       <button onClick={()=>{setCounter(counter+1)}}>COUNTER ++</button>
//       <h1>COunter is :{counter}</h1>
//     </>
//   )
// }




export default function Hooks() {

    const [count,setCount] = useState(0)
    const newFn = useCallback(()=> {},[])

  return (
    <>
      <Header newFn={newFn} />
        <h1>Count is : {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          click here
        </button>
      
    </>
  );
}
