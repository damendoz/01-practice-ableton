import { useState } from 'react'

//icons
import 'boxicons'

//css
import './App.css'

function App() {

  const [isMobile, setIsMobile] = useState(false)

  const handleOpenMenu = () => {
    setIsMobile(!isMobile)
    setExpand(!expand)
  }

  const [expand, setExpand] = useState(false)

  const classNameExpand = expand ? 'white' : 'black'

  const className = isMobile ? 'app-header isMobile zIndex' : 'app-header'

  const divFixed = isMobile ? 'app-nav__primary-mobile fixed' : 'app-nav__primary-mobile'

  return (
    <div className="app">
      <header className={className}>
        <nav className="app-nav">
          <a href="" className='app-nav__logo-pc'>
            <button className="app-nav__button-logo-pc">
              <img src="../public/bx-pyramid.svg" alt="logo" />
            </button>
          </a>
          <div className="app-nav__primary">
            <ul className='app-nav__ul-primary'>
              <li><a href="">Live</a></li>
              <li><a href="">Push</a></li>
              <li><a href="">Note</a></li>
              <li><a href="">Link</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Packs</a></li>
              <li><a href="">Help</a></li>
              <li className="app-nav__ul-more">
                <button className='app-nav__button-more'>
                  <span>More</span>
                  <span>
                    <box-icon name='plus'
                      color="#ff764d"
                      style={{
                        position: "relative",
                        top: "5px"
                      }}
                    >
                    </box-icon>
                  </span>
                </button>
              </li>
              <li className='app-nav__left'>
                <a href="" className='app-nav__left-blue'>Try Live for free</a>
              </li>
              <li><a href="" className='app-nav__left-black'>Log in or register</a></li>
            </ul>
          </div>
          {/* mobile */}
          <div className="app-nav__container-logo-mobile">
            <a href="" className='app-nav__logo-mobile'>
              <span className='app-nav__logo-text-hidden'>Ableton HomePage</span>
              <box-icon name='pyramid' size='md' color={classNameExpand}></box-icon>
            </a>
            <button className="app-nav__button-logo-mobile" onClick={handleOpenMenu}>
              <span className='app-nav__button-text-mobile' style={{ color: classNameExpand }}>Menu</span>
              <box-icon type='solid' name='down-arrow' size='xs' color={classNameExpand}></box-icon>
            </button>
          </div>
          {
            isMobile === true &&
            <div className={divFixed}>
              <ul className='app-nav__ul-primary-mobile'>
                <li><a href="">Live</a></li>
                <li><a href="">Push</a></li>
                <li><a href="">Note</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Packs</a></li>
                <li><a href="">Help</a></li>
                <li><a href="">Try Live for free</a></li>
                <li><a href="">Log in or register</a></li>
              </ul>
            </div>
          }
          <div className='main-nav__stretcher-mobile'></div>
        </nav>
        <div className="main-nav__separator"></div>
        <nav className="app-nadvar__secondary">
          <ul className='app-nadvar__secondary-ul'>
            <li><a href="" className='app-nadvar__secondary-red'>About</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">Apprenticeships</a></li>
          </ul>
        </nav>
      </header>
      <main className="app-main">
        <div className="app-main__container">
          <div className="app-main__container-image">
            <img className="img-responsive" src='img.jpg'></img>
          </div>
        </div>
      </main>
      <footer className="app-footer">
      </footer>
    </div>
  )
}

export default App
