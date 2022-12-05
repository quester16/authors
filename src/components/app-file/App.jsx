import { Component } from 'react'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Pushkin: {
        right: '../imgs/pushkin.png',
        left: '../imgs/pushkin-left.png'
      },
      Gogol: {
        right: '../imgs/gogol.png',
        left: '../imgs/gogol-left.png'
      },
    }
  }

  render() {
    return (
      <div className="App">
        <img className='theaterbg' src="../imgs/theater.png" alt="" />
        <img className='theaterbg-right' src="../imgs/theater-right.png" alt="" />
        <img className='yellow' src="../imgs/yellow.png" alt="" />

        <div className="wrapper">
          <header>
            <div className="header-bg">
              <img src='../imgs/header.png' alt="" />
            </div>
          </header>
          <aside>
            <div className="logo">
              <img src="../imgs/logo.png" alt="" />
            </div>
            <div className="theater">
              <img src="../imgs/main.jpg" alt="" />

            </div>
          </aside>
          <main>
            <div className="right-side">
              <div className="author">
                <div className="img"> <img src="..\imgs\griboedov-p.png" alt="" /></div>
                <div className="for__text">
                  <span>ГРИБОЕДОВ</span>
                </div>
              </div>
              <div className="author">
                <div className="img"> <img src="..\imgs\shiller-p.png" alt="" /></div>
                <div className="for__text">
                  <span>ШИЛЛЕР</span>
                </div>
              </div>
              <div className="author">
                <div className="img"> <img src="..\imgs\ostrov-p.png" alt="" /></div>
                <div className="for__text">
                  <span>ОСТРОВСКИЙ</span>
                </div>
              </div>
            </div>
            <div className="left-side">
              <div className="author">
                <div className="img"> <img src="..\imgs\gogol-p.png" alt="" /></div>
                <div className="for__text">
                  <span>ГОГОЛЬ</span>
                </div>
              </div>
              <div className="author">
                <div className="img"> <img src="..\imgs\shekspir-p.png" alt="" /></div>
                <div className="for__text">
                  <span>ШЕКСПИР</span>
                </div>
              </div>
              <div className="author">
                <div className="img"> <img src="..\imgs\pushkin-p.png" alt="" /></div>
                <div className="for__text">
                  <span>ПУШКИН</span>
                </div>
              </div>
            </div>
          </main>

          <footer>
            <div className="footer-bg">
              <img className='qr' src="../imgs/qrCode.png" alt="qrcode" />
              <img src="../imgs/gas.png" alt="gas" />
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default App
