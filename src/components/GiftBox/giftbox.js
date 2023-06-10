import React from 'react';
import LocationMap from '../Modal';
import shape1 from '../../images/slider/flower1.png';
import shape2 from '../../images/slider/flower2.png';

const GiftBox = (props) => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="">
                                <div className="wpo-event-item2">
                                    <div className="wpo-event-text">
                                        <h2>Honney Moon Fund Registry</h2>
                                        <h3>The couple will he happy to accept only cash donations </h3>
                                        <h3>All donations will go towards the Honey Moon travel expenses</h3>
                                       {/* <p>Sep 03,2023</p> */}
                                        <ul>
                                        <br/>
                                            {/*<li>There will be a gitt box in the party<br/>
                                            or<br/>
                                            you can make your gift by zelle to 617-834-6182</li>
                                            {/*<li><LocationMap /></li>*/}
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

export default GiftBox;