import { useState, useEffect,useRef } from "react";
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
import Cancel from "../images/amenities/icons-Cancel.svg";
import OK from "../images/amenities/icons-ok.svg";


function RoomDetail({data}) {
  console.log(data);
  let roomData = data;
  console.log(roomData.amenities);
  Object.keys(data.amenities?data.amenities:{}).map((item)=>{
    console.log(data.amenities[item]);
  })

  // const roomItems = Object.keys(roomData.amenities)

  // 房型資訊斷句
  let roomInfo = data.description?.split(/\.\s+/)

  // 房型 icons
  const iconsAry = [AC, BF, Child, View, Bar, Pet, Ref, Service, Smoke, Sofa, TV, WiFi]
  // console.log(1, '渲染中');

  // const [item, SetItem] = useState([]);

  // const CheckItems = () =>{
  //   const haveAmenities = data.amenities.Sofa === true;
  //   if (haveAmenities){
  //     return (
  //       <img
  //       src={OK}
  //       alt=""
  //       className="w-[15px] h-[15px] relative -top-[13px] -right-1 "
  //     />
  //     )
  //   } else{
  //     return (
  //       <img
  //       src={Cancel}
  //       alt=""
  //       className="w-[15px] h-[15px] relative -top-[13px] -right-1 "
  //     />
  //     )
  //   }
  // };
  useEffect(() => {
    const CheckItems = async() =>{
      const haveAmenities = await roomData.amenities?.Breakfast;
      // console.log(haveAmenities?'遲到了':'失敗了');
      // if (haveAmenities){
      //   return (
      //     <img
      //     src={OK}
      //     alt=""
      //     className="w-[15px] h-[15px] relative -top-[13px] -right-1 "
      //   />
      //   )
      // } else{
      //   return (
      //     <img
      //     src={Cancel}
      //     alt=""
      //     className="w-[15px] h-[15px] relative -top-[13px] -right-1 "
      //   />
      //   )
      // }
    };
    // 根據 true/false 顯示不同 OK 或 Cancel
  // //     // // 字串轉中文（待處理）
  // //     // roomDescription = new Intl.Locale(roomData.description, 'zh-TW');
  // //     //   if(roomData.description !== undefined){
  // //     //   roomDescription = new Intl.Locale(roomData.description, 'zh-TW');
  // //     // }
      CheckItems();
  }, [])

  // useEffect(() => {
  //   const roomItems = Object.keys(roomData.amenities)
  //   SetItem(roomItems)
  //   console.log(item);
  // }, [])

  return (
    <>
    {data.length===0?<h1 className="bg-red-400">Loading</h1>:null}
      <p className="w-full mb-12 text-right mb-[47px]leading-6">
      {roomData.descriptionShort?.['GuestMin']}-{roomData.descriptionShort?.['GuestMax']}人
      ・ {roomData.descriptionShort?.['Bed']}
      ・ 附早餐
      ・{roomData.descriptionShort?.['Private-Bath']}衛浴間
      ・{roomData.descriptionShort?.Footage}平方公尺
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
        {iconsAry.map((item, i) => {
          return (
            <li key={i} className="flex">
              <h1>123</h1>
              <img src={item} alt="" />
              {/* {CheckItems} */}
              <img
                src={true?OK:Cancel}
                alt=""
                className="w-[15px] h-[15px] relative -top-[13px] -right-1 "
              />
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default RoomDetail;