import React, {useState} from 'react'


export default () => {

  const [count, setCount] = useState(0)

  return <div>
    <p>{count}</p>
    <button onClick={() => setCount(x => x + 1)}>
      +1
    </button>
  </div>

}

