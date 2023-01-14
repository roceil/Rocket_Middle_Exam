import { useState } from "react";

import singleRoom from "../images/room1/singleRoom.jpeg";
import backHome from "../images/back home.png";
import AC from "../images/amenities/icon_amenities_Air-Conditioner.svg";
import OK from "../images/amenities/icons-ok.svg";
import RoomCarousel from "../components/RoomCarousel";
import RoomDetail from "../container/RoomDetail";
import DialogBgBlur from "../component/DialogBgBlur";
import Dialog from "../container/Dialog"
import { NavLink } from "react-router-dom";

export function Rooms() {
  const iconAry = [];
  for (let i = 0; i < 8; i++) {
    iconAry.push("");
  }

  const [bgStatus, setBgStatus] = useState(false);

  let showBg = bgStatus === true ? <Dialog setBgStatus={setBgStatus} /> : "";
  const BgSwitch = () => {
    switch (bgStatus) {
      case false:
        setBgStatus(true);
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex h-screen justify-between">
      {showBg}
      {/* Nav */}
      <nav className="w-full h-full fixed">
        {/* 輪播圖 */}
        <RoomCarousel />
        {/* nav這兩個好難定位QAQ by家洋 */}
        <div className="">
          {/* <img src={singleRoom} alt="singleRoom" className="gradient" /> */}
          {/* 返回首頁按鈕 */}
          <button
            type="button"
            className="flex items-center absolute top-[87px] left-[128px]"
          >
            <img src={backHome} alt="backHome" className="m-[10px] " />
            <NavLink to="/" className="font-light text-sm 2xl:text-base 3xl:text-lg text-primary">
              查看其他房型
            </NavLink >
          </button>
          {/* 價格＆預約按鈕 */}
          <div className=" flex flex-col items-center absolute bottom-[109px] left-[161px]">
            <div className="mb-[10px]">
              <span className="text-[36px] text-primary">$1,380 </span>
              <span className="text-xl text-primary"> / 1晚</span>
            </div>

            <button
              type="button"
              onClick={BgSwitch}
              className="text-xl text-white bg-primary py-[8.5px] w-[252px] block hover:opacity-50"
            >
              Booking Now
            </button>
          </div>
        </div>
      </nav>
      {/* 因nav改fixed出現的佔位格 */}
      <div className="w-[42%] mr-[30px] flex-shrink-0 "></div>
      {/* 房間細節 */}
      <div className="h-[200vh] mt-[13vh] mr-[13vh] w-[635px] text-primary">
        <RoomDetail />
        {/* icons */}
        <ul className="flex flex-wrap gap-x-10 gap-y-[26px] mb-7">
          {/* 01 */}
          {iconAry.map((item, i) => {
            return (
              <li key={i} className="flex">
                <img src={AC} alt="" />
                <img
                  src={OK}
                  alt=""
                  className="relative -top-[13px] -right-1 "
                />
              </li>
            );
          })}
        </ul>
        <p className="text-primary text-sm font-medium mb-2">空房狀態查詢</p>
        {/* 日曆佔位格 */}
        <div className="h-[50vh] bg-red-400">
          <h1>我大概率是日曆</h1>
        </div>
      </div>

    </div>
  );
}
