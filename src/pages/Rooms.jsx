import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useForm, useWatch } from "react-hook-form";
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
import BookingSuccess from "../components/BookingSuccess";

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
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ]);
  // 處理日期套件
  let checkInDate = dayjs(state[0].startDate).format("YYYY-MM-DD");
  let checkOutDate = dayjs(state[0].endDate).format("YYYY-MM-DD");
  const {
    register,
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    },
    mode: "onTouched",
  });
  const watchForm = useWatch({ control });
  useEffect(() => {
    const getResult = getValues();
    customerData.name = getResult.name;
    customerData.tel = getResult.tel;
    customerData.date = [getResult.checkInDate];
    console.table(getResult);
  }, [watchForm]);
  const date1 = dayjs(dayjs(state[0].startDate).format("YYYY-MM-DD"));
  const date2 = dayjs(dayjs(state[0].endDate).format("YYYY-MM-DD"));
  const diffWithDay = date2.diff(date1, "day");

  // 處理API POST
  const customerData = {
    name: "",
    tel: "",
    date: [],
  };
  const sendData = async () => {
    try {
      const res = await axios.post(`${url}/${id}`, customerData, authorization);
      setBgStatus(false);
      setSuccess(true)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [success, setSuccess] = useState(false);
  let showSuccess = success === true ? <BookingSuccess /> : "";

  let showBg =
    bgStatus === true ? (
      <Dialog
        setBgStatus={setBgStatus}
        state={state}
        url={url}
        id={id}
        authorization={authorization}
        register={register}
        handleSubmit={handleSubmit}
        setValue={setValue}
        errors={errors}
        sendData={sendData}
      />
    ) : (
      ""
    );
  const BgSwitch = () => {
    switch (bgStatus) {
      case false:
        setBgStatus(true);
        break;
      default:
        break;
    }
  };

  // ? 平日假日計算金額
  let price = calPrice();


  return (
    <div className="flex h-screen justify-between">
      {showSuccess}
      {showBg}
      {/* Nav */}
      <nav className="w-[42%] h-full flex flex-col justify-between fixed">
        {/* 輪播圖 */}
        <ModalProvider>
          <RoomCarousel />
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
            <span className="text-[36px] text-primary">{`$${price ? price.toLocaleString() : 0}`} </span>
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
            minDate={dayjs(state.startDate).add(1, "day").toDate()}
            maxDate={dayjs(state.startDate).add(90, "day").toDate()}
            color="rgb(56, 71, 11)"
            date={new Date(state.endDate)}
          />
        </div>
      </div>
    </div>
  );

  function calPrice() {
    const weekAry = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let index = weekAry.indexOf(String(state[0].startDate).slice(0, 3)); // Tue
    let price = 0;
    let weekCount = index;
    for (let i = 0; i < diffWithDay; i++) {
      // console.log(weekCount);
      if (weekCount === 5 || weekCount === 6 || weekCount === 0) {
        price += data.holidayPrice;
      } else {
        price += data.normalDayPrice;
      }
      weekCount += 1;
      if (weekCount === 7) { weekCount = 0; }
    }
    return price;
  }
}
