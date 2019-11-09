import React, {
  useRef, 
  useEffect, 
  forwardRef,
  useImperativeHandle
} from 'react'


const Input = (props, ref) => {
  const refInput = useRef()

  useImperativeHandle(ref, () => ({
    focus: () => {
      refInput.current.focus()
    }
  }), [])

  useEffect( () => {
    refInput.current.value = props.initialValue
  }, [])
  return <input 
    onChange={(e) => props.onChange(e.target.value)} 
    ref={refInput} />
}

const MInput = forwardRef(Input)



export default () => {

  const r1 = useRef()
  const r2 = useRef()

  return <div>
    <MInput 
      ref={r1}
      initialValue={100} 
      onChange={(x) => console.log('1:' +x)} />
    <MInput 
      ref={r2}
      initialValue={'hello'} 
      onChange={(x) => console.log('2:' + x)} />
    <p>
      <button onClick={() => {
        console.log(r1)
        r1.current.focus()
      }}>focus 1</button>
      <button onClick={
        () => {
          r2.current.focus()
        }
      }>focus 2</button>
    </p>
  </div>
}


