import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function RoomModal({ toggleOpen }) {
  return (
    <div
      className=" w-screen h-screen fixed z-10 bg-red-600"
      onClick={() => toggleOpen()}
    >
      這兒要放內容
    </div>
  );
}

export default RoomModal;
