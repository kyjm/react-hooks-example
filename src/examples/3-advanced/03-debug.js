import React, {useDebugValue, useState} from 'react'

export default () =>{
  const [isOnline, setIsOnline] = useState(null)
  useDebugValue(isOnline ?'Online' :'Offline')
  return null
}