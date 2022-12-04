import { Component } from 'react'

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
        <div className="wrapper">
          <div className="gogol"></div>
          <div className="gogol-left"></div>

          <header>
            <div className="header-bg"></div>
          </header>
          <aside>
            <div className="logo">
            </div>
            <div className="child child-1">?</div>
            <div className="child child-2">?</div>
            <div className="child child-3">?</div>
            <div className="child child-1">?</div>
            <div className="child child-2">?</div>
            <div className="child child-3">?</div>
          </aside>
          <main>
            <span>Произведения Н.В. Гоголя на сцене Малого театра</span>
            <div className="back"><button className='btn'>На главную</button></div>
          </main>

          <footer><div className="footer-bg">
            <img src="../imgs/gas.png" alt="gas" /></div></footer>
        </div>
      </div>
    )
  }
}

export default App
