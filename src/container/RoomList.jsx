import { useState, useEffect } from "react";
import axios from 'axios'
import { NavLink } from "react-router-dom";

function RoomList() {
  const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
  const token = 'Bearer IAlFGuHujADexllpJHWL1MenPYbizgbL00yxoV8wLs9zfZxS4hgs0wVo6E6b';
  const authorization = { 'headers': { 'Authorization': token } };

  const [data, setData] = useState([]);

  useEffect(() => {
    const getRoomImg = async () => {
      const res = await axios.get(`${url}`, authorization)
      console.log(res);
      setData(res.data.items);
    }
    getRoomImg();
  }, [])

  return (
    <>
      <ul className="flex flex-wrap justify-end w-[825px]">
        {
          data.map((item) => {
            return (
              <li key={item.id} className="w-[33%] relative group">
                <NavLink to="/rooms">
                  {/* hover區塊 */}
                  <div className="duration-300 bg-transparent w-full h-full absolute top-0 group-hover:bg-[#38470B] opacity-60 items-center"></div>
                  <h2 className="hidden group-hover:block w-full openSans text-white text-lg text-center absolute top-[50%] translate-y-[-50%]">{item.name}</h2>
                  {/* API 圖片區塊 */}
                  <img
                    src={item.imageUrl}
                    alt="singleRoom"
                    className="w-full h-[275px]" />
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default RoomList;