import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import Navbar1 from '../../components/Navbar';
import Hero3 from '../../components/hero3/Hero3';
import Scrollbar from '../../components/scrollbar'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import StorySection2 from '../../components/StorySection2/StorySection2';
import StorySection1 from '../../components/StorySection/StorySection';
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import PortfolioSection1 from '../../components/PortfolioSection/PortfolioSection';
import RSVP2 from '../../components/RSVP2/RSVP2';
import RSVP1 from '../../components/RSVP/index';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Bob from '../../components/Bob/Bob';
import GiftBox from '../../components/GiftBox/giftbox';



const HomePage3 =() => {

    return(
        <Fragment>
            <Navbar1 hclass={'wpo-site-header-s1'}/>
            <Hero3/>
            <CoupleSection cClass={'couple-section-s2'}/>
            <WeddingTime/>
            <Bob/>
            <StorySection1/>
            {/*<PortfolioSection2 gClass={'pt-0'}/>*/}
            <PortfolioSection1/>
            <RSVP1/>
            <GiftBox/>
          {/*<BrideGrooms/>*/}
            <EventSection/>
        {/*<PartnerSection/>*/}
          {/*<BlogSection/>*/}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage3;