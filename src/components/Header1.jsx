import React from 'react'

const Header1 = () => {
   console.log("headeer Renderd");
   return (
     <div>
       <h2>Header</h2>
     </div>
   );
}

export default   React.memo(Header1)

