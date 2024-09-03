import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import video1 from './assets/video1.mp4';
import video2 from './assets/video2.mp4';
import video3 from './assets/video3.mp4';
import video4 from './assets/video4.mp4';
import video5 from './assets/video5.mp4';
import video6 from './assets/video6.mp4';
import video7 from './assets/video7.mp4';
import video8 from './assets/video8.mp4';

const videos = [video1, video2, video3, video4, video5, video6, video7, video8];

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3, // Adjust based on how many slides you want visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false, // Remove default arrows
    dotsClass: 'slick-dots custom-dots',
    centerMode: true, // Center the active slide
    centerPadding: '0', // Remove default padding
  };

  return (
    <div className="bg-gradient-to-r h-screen from-blue-50 to-blue-100 py-12">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">What We Offer</h1>
        <p className="text-lg text-gray-700">
          Discover a curated selection of our most engaging videos. Explore and enjoy the best of what we offer!
        </p>
      </div>
      <div className="px-4 mt-20">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="h-full px-2">
              <video
                className="h-96 w-full"
                controls
                muted
                loop
                playsInline
                src={video}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About;
