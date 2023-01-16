import { useState, useEffect } from "react";
import axios from 'axios'
import AC from "../images/amenities/icon_amenities_Air-Conditioner.svg";
import OK from "../images/amenities/icons-ok.svg";

function RoomDetail({data}) {
  console.log(data);
  // 整理 API 資料
  const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/room';
  const token = 'Bearer IAlFGuHujADexllpJHWL1MenPYbizgbL00yxoV8wLs9zfZxS4hgs0wVo6E6b';
  const authorization = { 'headers': { 'Authorization': token } };
  const id = '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu';
  // // 抓 data
  // const [roomData, setRoomData] = useState({});
  // // 房型資訊斷句
  // const [roomInfo, setRoomInfo] = useState([]);
  let roomData = data;
  let roomInfo = data.description?.split(/\.\s+/)
  const iconAry = [];
  for (let i = 0; i < 8; i++) {
    iconAry.push("");
  }
  console.log(1, '渲染中');

  // useEffect(() => {
  //   console.log('2,渲染完後得effect')
  //   const getRoomInfo = async () => {
  //     const res = await axios.get(`${url}/${id}`, authorization)
  //     // console.log(res.data.room[0]);
  //     setRoomData(res.data.room[0]);
  //     // 處理斷句
  //     setRoomInfo(res.data.room[0].description.split(/\.\s+/))
  //     // 字串轉中文（待處理）
  //     // roomDescription = new Intl.Locale(roomData.description, 'zh-TW');
  //     //   if(roomData.description !== undefined){
  //     //   roomDescription = new Intl.Locale(roomData.description, 'zh-TW');
  //     // }
  //   }

  //   getRoomInfo();
  // }, [])
  // console.log(roomData);
  return (
    <>
    {data.length===0?<h1 className="bg-red-400">Loading</h1>:null}
      <p className="w-full mb-12 text-right mb-[47px]leading-6">
        1人・ 單人床・ 附早餐・{roomData.descriptionShort?.['Private-Bath']}衛浴間・{roomData.descriptionShort?.Footage}平方公尺
      </p>
      <p className="mb-[35px] text-sm leading-6">
        平日（一～四）價格：{roomData.normalDayPrice} / 假日（五〜日）價格：{roomData.holidayPrice} <br />
        入住時間：{roomData.checkInAndOut?.checkInEarly}（最早）/ {roomData.checkInAndOut?.checkInLate}（最晚）
        <br />
        退房時間：{roomData.checkInAndOut?.checkOut}
      </p>
      {/* description（待處理：轉中文） */}
      <ul className="text-primary text-sm font-light mb-12 leading-6">
        {roomInfo?.map((item,index) => (
            <li key={index}>・{item}</li>
        ))}
      </ul>
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
    </>
  )
}

export default RoomDetail;