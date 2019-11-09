import React, {useLayoutEffect, useEffect, useState} from 'react'

export default () => {

  const [count, setCount] = useState(0)

  useEffect( () =>{
    console.log(`effect:` + new Date().getTime())
  }, [count])

  useLayoutEffect( () => {
    console.log(`layout:` + new Date().getTime())
  }, [count])

  useEffect( () => {
    const I = setInterval( () => {
      setCount(x => x + 1)
    }, 1000)

    return ()=> {
      clearInterval(I)
    }
  }, [])

  return <div>{count}</div>
}