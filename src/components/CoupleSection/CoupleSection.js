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
                <div className="row justify-content-center">            
                <SectionTitle MainTitle={'A message from the Bride and Groom'} />    
                <div className="col col-lg-5 col-md-5 col-12">       
                <p class="special">Dear family and friends, we are thrilled you can join us on this important day. We hope you are as excited as we are. Most of you already know the love and care we have for each other, you have been witnesses to our challenges as well as our achievements. As immigrants, there were some obstacles for us to take this step earlier on our lives, instead God reserved this important event when he felt we could offer memories that can shine for the rest of our lives. This day is for you to laugh, cry, drink, dine and dance with us, this is to celebrate love and friendship, forget the tough times we lived, remember our fun memories and laugh. This is for us to raise our glasses and say: "Friend and family, love always wins"</p>
                </div>
                <div className='col col-lg-1 col-md-1 col-12'></div>
                <div className="col col-lg-5 col-md-5 col-12">
                <p class="special">Querida familia y amigos, estamos encantados de que puedan acompañarnos en este día tan importante. Esperamos que estén tan emocionados como nosotros lo estamos. La mayoría de ustedes ya conocen el amor y el cuidado que temenos el uno por el otro y han sido testigos de nuestros desafíos, así como de nuestros logros. Como inmigrantes, hubo algunos obstáculos para que demos este paso antes en nuestras vidas. Sin embargo, Dios reservó este evento importante cuando sintió que podíamos ofrecer recuerdos que puedan brillar por el resto de nuestras vidas. Este día es para que rías, llores, bebas, cenes y bailes con nosotros, esto es para celebrar el amor y la amistad, olvidar los momentos difíciles que vivimos, recordar nuestros recuerdos divertidos y risas. Esto es para que levantemos nuestras copas y digamos: "Amigos y familia, el amor siempre gana"</p>
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
                                            <br/>
                                            <p>No hay palabras suficientes para describir a Lina, su belleza natural solo se compara con su inteligencia, disciplina, lealtad y amor extremo por la familia, los amigos y los animales. Lina está muy agradecida con Dios por poner a Diego en su camino. Ella está muy orgullosa de ser nativa de Paramonga y en secreto anhela una salsa picante que solo preparan “Las anticucheras” en Paramonga, Perú.</p>
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
                                            <p>Diego is known for being intrepid, brave and willing to face the adversities of life. At just 18 years old, he traveled alone to the US, paving the way for his parents and siblings to start a new life. Diego confesses his life has been transformed after Lina and him became a couple, admitting he has found nothing but true love by her side. Sometime after the wedding, due to Diego's job, the newlyweds will be relocating to stormy Buffalo. He hopes bad weather is not an issue for Lina. </p>
                                            <br/>
                                            <p>Diego es conocido por ser intrepido, valiente y dispuesto a enfrentar las adversidades dela vida. A los 18 años viajó solo a los EEUU, abriendo el camino para sus que sus padres y hermanos empiezen una nueva vida. Diego confiesa que su vida se transformó cuando se convirtieron en pareja, admitiendo que no ha encontrado nada más que el amor verdadero a su lado. Semanas después de la boda, por el trabajo de Diego, los recién casados se mudarán a la tormentosa Buffalo. El espera que el mal tiempo no sea un problema para Lina.</p>
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