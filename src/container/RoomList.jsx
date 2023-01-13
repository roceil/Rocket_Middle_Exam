import { useState, useEffect } from "react";
import  RoomItems  from '../component/RoomItems';


function RoomList() {
  return (
    <>
      <ul className="flex flex-wrap justify-end">
        <RoomItems/>
        <RoomItems/>
        <RoomItems/>
        <RoomItems/>
        <RoomItems/>
        <RoomItems/>
      </ul>
    </>
  )
  }
  
  export default RoomList;