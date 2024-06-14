import React from "react";

const greet=props=>{ 
// console.log(name)
const {name,heroName} = props    
 return (
    <div>
        <h3>Hello {name} a.k.a{heroName}</h3>
        
    </div>
 )
}
export default greet