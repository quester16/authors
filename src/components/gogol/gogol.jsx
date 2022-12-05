import { Component } from 'react'

import './gogol.css'


class Gogol extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="wrapper">
        <div className="author">
          <img src='../imgs/gogol.png' alt="" />
        </div>
        <div className="author-left">
          <img src='../imgs/gogol-left.png' alt="" />
        </div>
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
    )
  }
}

export default Gogol;