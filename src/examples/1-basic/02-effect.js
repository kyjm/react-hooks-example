import React, {useState, useEffect} from 'react'


export default () => {

  const [count, setCount] = useState(0)

  useEffect( () => {
    const I = setTimeout(() => {
       setCount(x => x + 1)
    }, 1000)
    return () => {
      clearTimeout(I)
    }
  }, [Math.min(count, 4)])

  return <div>
    <p>{count}</p>
  </div>

}

