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

  // const indicatorsStyle = {
  //   position: "absolute",
  //   bottom: "46px",
  //   left: "200px",
  // };

  // const indicators = {
  //   indicators: <div style={{ ...indicatorsStyle }}></div>,
  // };

  // const indicators = () => <div className="indicator" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>;

  return (
    <div className="w-full h-full -z-10 absolute">
      {/* <Slide {...properties} indicators={true}>
        {images.map((item, index) => (
          <div key={index} className="each-slide-effect h-screen">
            <div key={index} style={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${item})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode :"multiply",
                backgroundColor:"#000000",
                opacity:0.6,
              }}>
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                alt="Slide Image"
                src={item}
              />
            </div>
          </div>
        ))}
      </Slide> */}
      <Slide {...properties} indicators={true}>
        <div className="each-slide-effect">
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${images[0]})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
              backgroundColor: "(0,0,0,0.6)",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${images[1]})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
              backgroundColor: "(0,0,0,0.6)",
            }}></div>
        </div>
        <div className="each-slide-effect">
          <div style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${images[2]})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
              backgroundColor: "(0,0,0,0.6)",
            }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default HomeCarousel;
