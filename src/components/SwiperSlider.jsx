import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import jetnet from "../images/jetnet.png";
// import mixcart from "../images/mixcart.png";
// import studyPlanner from "../images/study_planner.png";
import tmovieImg from "../images/tmovie-project.png";
import entHubImg from "../images/entertainment-hub.png";
import jsAnimationImg from "../images/javascript-animation-project.png";
import appleWebImg from "../images/ultimate-animation.png";
import { Mousewheel } from "swiper";
import "swiper/css";
import "./SwiperSlider.css";

// const sliderData = [
//   { title: "Mixcart", desc: "A freshly Made E-commerce", img: mixcart },
//   {
//     title: "Jenet",
//     desc: "A concept Social Media Start-up Website App",
//     img: jetnet,
//   },
//   {
//     title: "My Study Planner",
//     desc: "Organize your homework, evaluations, and to-dos with your friends",
//     img: studyPlanner,
//   },
// ];
const sliderData = [
  {
    title: "The Movie",
    desc: "Movie website with the api of TMDB.",
    img: tmovieImg,
    link: "https://tmovie-project.herokuapp.com/",
  },
  {
    title: "A G E N C Y",
    desc: "Javascript Animations Website.",
    img: jsAnimationImg,
    link: "https://javascript-animation.herokuapp.com/",
  },
  {
    title: "Entertainment Hub",
    desc: "Movie Website with advance filters and search.",
    img: entHubImg,
    link: "https://entertainment-hub-tmovie.herokuapp.com/",
  },
  {
    title: "Apple Animated Website",
    desc: "Apple Animated Website with javascript animation",
    img: appleWebImg,
    link: "https://kaungwintshein.github.io/animated-apple-website/",
  },
];
const SwiperSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Mousewheel]}
        slidesPerView="auto"
        spaceBetween={100}
        speed={1300}
        centeredSlides
        mousewheel
        loop
        grabCursor
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          0: {
            // slidesPerView: 1,
            slidesPerView: "auto",
            spaceBetween: 10,
          },
          700: {
            slidesPerView: "auto",
            spaceBetween: 50,
          },
        }}
      >
        <div className="swiper-wrapper">
          {sliderData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="slider-img">
                <img src={data.img} alt="" />
              </div>
              <div className="slider-text">
                <div className="text">
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                  <a href={data.link} className="button">
                    View
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
