import { useEffect, useState } from "react";

import singleRoom from "../images/room1/singleRoom.jpeg";
import backHome from "../images/back home.png";
import AC from "../images/amenities/icon_amenities_Air-Conditioner.svg";
import OK from "../images/amenities/icons-ok.svg";
import RoomCarousel from "../components/RoomCarousel";
import RoomDetail from "../container/RoomDetail";
import Dialog from "../container/Dialog"
import { NavLink,useParams } from "react-router-dom";
import axios from 'axios'
const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/room';
const token = 'Bearer IAlFGuHujADexllpJHWL1MenPYbizgbL00yxoV8wLs9zfZxS4hgs0wVo6E6b';
const authorization = { 'headers': { 'Authorization': token } };
import { ModalProvider } from "react-modal-hook";

export function Rooms() {
  const {id} = useParams();
  console.log(id);  
  
  const [data,setData] = useState([])
  useEffect(() => {
    console.log('2,渲染完後得effect')
    const getRoomInfo = async () => {
      const res = await axios.get(`${url}/${id}`, authorization)
      setData(res.data.room[0]);
    }

    getRoomInfo();
  }, [])


  // const iconAry = [];
  // for (let i = 0; i < 8; i++) {
  //   iconAry.push("");
  // }

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
      <nav className="w-[42%] h-full fixed">
        {/* 輪播圖 */}
        <ModalProvider>
          <RoomCarousel />
        </ModalProvider>
        <div className="buttonGroup flex relative h-screen pt-[87px] pb-[25vh] flex-col justify-between z-10">
          {/* 返回首頁按鈕 */}
          <button
            type="button"
            className="flex items-center pl-[13vh]"
          >
            <img src={backHome} alt="backHome" className="m-[10px] " />
            <NavLink to="/" className="font-light text-sm 2xl:text-base 3xl:text-lg text-primary">
              查看其他房型
            </NavLink >
          </button>
          {/* 價格＆預約按鈕 */}
          <div className=" flex flex-col items-center">
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
      <div className="container flex">
        {/* 因nav改fixed出現的佔位格 */}
        <div className="w-[42%] mr-[30px] flex-shrink-0 "></div>
        {/* 房間細節 */}
        <div className="h-[200vh] mt-[13vh]  w-[635px] text-primary">
          <RoomDetail data={data}/>
          <p className="text-primary text-sm font-medium mb-2 leading-6">空房狀態查詢</p>
          {/* 日曆佔位格 */}
          <div className="h-[50vh] bg-red-400">
            <h1>我大概率是日曆</h1>
          </div>
        </div>
      </div>

    </div>
  );
}
