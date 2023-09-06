/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

export function MoreInformation({ more,  }) {

    

    return (
        <>
            {more === true  &&
                <header className='main-nav__more-information'>
                    <div className='main-nav__more-information-container'>
                        <section className='main-nav__more-information-row'>
                            <h3 className='main-nav__more-information-title'>More on Ableton.com:</h3>
                            <ul className='main-nav__ul'>
                                <li><a href="" className='main-ul__li-initial'>Blog</a></li>
                                <li><a href="">Ableton for the Classroom</a></li>
                                <li><a href="">Ableton for Collages and Universities</a></li>
                                <li><a href="">Certified Training</a></li>
                                <li><a href="" className='main-ul__li-red'>About Ableton</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Apprenticeships</a></li>
                            </ul>
                        </section>
                        <section className='main-nav__more-information-row'>
                            <h3 className='main-nav__more-information-title'>More from Ableton:</h3>
                            <div className='main-nav__more-information-subcontent'>
                                <ul className='main-nav__subcontent-ul'>
                                    <li><a href="" className="main-nav__a">
                                        <div>
                                            <h4>Loop</h4>
                                            <p>
                                                Watch Talks, Performances and Features from Ableton's
                                                Summit for Music Makers.
                                            </p>
                                        </div>
                                    </a>
                                    </li>
                                    <li><a href="" className="main-nav__a">
                                        <div>
                                            <h4>Learning Music</h4>
                                            <p>
                                                Learn the fundamentals of music making rifht in your
                                                browser.
                                            </p>
                                        </div>
                                    </a>
                                    </li>
                                    <li><a href="" className="main-nav__a">
                                        <div>
                                            <h4>Learning Synths</h4>
                                            <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                                        </div>
                                    </a>
                                    </li>
                                    <li><a href="" className="main-nav__a">
                                        <div>
                                            <h4>Making Music</h4>
                                            <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                                        </div>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </header>
            }
        </>
    )
}