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
import { Loading } from "../components/Loading";


function RoomDetail({data}) {
  // console.log(data);
  let roomData = data;
  // 房型資訊斷句
  let roomInfo = data.description?.split(/\.\s+/)
  // 房型 icons
  const iconsAry = [AC, BF, Child, View, Bar, Pet, Ref, Service, Smoke, Sofa, TV, WiFi]
  // icons 名稱
  const iconsName = ['空調', '早餐', '適合兒童', '漂亮的視野', 'Mini Bar', '攜帶寵物', '冰箱', '客房服務', '全面禁菸', '沙發', '電話', 'WiFi'];
  // icons true & false 值
  const itemsAry = [];

  // roomData.amenities 屬性轉陣列 -> 再將值生成新陣列 -> 用 index 跟 iconsAry 比對
  Object.keys(data.amenities?data.amenities:{}).map((item)=>{
    itemsAry.push(data.amenities[item]);
  })

  // API 英文資料轉中文
  let bedType = '';
  if(roomData.descriptionShort?.['Bed'][0]==='Small Double'){
    bedType = '小張雙人床';
  }else if (roomData.descriptionShort?.['Bed'][0]==='Double'){
    bedType = '雙人床';
  }else if (roomData.descriptionShort?.['Bed'][0]==='Single'){
    bedType = '單人床';
  }else if (roomData.descriptionShort?.['Bed'][0]==='Queen'){
    bedType = '雙人床加大';
  }

  // useEffect(() => {
  // // //     // // 字串轉中文（待處理）
  // // //     // roomDescription = new Intl.Locale(roomData.description, 'zh-TW');
  // // //     //   if(roomData.description !== undefined){
  // // //     //   roomDescription = new Intl.Locale(roomData.description, 'zh-TW');
  // // //     // }

  function Loading(){
    setTimeout(function() {
      return(
        <div>
          <h1 className="bg-light-primary text-white">像家一樣・溫暖自在</h1>
        </div>
      )
    }, 1700)
  }

  return (
    <>
      <p className="w-full mb-12 text-right mb-[47px]leading-6">
      {roomData.descriptionShort?.['GuestMax']}人
      ・ {bedType} {roomData.descriptionShort?.['Bed'].length}張
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
      <ul className="flex flex-wrap gap-x-9 gap-y-[26px] mb-7">
        {iconsAry.map((item, i) => {
          return (
            <li key={i} className="flex  mb-[26px]">
              <div className="flex flex-col space-y-2 items-center">
                <img src={item} alt="" className= {itemsAry[i] ? 'w-10 h-10 ' : 'opacity-30 w-10 h-10'}/>
                <p className={itemsAry[i] ? 'text-[10px] mt-2 text-center' : 'opacity-30 text-[10px] mt-2 text-center'}>{iconsName[i]}</p>
              </div>                
              <img
                  src={itemsAry[i] ? OK : Cancel}
                  alt=""
                  className= {itemsAry[i] ? 'w-[15px] h-[15px] ml-1' :'opacity-30 w-[15px] h-[15px] ml-1'}
                />
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default RoomDetail;