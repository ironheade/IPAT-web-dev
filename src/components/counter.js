import { Button } from '@mantine/core';
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
        <h1>Zähler</h1>
        <h3>{count}</h3>
        <Button onClick={() => increaseCount()}>+1</Button>
        <Button onClick={() => decreaseCount()}>-1</Button>

      </div>
    );
  }
  
  export default Counter;