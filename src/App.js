import React, {useState} from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'
import './index.css'


const req = require.context('./examples', true, /\.js$/)
const menus = []

const routers = req.keys().map(key => {
  const prts = key.replace(/js/g, '').split(/[./]/).filter(x => x)
  const path = '/' + prts.join('/')
  const groupKey = prts[0]
  let group = menus.find(x => x.name === groupKey)
  if(!group) {
    group = {
      name :groupKey,
      children : []
    }
    menus.push(group)
  }
  group.children.push({
    title : prts[1],
    to : path
  })
  return {
    path,
    component : req(key).default
  }
})

export default () => {
  const [sel, setSel] = useState(window.location.href.split('#').pop())

  return <HashRouter>
    <div className='menu'>
      {menus.map((g, i) => {
        return <div key={i}>
          <strong>{g.name}</strong>
          {g.children.map( (x, i) => {
            return <li
              className={sel === x.to? 'active' : ''}
              key={i}>
              <Link onClick={() => setSel(x.to)} to={x.to}>{x.title}</Link>
            </li>
          })}
        </div>
     })} 
    </div>
    <div className='content'>
      {routers.map((x, i) => {
        return <Route key={x.path} component={x.component} path={x.path} />
      })}
    </div>
  </HashRouter>
}
