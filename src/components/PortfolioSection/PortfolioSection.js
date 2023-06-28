import React from 'react'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import SectionTitle from '../SectionTitle'
import pImg1 from '../../images/portfolio/1.jpg'
import pImg2 from '../../images/portfolio/2.jpg'
import pImg3 from '../../images/portfolio/3.jpg'
import pImg4 from '../../images/portfolio/4.jpg'
import pImg5 from '../../images/portfolio/5.jpg'
import pImg6 from '../../images/portfolio/cabo.jpeg'
import pImg7 from '../../images/portfolio/china.jpeg'
import pImg8 from '../../images/portfolio/china2.jpeg'
import pImg9 from '../../images/portfolio/thai2.jpeg'
import pImg10 from '../../images/portfolio/elephants1.jpeg'
import pImg11 from '../../images/portfolio/elephants2.jpeg'


const Portfolios = [
    {
        Pimg:pImg6,
    },
    {
        Pimg:pImg9,
    },
    {
        Pimg:pImg10,
    },
    {
        Pimg:pImg8,
    },
    {
        Pimg:pImg11,
    }
] 

const PortfolioSection = (props) => {
    return(
        <section className={`wpo-portfolio-section section-padding ${props.pSclass}`} id="gallery">
            <div className="container">
                <SectionTitle MainTitle={'Sweet Captured Moments'}/>
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Portfolios.map((portfolio, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <ReactFancyBox
                                                thumbnail={portfolio.Pimg}
                                                image={portfolio.Pimg}
                                                />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection;