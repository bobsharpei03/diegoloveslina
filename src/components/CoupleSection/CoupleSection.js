import React from 'react';
import { Link } from 'react-router-dom'
import coupleImg1 from '../../images/couple/2.jpg'
import coupleImg2 from '../../images/couple/3.jpg'
import lina from '../../images/couple/Lina2.jpg'
import diego from '../../images/couple/Diego1.jpg'
import SectionTitle from '../SectionTitle'

import shape1 from '../../images/couple/shape-1.png'
import shape2 from '../../images/couple/shape-2.png'
import shape3 from '../../images/couple/shape-3.png'
import shape4 from '../../images/couple/shape-4.png'



const CoupleSection = (props) => {

    return (
        <section className={`couple-section section-padding ${props.cClass}`} id="couple">
            <div className="container">
                <div className="row align-items-center justify-content-center">            
                <SectionTitle MainTitle={'A message from the Bride and Groom'} />    
                <div className='col-lg-9'>          
                <p class="special"> Dear family and friends, we are thrilled you can join us on this important day. We hope you are as excited as we are. Most of you already know the love and care we have for each other, you have been witnesses to our challenges as well as our achievements. As immigrants, there were some obstacles for us to take this step earlier on our lives, instead God reserved this important event when he felt we could offer memories that can shine for the rest of our lives. This day is for you to laugh, cry, drink, dine and dance with us, this is to celebrate love and friendship, forget the tough times we lived, remember our fun memories and laugh. This is for us to raise our glasses and say: "Friend and family, love always wins"</p>
                </div>
                    <div className="col col-lg-11">
                        <div className="couple-area clearfix">
                            <div className="couple-item bride">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="couple-img">
                                            <img src={lina} alt="" />
                                            <div className="couple-shape">
                                                <img src={shape3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="couple-text">
                                            <h3>Lina Flores</h3>
                                            <p>There are not enough words to describe Lina, her natural beauty is only matched by her intelligence, discipline, loyalty, and extreme love for family, friends and animals. Lina is very grateful to God for putting Diego in her path. She is proud of being a Paramonga native and secretively craves a hot sauce only made by "The anticucheras" in Paramonga, Peru.</p>
                                            <div className="social">
                                                <ul>
                                                    <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="couple-item groom">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 order-lg-1 order-2">
                                        <div className="couple-text">
                                            <h3>Diego Maquill</h3>
                                            <p>Diego caught everyone by surprise on Christmas eve night when he proposed to Lina. He confesses his life has been transformed when they became a couple, admitting he has found nothing but true love by her side. Sometime after the wedding, Diego and Lina will be relocating to stormy Buffalo for his new job, he hopes bad weather is not an issue for Lina. </p>
                                            <div className="social">
                                                <ul>
                                                    <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-2 order-1">
                                        <div className="couple-img">
                                            <img src={diego} alt="Diego Maquill" />
                                            <div className="couple-shape">
                                                <img src={shape4} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <img src={shape2} alt="" />
            </div>
        </section>

    );
}

export default CoupleSection;