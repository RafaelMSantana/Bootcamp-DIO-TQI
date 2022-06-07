import React, { Component } from 'react'
import Twitter from './Twitter'

class App extends Component {

  state = {
    loading: false,
    activated: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      activated: false
    })
  } 

  componentWillUnmount() {
    console.log('componentWillUnmount')}
    
  render ()  {

    const posts = [
      {
        title: 'Vento azul',
        description: 'descr'
      },
      {
        title: 'Vento vermelho',
        description: 'descr2'
      }
    ]

    return (
      <div>
        <button onClick={this.onRemove}>Remover componente</button>
        {this.state.activated && (
          <Twitter posts={posts} loading={this.state.loading} />
        )}
      </div>
    )
  }
}

export default App