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
                <SectionTitle MainTitle={'Welcome to our Wedding Day Page'} />              
                <p class="special"> Dear family and friends, this celebration is important for us and our families. They already know the love and care we have for each other. At this stage of our lives, perhaps a big wedding was not required to sealed our commitment, but we also wanted to make this day special for all you. This day is for you to laugh, cry, drink, dine and dance with us, this is to celebrate love and friendship, forget the tough times we lived, remember our fun memories and laughters. This is for us to put our glasses up and say "Friend and family, we are here because of you!"</p>            
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
                                            <p>There are not enough words to describe Lina, her natural beauty it's match by her intelligence, discipline, loyalty, and extreme love for family and friends. She is proud of being a Paramonga native and secretively craves a hot sauce only made in Paramonga, Peru.</p>
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
                                            <p>Diego's friends would know this is not his first journey to the altar, but his friends also knew that the one with Lina, will be the one that counts. Diego confesses there is a before Lina and a after Lina, admiting he has found true love by her side. This October, Diego will be relocated to stormy Buffalo for his new job, he hopes bad weather is not an issue for Lina. </p>
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