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
                                            <br/>
                                            <p>Lina necesitaba enviar algo de dinero a Perú. Diego estaba trabajando en una tienda de transferencia de dinero. Diego recuerda a una Lina distante, con gafas de sol oscuras y una diadema. La próxima vez, se encontraron en una fiesta de póquer, en casa de Julia en el que ambos fueron invitados y en donde sin saberlo, empezarian su historia...</p>
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
                                            <br/>
                                            <p>Aunque se hicieron amigos desde el principio, Diego no puede olvidar aquella vez que invitó a Lina a comer pasteles dulces en Au Bon Pain, cerca de Copley Square. Se sentaron frente a la Biblioteca de Boston hablando de sus sueños y esperanzas sin saber que sus sueños y esperanzas estarián juntos.</p>
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
                                            <br/>
                                            <p>Diego le propuso matrimonio a Lina en la noche de Nochebuena de 2021, justo antes de hacer el anuncio, "La Panzonita" casi muere ahogada con un sorbo de vino, todos estaban tan asustados que incluso Javier (el hermano de Lina) se olvidó de encender su cámara, ya que Diego se lo había pedido secretamente unos minutos antes. Giancarlo salvó parcialmente la noche al grabar cuando Diego se arrodilló ante Lina, pidiéndole que fuera su esposa.</p>
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