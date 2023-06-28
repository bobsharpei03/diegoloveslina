import React from 'react';
import LocationMap from '../Modal';
import shape1 from '../../images/slider/flower1.png';
import shape2 from '../../images/slider/flower2.png';
import SectionTitleS3 from '../SectionTitleS3';

const GiftBox = (props) => {
    return (
        <section className="static-hero-s3" id="giftbox">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="wpo-event-item2">
                                    <div className="wpo-event-text">
                                        <SectionTitleS3 MainTitle={'Rainfall of Envelops / Lluvia de Sobres'} />
                                        <br/>                                                                             
                                        <h3>We are fortunate enough to have all the physical items we need. We have created a honeymoon registry for our trip to Israel! We can't wait to visit exciting places such as Bethlehem, Nazareth, Jeruslem, Sea of Galilee and much more. Should you wish to donate towards any of our ideas or places, please write us a note with thoughts and gifts and drop it in our designated box at the wedding, then we'll make sure to send an appropriate selfie of us enjoying the experience with you</h3>
                                        <h3>Thank You!</h3>
                                        <br/>
                                        <h3>You can donate directly to us by:</h3>
                                        <br/>
                                        <ul>
                                            <li>Paypal:&nbsp;maquill.revere81@outlook.com</li>
                                            <li>Zelle:&nbsp;+1-617-669-2030</li>
                                        </ul>
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