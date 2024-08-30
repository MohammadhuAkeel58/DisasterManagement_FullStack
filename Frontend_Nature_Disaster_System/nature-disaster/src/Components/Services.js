import React from 'react';

import SelectsDisas from '../Components/SelectsDisas';

import Fire from '../IMG/img4.jpg'
import Tornado from '../IMG/img1.jpg';
import Tsunami from '../IMG/img2.webp';
import Flood from '../IMG/img3.jpg';
import Earthquake from '../IMG/img5.jpeg';
import Cyclone from '../IMG/img6.jpeg';
import LandSlide from '../IMG/img7.png';
import Storm from '../IMG/img8.jpg';

function Services() {
  
  return (
    <div name='package' className='package w-full text-center pt-20'>
      <h1 className='text-4xl font-bold py-4'>Services</h1>
      <div className='img-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <SelectsDisas bgImg={Fire} text='Fire' />
        <SelectsDisas bgImg={Tornado} text='Tornado' />
        <SelectsDisas bgImg={Tsunami} text='Tsunami' />
        <SelectsDisas bgImg={Earthquake} text='Earthquake' />
        <SelectsDisas bgImg={Storm} text='Storm' />
        <SelectsDisas bgImg={LandSlide} text='Land Slide' />
        <SelectsDisas bgImg={Cyclone} text='Cyclone' />
        <SelectsDisas bgImg={Flood} text='Flood' />
      </div>
    </div>
  );
}

export default Services;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    