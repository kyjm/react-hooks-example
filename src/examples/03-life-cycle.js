import React, {useState, useEffect} from 'react'
import { range } from 'rxjs'

const Greetings = (props) => {

  const [times, setTimes] = useState(0)

  useEffect( () => {
    setTimes(times => props.times)
  }, [times])

  const arr = [...new Array(times)]
  return <div>
    {arr.map((_, i) => {
      return <p key={i}>Greetings</p>
    })}
  </div>

}

export default () => {
  const [count, setCount] = useState(0) 

  // component did mount
  useEffect( () => {
    setCount(x => x + 1)
    return () => {
      // component will unmount
      console.log('unmount')
    }
  }, [])


  return <div>
    <p>{count}</p>
    <button onClick={() => setCount(x => x + 1)}>+1</button>
    <Greetings times={count} />
  </div>

}

