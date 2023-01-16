import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import homeCarouselFirst from "../images/house/homeCarouselFirst.jpeg";
import homeCarouselSecond from "../images/house/homeCarouselSecond.jpeg";
import homeCarouselThird from "../images/house/homeCarouselThird.jpeg";
import homeCarouselFourth from "../images/house/homeCarouselFourth.jpeg";


const HomeCarousel = () => {
  const images = [
    homeCarouselFirst,
    homeCarouselSecond,
    homeCarouselThird,
    homeCarouselFourth,
  ];

  // 取消輪播 prev & next button
  const buttonStyle = {
    display: "none",
  };
  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>,
  };

  return (
    <div className="w-full h-full absolute">
      <Slide {...properties} indicators={true}>
        <div className="each-slide-effect">
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.6)",
              backgroundImage: `url(${images[0]})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.6)",
              backgroundImage: `url(${images[1]})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.6)",
              backgroundImage: `url(${images[2]})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.6)",
              backgroundImage: `url(${images[3]})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
};

export default HomeCarousel;
