import React from "react"

function Counter({count, setCount, initial, stock}) {

    const increaseCount = () => {
      count < stock && setCount(count + 1)
    }
  
    const decreaseCount = () => {
      count > initial && setCount(count - 1)
    }
    return (
        <div className="columns py-4">   
          <div className="column">
            <button onClick={decreaseCount} className="button">-</button>
          </div>  
          <div className="column">
            <p>{count}</p>  
          </div>  
          <div className="column">
            <button onClick={increaseCount} className="button">+</button>  
          </div>         
        </div>
    )
}

export default Counter