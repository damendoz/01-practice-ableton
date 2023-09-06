/* eslint-disable react/prop-types */

export function DesingMobile({ isMobile, handleOpenMenu, classNameExpand, divFixed }) {


    return (
        <>
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
        </>
    )
}