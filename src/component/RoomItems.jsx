import { useState, useEffect } from "react";
import singleRoom from "../images/room1/singleRoom.jpeg";

function RoomItems() {
  return (
    <li>
      <img
        src={singleRoom}
        alt="singleRoom"
        className="w-[275px] h-[275px]" />
    </li>
  )
  }
  
export default RoomItems;