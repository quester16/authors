import { Component } from 'react'

import Pushkin from '../pushkin/pushkin'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Pushkin />
      </div>
    )
  }
}

export default App
