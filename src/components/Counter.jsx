// import React, { useEffect } from 'react';
// const Counter = ({ stock, initial, handleButton, count, setCount }) => {
//     useEffect(() => {
//     //   handleButton(count);
//     }, [count]);
  
//     const addToAmount = () => {
//       count < stock && setCount(count + 1);
//     };
  
//     const removeToAmount = () => {
//       count > initial && setCount(count - 1);
//     };
  
//     return (
//       <div>
//         <button onClick={removeToAmount}>
//           -
//         </button>
//         <p>{count}</p>
//         <button onClick={addToAmount}>
//           +
//         </button>
//       </div>
//     );
//   };
  
//   export default Counter;




import React from "react";

function Counter({count, setCount, stock, initial}) {

    console.log('el stock es: ' + stock)
    //Funcion suma
    const addCount = () => {
        if(count<stock) (
        setCount(count + 1))
    };

    //funcion resta
    const substractCount = () => {
        if(count>initial) (
        setCount(count - 1))
    };

    

    return (
        <div>            
            <h4>{count}</h4>
            <div>
                <button onClick={substractCount}>-</button>
                <button onClick={addCount}>+</button>
            </div>
        </div>
    )
}

export default Counter;
