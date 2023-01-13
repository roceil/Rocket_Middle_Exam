import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import singleRoom from "../images/room1/singleRoom.jpeg";
import singleRoom2 from "../images/room1/singleRoom2.jpeg";
import singleRoom3 from "../images/room1/singleRoom3.jpeg";

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

  // const indicators = () => <div className="indicator" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>;

  return (
    <div className="w-full h-full -z-10 absolute">
      <Slide {...properties} indicators={true}>
        {images.map((item, index) => (
          <div key={index} className="each-slide-effect h-screen">
            <div
              key={index}
              style={{
                width: "100%",
                height: "100vh",
                backgroundImage: "url(" + item + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode :"multiply",
                backgroundColor:"#000000",
                opacity:0.6,
              }}
            >
              {/* <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                alt="Slide Image"
                src={item}
              /> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default RoomCarousel;
