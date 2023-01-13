import { useState, useEffect } from "react";
import axios from 'axios'

function RoomDetail() {
  const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/room';
  const token = 'Bearer IAlFGuHujADexllpJHWL1MenPYbizgbL00yxoV8wLs9zfZxS4hgs0wVo6E6b';
  const authorization = {'headers': {'Authorization': token}};
  const id = '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu';
  const [roomData,setRoomData] = useState({});

  console.log(1,'渲染中');
  useEffect(()=>{
    console.log('2,渲染完後得effect')
    const getRoomInfo = async () =>{
      const res = await axios.get(`${url}/${id}`,authorization)
      console.log(res.data.room[0]);
      setRoomData(res.data.room[0]);
    }
    getRoomInfo();
  },[])
  console.log(roomData);
  return (
    <>
      <p className="w-full text-right mb-[47px]">
        1人・ 單人床・ 附早餐・{roomData.descriptionShort?.['Private-Bath']}衛浴間・{roomData.descriptionShort?.Footage}平方公尺
      </p>
      <p className="mb-[35px] text-sm">
          平日（一～四）價格：{roomData.normalDayPrice} / 假日（五〜日）價格：{roomData.holidayPrice} <br />
          入住時間：{roomData.checkInAndOut?.checkInEarly}（最早）/ {roomData.checkInAndOut?.checkInLate}（最晚）
          <br />
          退房時間：{roomData.checkInAndOut?.checkOut}
      </p>
      <ul className="text-primary text-sm font-light mb-12">
        <li>{roomData.description}</li>
        <li>・單人間僅供一位客人使用。</li>
        <li>・臥室配有單人床和私人浴室。</li>
        <li>・您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。</li>
        <li>・房間裡有AC，當然還有WiFi。</li>
      </ul>
    </>
  )
  }

export default RoomDetail;