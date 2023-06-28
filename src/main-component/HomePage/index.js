import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import Scrollbar from '../../components/scrollbar'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import Bob from '../../components/Bob/Bob';
import VideoSection from '../../components/VideoSection';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import RSVP from '../../components/RSVP';
import CtaSection from '../../components/CtaSection/CtaSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import GiftBox from '../../components/GiftBox/giftbox';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import BackgroundVideo from '../../js/BackgroundVideo';
import Hero3 from '../../components/hero3/Hero3';

const HomePage =() => {

    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'}/>
            {/*<Hero/>*/}
            <Hero3/>
            <CoupleSection/>
            <Bob/>
            {/*<BackgroundVideo/>*/}
            {/*<VideoSection/>*/}
            <StorySection/>
            {/*<CtaSection/>*/}
            <PortfolioSection/>
            <RSVP/>
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

export default HomePage;