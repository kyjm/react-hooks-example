import React, {useRef, useEffect, useState} from 'react'


export const Input = (props) => {
  const ref = useRef()
  useEffect( () => {
    ref.current.value = props.initialValue
  }, [])
  return <input 
    onChange={(e) => props.onChange(e.target.value)} 
    ref={ref} />
}


export default () => {

  const [value, setValue] = useState(100) 

  return <div>
    <div>you input:{value}</div>
    <Input initialValue={value} onChange={(x) => setValue(_ => x)} />
  </div>
}


