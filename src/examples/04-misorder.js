import React, {useState, useEffect} from 'react'

const Greetings = () => {
  return <p>Hello</p>
}

export default () => {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState(false)

  // 错误:递归
  // if(count > 1) {
  //   setDisplay(x => true)
  // }

  // render more hooks than previous render
  // if (count > 1) {
  //   useEffect(() => {
  //     setDisplay(x => true)
  //   }, [])
  // } else {
  //   useEffect(() => {
  //     setDisplay(x => false)
  //   }, [])
  // }

  // useEffect( () => {
  //   if(count > 1) {
  //     setDisplay(x => true)
  //   }
  // }, [count > 1])

  return <div>
    <p>{count}</p>
    <button onClick={() => setCount(x => x + 1)}>+1</button>
    {display && <Greetings />}
  </div>

}

