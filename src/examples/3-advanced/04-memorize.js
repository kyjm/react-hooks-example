import React, {useState, useCallback, useMemo } from 'react'

// const List = (props) => {
//   return <div>
//     {props.list.map( (x, i) => {
//       return <p key={i}>x</p>
//     })}
//   </div> 
// }

export default () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)

  // 
  const memoizedValue = useMemo(() => a+b, [a, b])

  // const XList = useMemo(List, [])
  return <div>
    {memoizedValue}
  </div>
}