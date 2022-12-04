import './pushkin.css'


import Header from '../parts/header'
import Footer from '../parts/footer'
import Aside from '../parts/aside'

const Pushkin = () => {
  return (
    <div className="wrapper">
      <div className="gogol"></div>
      <div className="gogol-left"></div>

      <Header />
      <Aside />
      <main>
        <span>Произведения Н.В. Гоголя на сцене Малого театра</span>
        <div className="back"><button className='btn'>На главную</button></div>
      </main>

      <Footer />
    </div>
  )
}

export default Pushkin;