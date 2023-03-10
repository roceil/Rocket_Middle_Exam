import React, { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import singleRoom from "../images/room1/singleRoom.jpeg";
import singleRoom2 from "../images/room1/singleRoom2.jpeg";
import singleRoom3 from "../images/room1/singleRoom3.jpeg";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

function RoomCarousel({ data, toggleOpen }) {
  // 輪播圖片(本地)
  // const images = [singleRoom, singleRoom2, singleRoom3];

  // 輪播圖片(接 API)
  // console.log(data);
  // console.log(data.imageUrl);

  // 取消輪播 prev & next button
  const buttonStyle = {
    display: "none",
  };
  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>,
  };

  // 彈窗的 arrow
  const modalProperties = {
    prevArrow: (
      <button className="modalArrow">
        <span className="material-icons text-[58px]">arrow_back_ios</span>
      </button>
    ),
    nextArrow: (
      <button className="modalArrow">
        <span className="material-icons text-[58px]">arrow_forward_ios</span>
      </button>
    ),
  };

  // 輪播彈窗
  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      isOpen
      appElement={document.getElementById("root")}
      ariaHideApp={false}
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
      >
        {data.imageUrl?.map((item, index) => {
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
                  backgroundImage: `url('${item}')`,
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
    <div className="w-full h-full absolute cursor-pointer">
      <Slide {...properties} indicators={true}>
        {data.imageUrl.map((item, index) => {
          // console.log(item);
          return (
            <div className="each-slide-effect" key={index}>
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundImage: `url('${item}')`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="imgMask"
                onClick={showModal}
              ></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}

export default RoomCarousel;
