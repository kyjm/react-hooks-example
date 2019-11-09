import React, {useState, useEffect} from 'react'

import MockJS from 'mockjs'

// const useUsers = () => {

//   const [users, setUsers] = useState(null)

//   useEffect( () => {
//     setTimeout(() => {
//       setUsers(['小张', '小明'])
//     }, 2000)

//   }, [])
//   return users

// }

function request(url, params){
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve(MockJS.mock({
        [`list|1-${params.num}`] : [{
          'name' :'@cname'
        }]
      }).list.map(x=>x.name))

    }, 2000)
  })
}

const useRequest = (url, params) => {

  const [data, setData] = useState(null)

  useEffect( () => {
    request(url, params).then(data => {
      setData(data)
    })
  }, [])

  function reload() {
    setData(null)
    request(url, params).then(data => {
      setData(data)
    })
  }

  return [data,reload]
}



export default () => {
  const [users, reload] = useRequest('https://get-users', {
    num : 10
  })
  // const users = useUsers()
  if(users === null) {
    return <div>loading...</div>
  }

  return <ul>
    {users.map((x, i) => {
      return <li key={i}>{x}</li>
    })}

    <button onClick={reload}>重新加载</button>
  </ul>

}