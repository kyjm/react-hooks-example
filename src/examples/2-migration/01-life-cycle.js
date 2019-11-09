import React, {
  useState, 
  useEffect, 
  useRef
} from 'react'



const Input = (props) => {

  const ref = useRef()
  // Component Will Receive Props
  // shouldComponentUpdate
  useEffect(() => {
    console.log(`value changed${props.value}`)
    ref.current.value = props.value
  }, [props.value])

  return <input ref={ref} />
}

export default (props) => {

  const [value, setValue] = useState('')

 
  useEffect(() => {
    console.log('component did mount')
    return () => {
      console.log('component will unmount')
    }
  }, [])

  useEffect(() => {

  }, [props.value])

  return <div>
    <Input value={value} />
    <button onClick={() => setValue(x => Math.random())}>Click Me</button>
  </div>
}
