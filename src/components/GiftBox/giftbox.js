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
                                        <SectionTitleS3 MainTitle={'Honeymoon Registry / Registro de Luna de Miel'} />
                                        <br/>                                                                             
                                        <h3>As we are blessed to have all the physical items we need, we have created a honeymoon registry for our trip to Israel! We can't wait to visit exciting places such as Bethlehem, Nazareth, Jerusalem, Sea of Galilee and many more. You can find our honeymoon registry at:</h3>
                                        <br/>
                                        <ul>
                                        <li><a  href='https://www.hitchd.com/diegoloveslina'>Hitchd Registry</a></li>
                                            <li>Password: DiegolovesLina03</li>
                                        </ul>
                                        <br/>
                                        <h3>Or you can donate directly to us by:</h3>
                                        <br/>
                                        <ul>
                                            <li>Paypal:&nbsp;maquill.revere81@outlook.com</li>
                                            <li>Zelle:&nbsp;+1-617-669-2030</li>
                                            <li>Card Box at the wedding venue</li>
                                            <h3>Thank You!</h3>
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