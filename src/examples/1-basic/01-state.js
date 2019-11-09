import React, {useState} from 'react'

export default () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  
  console.log('render')
  return <div>
    <p>{count}</p>
    <p>{count1}</p>
    <button onClick={() => {
      setCount(x => x+1)
      setCount1(x => x+1)
    }}>+1</button>
  </div>
}