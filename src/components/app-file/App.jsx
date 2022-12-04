import { Component } from 'react'
import Gogol from '../gogol/gogol'

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
        <Gogol />
      </div>
    )
  }
}

export default App
