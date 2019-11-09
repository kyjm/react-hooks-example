import React, {useContext} from 'react'
import HelloContext from '../../lib/HelloContext'

// HelloContext.Provider
// HelloContext.Consumer
const {Provider} = HelloContext

const Desendants = () => {
  const value = useContext(HelloContext)
  return <div>{value}</div>
}

const Child = ()=> {
  return <Desendants />
}

const Parent = () => {
  return <Provider value='hello world'>
    <Child />
  </Provider>
}


export default Parent