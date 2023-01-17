import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import dayjs from "dayjs";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import "../calendar.css";
import singleRoom from "../images/room1/singleRoom.jpeg";
import backHome from "../images/back home.png";
import RoomCarousel from "../components/RoomCarousel";
import RoomDetail from "../container/RoomDetail";
import Dialog from "../container/Dialog";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
const url = "https://challenge.thef2e.com/api/thef2e2019/stage6/room";
const token =
  "Bearer IAlFGuHujADexllpJHWL1MenPYbizgbL00yxoV8wLs9zfZxS4hgs0wVo6E6b";
const authorization = { headers: { Authorization: token } };
import { ModalProvider } from "react-modal-hook";
import { log } from "react-modal/lib/helpers/ariaAppHider";


export function Rooms() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const getRoomInfo = async () => {
      const res = await axios.get(`${url}/${id}`, authorization);
      setData(res.data.room[0]);
    };
    getRoomInfo();
  }, []);

  const [bgStatus, setBgStatus] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(),1),
      key: "selection",
    },
  ]);
  const tomorrow = dayjs().startOf("day").add(1, "day");
  const date1 = dayjs(dayjs(state[0].startDate).format("YYYY-MM-DD"));
  const date2 = dayjs(dayjs(state[0].endDate).format('YYYY-MM-DD'));
  const diffWithDay = date2.diff(date1,'day'); 
  console.log(diffWithDay);

  let showBg = bgStatus === true ? <Dialog setBgStatus={setBgStatus} state={state}/> : "";
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
    <div className="RoomPage flex h-screen justify-between">
      {showBg}
      {/* Nav */}
      <nav className="w-[42%] h-full flex flex-col justify-between fixed">
        {/* 輪播圖 */}
        <ModalProvider>
          {data.imageUrl ? <RoomCarousel data={data}/> :null}          
        </ModalProvider>
        {/* 返回首頁按鈕 */}
        <button
          type="button"
          className="flex items-center relative mt-[87px] pl-[13vh]"
        >
          <img src={backHome} alt="backHome" className="m-[10px] " />
          <NavLink
            to="/"
            className="font-light text-sm 2xl:text-base 3xl:text-lg text-primary"
          >
            查看其他房型
          </NavLink>
        </button>
        {/* 價格＆預約按鈕 */}
        <div className=" flex flex-col relative mb-[13vh] items-center">
          <div className="mb-[10px]">
            <span className="text-[36px] text-primary">$1,380 </span>
            <span className="text-xl text-primary">{` / ${diffWithDay}晚`}</span>
          </div>

          <button
            type="button"
            onClick={BgSwitch}
            className="text-xl text-white bg-primary py-[8.5px] w-[252px] block hover:opacity-50"
          >
            Booking Now
          </button>
        </div>
      </nav>
      <div className="container flex">
        {/* 因nav改fixed出現的佔位格 */}
        <div className="w-[42%] mr-[30px] flex-shrink-0 "></div>
        {/* 房間細節 */}
        <div className="h-[200vh] mt-[13vh]  w-[635px] text-primary">
          <RoomDetail data={data} />
          <p className="text-primary text-sm font-medium mb-2 leading-6">
            空房狀態查詢
          </p>
          {/* 日曆佔位格 */}
            <DateRangePicker
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              showMonthAndYearPickers={false}
              minDate={dayjs(state.startDate).toDate()}
              maxDate={tomorrow.add(89, "day").toDate()}
              color="rgb(56, 71, 11)"
              date={new Date(state.endDate)}
            />
        </div>
      </div>
    </div>
  );
}
