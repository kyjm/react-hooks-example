import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Link} from 'react-router-dom'
import './index.css'

const req = require.context('./examples', false, /\.js$/)
const routers = req.keys().map(key => {
  const path = '/' + key.replace(/js/g, '').split(/[./]/).filter(x => x).join('/')
  return {
    path,
    component : req(key).default
  }
})

const App = () => {
  const [sel, setSel] = useState(window.location.href.split('#').pop())

  return <HashRouter>
    <ul className='menu'>
      {routers.map((x, i) => {
        return <li 
          className={sel === x.path ? 'active' : ''}
          key={i}>
          <Link onClick={() => setSel(sel => x.path)} to={x.path}>{x.path}</Link></li>
      })}
    </ul>
    <div className='content'>
      {routers.map((x, i) => {
        return <Route key={x.path} component={x.component} path={x.path} />
      })}
    </div>
  </HashRouter>
}

ReactDOM.render(<App />, document.getElementById("root"))
