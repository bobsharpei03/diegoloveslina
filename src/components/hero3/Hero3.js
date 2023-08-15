import React from 'react'
import TimeCountDown from '../countdown';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'
import hero4 from '../../images/slider/Top_wedding.jpg'
import hero5 from '../../images/slider/berkeley.jpeg'
import hero6 from '../../images/slider/Manor.webp'
import hero7 from '../../images/slider/Beach1.jpeg'
import hero8 from '../../images/slider/Pichu.jpg'
import hero9 from '../../images/slider/Skiing.jpg'
import hero10 from '../../images/slider/Thai.jpg'
import hero11 from '../../images/slider/estate1.jpeg'
import hero12 from '../../images/slider/estate2.jpeg'

const Hero3 = (props) => {
    return (
        <section className="wpo-hero-slider wpo-hero-style-3" id="hero3">
            <div className="wedding-announcement">
                <div className="couple-text">                    
                    {/*<p>We Are Getting Married Sep 3, 2023</p>*/}
                    <p>Thanks to all friends and family who have RSVP</p>
                    <p>The guest list is close at this time</p>
                    <h2>Lina & Diego</h2>
                    <div className="wpo-wedding-date">
                        <div className="clock-grids">
                            <TimeCountDown/>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, A11y]}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                speed={100}
                parallax={true}
                navigation={true}
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero11})` }}>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero12})` }}>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero10})` }}>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero8})` }}>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero7})` }}>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>

        </section>
    )
}

export default Hero3;