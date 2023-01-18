import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useForm, useWatch } from "react-hook-form";
import { addDays } from "date-fns";
import dayjs from "dayjs";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import "../calendar.css";
import backHome from "../images/back home.png";
import RoomCarousel from "../components/RoomCarousel";
import RoomDetail from "../container/RoomDetail";
import Dialog from "../container/Dialog";
import { Loading } from "../components/Loading";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
const url = "https://challenge.thef2e.com/api/thef2e2019/stage6/room";
const token =
  "Bearer IAlFGuHujADexllpJHWL1MenPYbizgbL00yxoV8wLs9zfZxS4hgs0wVo6E6b";
const authorization = { headers: { Authorization: token } };
import { ModalProvider } from "react-modal-hook";
import BookingSuccess from "../components/BookingSuccess";
import BookingFail from "../components/BookingFail";
import { log } from "react-modal/lib/helpers/ariaAppHider";
import AC from "../images/amenities/icon_amenities_Air-Conditioner.svg";
import BF from "../images/amenities/icon_amenities_Breakfast.svg";
import Child from "../images/amenities/icon_amenities_Child-Friendly.svg";
import View from "../images/amenities/icon_amenities_Great-View.svg";
import Bar from "../images/amenities/icon_amenities_Mini-Bar.svg";
import Pet from "../images/amenities/icon_amenities_Pet-Friendly.svg";
import Ref from "../images/amenities/icon_amenities_Refrigerator.svg";
import Service from "../images/amenities/icon_amenities_Room-Service.svg";
import Smoke from "../images/amenities/icon_amenities_Smoke-Free.svg";
import Sofa from "../images/amenities/icon_amenities_Sofa.svg";
import TV from "../images/amenities/icon_amenities_Television.svg";
import WiFi from "../images/amenities/icon_amenities_Wi-Fi.svg";

