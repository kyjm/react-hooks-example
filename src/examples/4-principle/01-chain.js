import React, { useState, 
  useEffect } from 'react'

const Child = (props, ref) => {


  useState(1)
  useState(2)
  useState(3)

  useEffect((a) =>{
    console.log('a')
  })
  useEffect((b) =>{
    console.log('b')
  })
  useEffect((c) =>{
    console.log('c')
  })



  return <span>this is a span</span>

  
}


export default class Chain extends React.Component {

  componentDidMount() {
    const childFiberNode = this._reactInternalFiber.child
    console.log(childFiberNode.elementType)
    console.log(childFiberNode.memoizedState)
    console.log(childFiberNode.updateQueue)
    setTimeout( () => {

      console.log(this)
      debugger
    })
  }

  render(){
    return <Child x={1} />
  }

}
