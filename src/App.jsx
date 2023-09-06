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
            <h1 className="app-main__title">Make music with Ableton Live</h1>
            <p className="app-main__paragraph">Live is fast, fluid software for music creation and performance. Use its timeline-based workflow or improvise without constraints in Live’s Session View. Advanced warping lets you change the tempo and timing of any audio in real time without stopping the music. Record virtual instruments, drum machines, guitars or audio from the real world. Capture MIDI notes after you’ve played them, turning your most spontaneous ideas (and happy accidents) into music.</p>
            <div className="app-main__container-button">
              <button className="app-main__button">Try Live for free</button>
              <button className="app-main__button">Buy Live now</button>
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
