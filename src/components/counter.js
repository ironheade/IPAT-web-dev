import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)
  
    function increaseCount () {
      setCount(count+1)
    }
  
    function decreaseCount () {
      setCount(count-1)
    }
  
    return (
      <div>
        <h3>{count}</h3>
        <button onClick={() => increaseCount()}>+1</button>
        <button onClick={() => decreaseCount()}>-1</button>

      </div>
    );
  }
  
  export default Counter;