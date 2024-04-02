import React, { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='counter-container'>
      <div className='row1'>{count}</div>
      <div className='row2'>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter