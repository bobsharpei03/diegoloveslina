import React from 'react'
import LocationMap from '../Modal'
import shape1 from '../../images/slider/flower1.png'
import shape2 from '../../images/slider/flower2.png'


const Hero4 = (props) => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>Lina & Diego</h2>
                                        <h2>Wedding day</h2>
                                       {/* <p>Sep 03,2023</p> */}
                                        <ul>
                                        <br/>
                                            <li>Sunday, Sep 03 2023 at 4:15 PM <br/>
                                            St. Brigid Catholic Church<br/>
                                            75 Post Rd.  Westbury, NY 11590, USA</li>
                                            <li><LocationMap /></li>
                                        </ul>
                                    </div>
                                    <div className="shape-1"><img src={shape1} alt="" /></div>
                                    <div className="shape-2"><img src={shape2} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero4;