import { useState } from 'react'

//icons
import 'boxicons'

//css
import './App.css'

//components
import { DesingMobile } from './Components/desingMobile'
import { MoreInformation } from './Components/moreInformation'

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

  const [more, setMore] = useState(false)

  const handleClickMore = () => {
    setMore(!more)
  }

  const iconMore = more ? 'minus' : 'plus'

  const classNameMore = more ? 'app-nav__button-more expanded' : 'app-nav__button-more'

  return (
    <div className="app">
      <header className={className}>
        <nav className="app-nav">
          <a href="" className='app-nav__logo-pc'>
            <button className="app-nav__button-logo-pc">
              <img src="../bx-pyramid.svg" alt="logo" />
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
                <button className={classNameMore}
                  onClick={handleClickMore}
                >
                  <span>More</span>
                  <span>
                    <box-icon name={iconMore}
                      color="#ff764d"
                      style={{
                        position: "relative",
                        top: "5px"
                      }}
                    />
                  </span>
                </button>
              </li>
              <li className='app-nav__left'>
                <a href="" className='app-nav__left-blue'><strong>Try Live for free</strong></a>
              </li>
              <li><a href="" className='app-nav__left-black'><strong>Log in or register</strong></a></li>
            </ul>
          </div>
          <DesingMobile
            isMobile={isMobile}
            handleOpenMenu={handleOpenMenu}
            classNameExpand={classNameExpand}
            divFixed={divFixed}
          />
          <MoreInformation
            more={more}
          />
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
        <section className="app-main__container">
          <div className="app-main__container-image">
            <img className="app-main__image" src='front-img.jpg'></img>
          </div>
          <div className="app-main__container-text">
            <div className="app-main__title">
              <h4>
                We make Live, Push and Link — unique software
                and hardware for music creation and performance. With these products, our
                community of users creates amazing things.
              </h4>
            </div>
            <div className='app-main__text'>
              <p>Ableton was founded in 1999 and released the first version of Live in 2001.
                Our products are used by a community of dedicated musicians,
                sound designers, and artists from across the world.</p>
            </div>
          </div>
          <div className="app-main__container-image">
            <div className='app-main__container-left'>
              <img className="app-main__image-primary" src='img-left.jpg'></img>
            </div>
            <div className='app-main__container-right'>
              <div className='app-main__rigth-center'>
                <img className="app-main__image-secondary" src='img-right.jpg'></img>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="app-footer">
      </footer>
    </div>
  )
}

export default App