export function Rooms() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [disabledDays, setDisabledDays] = useState([]);

  // 取得單一房間資料API
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${url}/${id}`, authorization);
      const booking = await res.data.booking;
      booking.map((item) => {
        setDisabledDays(prev => {
          return [...prev, new Date(item.date)]
        });
      });
      setData(res.data.room[0]);
    })();
  }, []);

  const initCalendar = {
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 2),
    key: "selection",
  }
  const resetCalendar = () => {
    setState([initCalendar]);
    setValue(
      "checkInDate",
      dayjs(initCalendar.startDate).format("YYYY-MM-DD")
    );
    setValue(
      "checkOutDate",
      dayjs(initCalendar.endDate).format("YYYY-MM-DD")
    );
  }
  const [state, setState] = useState([
    initCalendar,
  ]);


  // 處理日期套件

  // 用來抓預設日期
  let checkInDate = dayjs(state[0].startDate).format("YYYY-MM-DD");
  let checkOutDate = dayjs(state[0].endDate).format("YYYY-MM-DD");
  // 用來算天數
  const diffWithDay = dayjs(checkOutDate).diff(dayjs(checkInDate), "day");
  console.log();
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
  }, [watchForm]);
  // ? 平日假日計算金額
  const price = calPrice(state[0].startDate, diffWithDay);
  // ? Dialog計算金額
  const DialogStartDate = dayjs(getValues().checkInDate).$d;
  const DialogDiffDay = dayjs(getValues().checkOutDate).diff(dayjs(getValues().checkInDate), "day");
  const DialogPrice = calPrice(DialogStartDate, DialogDiffDay);
  const DialogDate = calDate(DialogStartDate, DialogDiffDay)

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
      setSuccess(true);
      setDisabledDays(prev => {
        return [...prev, new Date(customerData.date)]
      })
      console.log(res.data);
    } catch (error) {
      setBgStatus(false);
      setFail(true);
      console.log(error);
    }
  };
  const [success, setSuccess] = useState(false);
  const closeSuccess = () => {
    setSuccess(false);
  };
  let showSuccess =
    success === true ? <BookingSuccess closeSuccess={closeSuccess} /> : "";

  const [fail, setFail] = useState(false);
  const closeFail = () => {
    setFail(false);
  };
  let showFail = fail === true ? <BookingFail closeFail={closeFail} /> : "";

  const [bgStatus, setBgStatus] = useState(false);
  const closeBg = () => {
    setBgStatus(false);
  };


  // 房型頁需用到的資訊
  let roomData = data;
  // 房型資訊斷句
  let roomInfo = data.description?.split(/\.\s+/);
  // 房型 icons
  const iconsAry = [
    AC,
    BF,
    Child,
    View,
    Bar,
    Pet,
    Ref,
    Service,
    Smoke,
    Sofa,
    TV,
    WiFi,
  ];
  // icons 名稱
  const iconsName = [
    "空調",
    "早餐",
    "適合兒童",
    "漂亮的視野",
    "Mini Bar",
    "攜帶寵物",
    "冰箱",
    "客房服務",
    "全面禁菸",
    "沙發",
    "電話",
    "WiFi",
  ];
  // icons true & false 值
  const itemsAry = [];

  // roomData.amenities 屬性轉陣列 -> 再將值生成新陣列 -> 用 index 跟 iconsAry 比對
  Object.keys(data.amenities ? data.amenities : {}).map((item) => {
    itemsAry.push(data.amenities[item]);
  });

  // API 英文資料轉中文
  let bedType = "";
  if (roomData.descriptionShort?.["Bed"][0] === "Small Double") {
    bedType = "小張雙人床";
  } else if (roomData.descriptionShort?.["Bed"][0] === "Double") {
    bedType = "雙人床";
  } else if (roomData.descriptionShort?.["Bed"][0] === "Single") {
    bedType = "單人床";
  } else if (roomData.descriptionShort?.["Bed"][0] === "Queen") {
    bedType = "雙人床加大";
  }

  let showBg =
    bgStatus === true ? (
      <Dialog
        setBgStatus={setBgStatus}
        register={register}
        handleSubmit={handleSubmit}
        setValue={setValue}
        errors={errors}
        sendData={sendData}
        closeBg={closeBg}
        roomData={roomData}
        roomInfo={roomInfo}
        iconsAry={iconsAry}
        iconsName={iconsName}
        itemsAry={itemsAry}
        bedType={bedType}
        DialogCheckingInfo={{ DialogPrice, DialogDate }}
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


  
  return (
    <>
    {data.length===0 ? <Loading text='傳 送 中  (⁎⁍̴̛ᴗ⁍̴̛⁎) '/> :null}
    <div className="animate-fadeIn RoomPage flex h-screen justify-between relative -z-10">
      {showFail}
      {showSuccess}
      {showBg}
      {/* Nav */}
      <nav className="w-[42%] h-full flex flex-col justify-between fixed">
        {/* 輪播圖 */}
        <ModalProvider>
          {data.imageUrl ? <RoomCarousel data={data} /> : null}
        </ModalProvider>
        {/* 返回首頁按鈕 */}
        <NavLink
          to="/"
          className="font-light text-sm 2xl:text-base 3xl:text-lg text-primary"
        >
        <button
          type="button"
          className="flex items-center relative mt-[87px] ml-[13vh]"
        >
          <img src={backHome} alt="backHome" className="m-[10px] " />
            查看其他房型
        </button>
          </NavLink>
        {/* 價格＆預約按鈕 */}
        <div className=" flex flex-col relative mb-[13vh] items-center">
          <div className="mb-[10px]">
            <span className="text-[36px] text-primary">
              {`$${price ? price.toLocaleString() : 0}`}{" "}
            </span>
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
        <div className=" mt-[13vh]  w-[635px] text-primary">
          <RoomDetail
            data={data}
            roomData={roomData}
            roomInfo={roomInfo}
            iconsAry={iconsAry}
            iconsName={iconsName}
            itemsAry={itemsAry}
            bedType={bedType}
          />
          <p className="text-primary text-sm font-medium mb-2 leading-6">
            空房狀態查詢
          </p>
          {/* 日曆佔位格 */}
          <DateRangePicker
            onChange={(item) => {
              setState([item.selection]);
              setValue("checkInDate", dayjs(item.selection.startDate).format("YYYY-MM-DD"));
              setValue("checkOutDate", dayjs(item.selection.endDate).format("YYYY-MM-DD"));
            }}
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
            disabledDates={disabledDays}
          />
          <button className="text-sm mt-[6px] text-light-primary hover:text-primary hover:duration-300 mb-8" onClick={resetCalendar}
          >重新選擇</button>
        </div>
      </div>
    </div>
    </>
  );

  function calPrice(startDate, totalDay) {
    const weekAry = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let index = weekAry.indexOf(String(startDate).slice(0, 3)); // Tue
    let price = 0;
    let weekCount = index;
    for (let i = 0; i < totalDay; i++) {
      if (weekCount === 5 || weekCount === 6 || weekCount === 0) {
        price += data.holidayPrice;
      } else {
        price += data.normalDayPrice;
      }
      weekCount += 1;
      if (weekCount === 7) weekCount = 0;
    }
    return price;
  }
  function calDate(startDate, totalDay) {
    const weekAry = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let index = weekAry.indexOf(String(startDate).slice(0, 3)); // Tue
    let weekCount = index;
    let normalDayCount = 0;
    let holidayCount = 0;
    for (let i = 0; i < totalDay; i++) {
      if (weekCount === 5 || weekCount === 6 || weekCount === 0) {
        holidayCount += 1
      } else {
        normalDayCount += 1
      }
      weekCount += 1;
      if (weekCount === 7) weekCount = 0;
    }
    return {
      totalDay: totalDay + 1,
      normalDayCount: normalDayCount,
      holidayCount: holidayCount
    }
  }
}
