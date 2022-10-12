import React from "react";
import "./Technologies.css";
import { technologies } from "../../assets/information";
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Technologies = () => {
  return (
    <section id="technologies" className="tech">
      <h2>Technologies</h2>
      <h5 className="text-light">
        As a programmer, I find that learning about new technologies help my
        development, and gives me new tools to improve my apps.
      </h5>
      <Swiper
        className="container technologies"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {technologies.map((item, index) => {
          return (
            <SwiperSlide key={index} className="techno">
              <div className="techno-details">
                <div className="logo">
                  <img src={item.img} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <small className="description">{item.description}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Technologies;
