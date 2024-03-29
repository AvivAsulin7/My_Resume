import React from "react";
import "./Technologies.css";
import { technologies } from "../../assets/information";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Reveal from "../Reveal";

const Technologies = () => {
  return (
    <section id="technologies" className="tech">
      <Reveal>
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
          style={{
            "--swiper-pagination-color": "#4db5ff",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
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
      </Reveal>
    </section>
  );
};

export default Technologies;
