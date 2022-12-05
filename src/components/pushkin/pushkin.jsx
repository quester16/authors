import './pushkin.css'


import Header from '../parts/header'
import Footer from '../parts/footer'
import Aside from '../parts/aside'
import AuthorBg from '../parts/bg-autor'

const Pushkin = () => {
  return (
    <div className="wrapper">

      <div className="author"></div>
      <div className="author-left"></div>
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