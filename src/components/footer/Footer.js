import React from 'react'
import {Link}  from 'react-router-dom'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

  return(

    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="widget-title">
                                <Link onClick={ClickHandler} className="logo" to="/"><small>Diego</small>loves<small>Lina.com</small>
                                <span><i className="fi flaticon-dove"></i></span></Link>
                            </div>
                            <p>Blandit ipsum arcu donec auctor a, turpis vitae. Egestas pretium euenim non euoeu dignissim nulla nunc quisque</p>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Information</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/blog">Latest News</Link></li>
                                <li><Link onClick={ClickHandler} to="/accomodation">Accomodation</Link></li>
                                <li><Link onClick={ClickHandler} to="/story">Our story</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-email"></i>dmaquill@diegoloveslina.com</li>
                                    <li><i className="fi flaticon-email"></i>lflores@diegoloveslina.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+1 (617) 669-2030</li>
                                    <li><i className="fi flaticon-maps-and-flags"></i>Rhode Island – Westerly
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget newsletter">
                            <div className="widget-title">
                                <h3>Newsletter</h3>
                            </div>
                            <form onSubmit={SubmitHandler}>
                                <input type="text" placeholder="Email" required/>
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2022 Mylove Template. Design By <Link onClick={ClickHandler}
                                to="/">wpOceans</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;