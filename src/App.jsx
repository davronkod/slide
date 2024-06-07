import './App.css';
import tabiat from "./assets/img/tabiat.png";
import tabiat2 from "./assets/img/tabiat2.jpg";
import tabiat3 from "./assets/img/tabiat3.jpg";
import tabiat4 from "./assets/img/tabiat4.jpg";
import tabiat5 from "./assets/img/tabiat5.jpg";
import tabiat6 from "./assets/img/tabiat6.jpg";
import tabiat7 from "./assets/img/tabiat7.jpg";
import tabiat8 from "./assets/img/tabiat8.jpg";
import tabiat9 from "./assets/img/tabiat9.jpg";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import './styles.css';

// import required modules
import { EffectCreative } from 'swiper/modules';

function App() {
  return (
    <div>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide><img className='q3' src={tabiat} alt="" /></SwiperSlide>
        <SwiperSlide><img className="q2" src={tabiat2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q1' src={tabiat3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q4' src={tabiat4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={tabiat5} alt="" className="q5" /></SwiperSlide>
        <SwiperSlide><img src={tabiat6} alt="" className="q6" /></SwiperSlide>
        <SwiperSlide><img src={tabiat7} alt="" className="q7" /></SwiperSlide>
        <SwiperSlide><img src={tabiat8} alt="" className="q8" /></SwiperSlide>
        <SwiperSlide><img src={tabiat9} alt="" className="q9" /></SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide><img className='q3' src={tabiat} alt="" /></SwiperSlide>
        <SwiperSlide><img className="q2" src={tabiat2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q1' src={tabiat3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q4' src={tabiat4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={tabiat5} alt="" className="q5" /></SwiperSlide>
        <SwiperSlide><img src={tabiat6} alt="" className="q6" /></SwiperSlide>
        <SwiperSlide><img src={tabiat7} alt="" className="q7" /></SwiperSlide>
        <SwiperSlide><img src={tabiat8} alt="" className="q8" /></SwiperSlide>
        <SwiperSlide><img src={tabiat9} alt="" className="q9" /></SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3"
      >
        <SwiperSlide><img className='q3' src={tabiat} alt="" /></SwiperSlide>
        <SwiperSlide><img className="q2" src={tabiat2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q1' src={tabiat3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q4' src={tabiat4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={tabiat5} alt="" className="q5" /></SwiperSlide>
        <SwiperSlide><img src={tabiat6} alt="" className="q6" /></SwiperSlide>
        <SwiperSlide><img src={tabiat7} alt="" className="q7" /></SwiperSlide>
        <SwiperSlide><img src={tabiat8} alt="" className="q8" /></SwiperSlide>
        <SwiperSlide><img src={tabiat9} alt="" className="q9" /></SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper4"
      >
        <SwiperSlide><img className='q3' src={tabiat} alt="" /></SwiperSlide>
        <SwiperSlide><img className="q2" src={tabiat2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q1' src={tabiat3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q4' src={tabiat4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={tabiat5} alt="" className="q5" /></SwiperSlide>
        <SwiperSlide><img src={tabiat6} alt="" className="q6" /></SwiperSlide>
        <SwiperSlide><img src={tabiat7} alt="" className="q7" /></SwiperSlide>
        <SwiperSlide><img src={tabiat8} alt="" className="q8" /></SwiperSlide>
        <SwiperSlide><img src={tabiat9} alt="" className="q9" /></SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-125%', 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ['125%', 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper5"
      >
        <SwiperSlide><img className='q3' src={tabiat} alt="" /></SwiperSlide>
        <SwiperSlide><img className="q2" src={tabiat2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q1' src={tabiat3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q4' src={tabiat4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={tabiat5} alt="" className="q5" /></SwiperSlide>
        <SwiperSlide><img src={tabiat6} alt="" className="q6" /></SwiperSlide>
        <SwiperSlide><img src={tabiat7} alt="" className="q7" /></SwiperSlide>
        <SwiperSlide><img src={tabiat8} alt="" className="q8" /></SwiperSlide>
        <SwiperSlide><img src={tabiat9} alt="" className="q9" /></SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
        <SwiperSlide><img className='q3' src={tabiat} alt="" /></SwiperSlide>
        <SwiperSlide><img className="q2" src={tabiat2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q1' src={tabiat3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='q4' src={tabiat4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={tabiat5} alt="" className="q5" /></SwiperSlide>
        <SwiperSlide><img src={tabiat6} alt="" className="q6" /></SwiperSlide>
        <SwiperSlide><img src={tabiat7} alt="" className="q7" /></SwiperSlide>
        <SwiperSlide><img src={tabiat8} alt="" className="q8" /></SwiperSlide>
        <SwiperSlide><img src={tabiat9} alt="" className="q9" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
