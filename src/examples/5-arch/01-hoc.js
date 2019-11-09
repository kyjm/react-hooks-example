import React from 'react'

const withUsers = () => (Target) => {
  class Proxy extends React.Component{
    constructor(){
      super()
      this.state = {
        users : null
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          users :['小明', '小张']
        })

      }, 2000)
    }

    render(){
      const {users} = this.state
      return <Target users={users} />
    }
  }
  return Proxy
}

export default withRequest({
  url :'...'
})( (props) => {


  if(props.users === null) {
    return <div>loading...</div>
  }

  return <ul>
    {props.users.map((x, i) => {
      return <li key={i}>{x}</li>
    })}

  </ul>

})