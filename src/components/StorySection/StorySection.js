import React from 'react';
import SectionTitle from '../SectionTitle'
import sImg1 from '../../images/story/1.jpg'
import sImg2 from '../../images/story/2.jpg'
import sImg3 from '../../images/story/3.jpg'
import sImg4 from '../../images/story/firstmet.jpeg'
import sImg5 from '../../images/story/firstdate.jpeg'
import sImg6 from '../../images/story/knelt3.jpeg'

import shape1 from '../../images/rsvp/shape1.png'
import shape2 from '../../images/rsvp/shape2.png'

const StorySection = (props) => {
    return (
        <section className="story-section section-padding" id="story">
            <div className="container">
                <div className="row">
                    <SectionTitle MainTitle={'Our Sweet Story'} />
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="story-timeline">
                            <div className="row">
                                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-balloon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="story-timeline-item s1">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder right-align-text fadeInLeftSlow" data-wow-duration="1500ms">
                                            <img src={sImg4} className="img img-responsive" alt="stroy"/>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                        <div className="story-text left-align-text fadeInRightSlow" data-wow-duration="2000ms">
                                            <h3>First Time We Meet</h3>
                                            {/*<span className="date">Nov 23th, 2003</span>*/}
                                            <div className="line-shape">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Lina needed to send some money to Peru. Diego was working at a money transfer store. Diego remembers an aloof Lina, wearing dark sunglasses and a headband. The next time, they met at a poker party, at Julia's house, where both were invited and where, they would begin their story... </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-timeline-item">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder left-text">
                                        <div className="story-text right-align-text fadeInLeftSlow" data-wow-duration="2000ms">
                                            <h3>Our First Date</h3>
                                            {/*<span className="date">May 22nd 2004</span>*/}
                                            <div className="line-shape s2">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Even though they became friends from the beginning, Diego cannot forget that time he invited Lina for sweet pastries at Au Bon Pain near Copley Square. They sat accross the Boston Library talking about their dreams and hopes, not knowing that their dreams and hopes would be together.</p>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12 order-lg-2 order-1">
                                        <div className="img-holder left-align-text">
                                            <img src={sImg5} alt="stroy" className="img img-responsive fadeInRightSlow" data-wow-duration="1500ms"/>
                                                <span className="heart">
                                                    <i className="fi flaticon-dance"></i>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-timeline-item">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder right-align-text left-site right-heart">
                                            <img src={sImg6} alt="stroy" className="img img-responsive fadeInLeftSlow" data-wow-duration="1500ms"/>
                                                <span className="heart">
                                                    <i className="fi flaticon-dove"></i>
                                                </span>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                        <div className="story-text left-align-text fadeInRightSlow" data-wow-duration="2000ms">
                                            <h3>She Said Yes!</h3>
                                            <span className="date">December 25 2021</span>
                                            <div className="line-shape">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Diego proposed to Lina on Christmas Eve night 2021, Right before he made the announcement,"La Panzonita" almost chocked to death with a sip of wine, everyone was so scared that Javier (Lina's brother) even forgot to turn on his camera, as Diego had secretly asked him just minutes before. Giancarlo partially saved the night by recording when Diego knelt before Lina asking her to be his wife.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <div className="sticky-shape">
                    <img src={shape1} alt=""/>
                </div>
            </div>
            <div className="shape-2">
                <div className="sticky-shape">
                    <img src={shape2} alt=""/>
                </div>
            </div>
        </section>
    )
}


export default StorySection;