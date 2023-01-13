import { useState, useEffect } from "react";
import axios from 'axios'

function RoomList() {
  const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
  const token = 'Bearer IAlFGuHujADexllpJHWL1MenPYbizgbL00yxoV8wLs9zfZxS4hgs0wVo6E6b';
  const authorization = {'headers': {'Authorization': token}};

  const [data,setData]=useState([]);

  useEffect(()=>{
    const getRoomImg = async () =>{
      const res = await axios.get(`${url}`,authorization)
      console.log(res);
      setData(res.data.items);
    }
    getRoomImg();
  },[])

  return (
    <>
      <ul className="flex flex-wrap justify-end">
        {
          data.map((item)=>{
            return(
              <li key={item.id}>
                <img
                  src={item.imageUrl}
                  alt="singleRoom"
                  className="w-[275px] h-[275px]" />
              </li>
            )
          })
        }
      </ul>
    </>
  )
  }
  
  export default RoomList;