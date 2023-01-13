import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import singleRoom from "../images/room1/singleRoom.jpeg";
import singleRoom2 from "../images/room1/singleRoom2.jpeg";
import singleRoom3 from "../images/room1/singleRoom3.jpeg";
import '../roomCarousel.css'


const RoomCarousel = () => {
  const images = [singleRoom, singleRoom2, singleRoom3];

  // 取消輪播 prev & next button
  const buttonStyle = {
    display: "none",
  };
  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>,
  };

  return (
    <div className="w-[573px] h-full absolute">
      <Slide {...properties} indicators={true}>
        <div className="each-slide-effect ">
          <div
            style={{
              width: "100%",
              height: "100vh",
              background: "transparent linear-gradient(180deg, #FFFFFF00 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
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
              background: "transparent linear-gradient(180deg, #FFFFFF00 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
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
              background: "transparent linear-gradient(180deg, #FFFFFF00 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
              backgroundImage: `url(${images[2]})`,
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

export default RoomCarousel;
