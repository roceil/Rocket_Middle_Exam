import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import singleRoom from "../images/room1/singleRoom.jpeg";
import singleRoom2 from "../images/room1/singleRoom2.jpeg";
import singleRoom3 from "../images/room1/singleRoom3.jpeg";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

const RoomCarousel = () => {
  // 輪播圖片
  const images = [singleRoom, singleRoom2, singleRoom3];

  // 取消輪播 prev & next button
  const buttonStyle = {
    display: "none",
  };
  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>,
  };

  const modalButtonStyle = {
    color: "#ffffff",
    outline: "none",
    border: "none",
  };

  // 設定 modal prev & next button
  let opacityFirst = "";
  images.map((item, index) => {
    // console.log(index,item)
    opacityFirst =
      index === 0
        ? (modalButtonStyle.opacity = "0.2")
        : (modalButtonStyle.opacity = "1");
  });

  const modalProperties = {
    prevArrow: (
      <button style={{ ...modalButtonStyle, opacity: "0.2" }}>
        <span className="material-icons text-[58px]">arrow_back_ios</span>
      </button>
    ),
    nextArrow: (
      <button style={{ ...modalButtonStyle }}>
        <span className="material-icons text-[58px]">arrow_forward_ios</span>
      </button>
    ),
  };

  // 輪播彈窗
  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      isOpen
      className="px-[128px] h-screen"
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.7)",
        },
      }}
      onRequestClose={hideModal}
    >
      <Slide
        {...modalProperties}
        autoplay={false}
        infinite={false}
        className="w-full"
        onClick={hideModal}
        onChange={(e) => console.log(e)}
        // firstSlideProps={{ prevArrow: { opacity: "0.2" } }}
      >
        {images.map((item, index) => {
          return (
            <div
              key={index}
              onClick={hideModal}
              className="each-slide-effect flex justify-center items-center h-screen"
            >
              <div
                style={{
                  width: "80%",
                  height: "90vh",
                  backgroundImage: `url(${item})`,
                  backgroundPosition: "center center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          );
        })}
      </Slide>
    </ReactModal>
  ));

  return (
    <div className="w-[573px] h-full absolute cursor-pointer">
      <Slide {...properties} indicators={true}>
        {images.map((item, index) => {
          return (
            <div className="each-slide-effect" key={index}>
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  background:
                    "transparent linear-gradient(180deg, #FFFFFF00 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
                  backgroundImage: `url(${item})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundBlendMode: "multiply",
                }}
                onClick={showModal}
              ></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default RoomCarousel;
