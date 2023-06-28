import React from 'react';
import { Link } from 'react-router-dom'
import coupleImg1 from '../../images/couple/2.jpg'
import bobpeke from '../../images/bob/Bob.jpg'
import coupleImg2 from '../../images/couple/3.jpg'

import shape1 from '../../images/couple/shape-1.png'
import shape2 from '../../images/couple/shape-2.png'
import shape3 from '../../images/couple/shape-3.png'
import shape4 from '../../images/couple/shape-4.png'


const Bob = (props) => {
    return (
        <section className={`couple-section section-padding ${props.cClass}`} id="bob">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col col-lg-11">
                        <div className="couple-area clearfix">
                            <div className="couple-item bride">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="couple-img">
                                            <img src={bobpeke} alt="BobPeke" />
                                            <div className="couple-shape">
                                                <img src={shape3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="couple-text">
                                            <h3>Bob Sharpei</h3>
                                            <p>Their story would not be the same without a little wrinkly fellow that showed in their lives. Bob was adopted by Lina in her native Paramonga. A few years later Bob made the trip to Boston, where they became a family of three. Bob lived a happy life until age fifteen. Although he will not be with them for this special day, his presence will be forever in their hearts.
                                        </p>
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

export default Bob;