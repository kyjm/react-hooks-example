import React, {useState, useEffect} from 'react'


export default () => {

  const [count, setCount] = useState(0)

  useEffect( () => {
    setTimeout(() => {
      setCount(x => x + 1)
    }, 1000)
  })

  return <div>
    <p>{count}</p>
  </div>

}

