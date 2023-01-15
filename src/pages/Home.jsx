import logo from "../images/logo.svg";
import singleRoom from "../images/room1/singleRoom.jpeg";
import HomeCarousel from "../components/HomeCarousel";
// import { RoomList } from "../container/RoomList";
import RoomList from "../container/RoomList"

export function Home() {
  return (
    <div className="HomePage flex items-center h-screen">
      {/* SwipeCarousel */}
      <HomeCarousel />
      {/* Content */}
      <div className="w-full flex justify-center items-center z-10">
        <div className="container flex justify-between">
          {/* 左邊文字區塊 */}
          <div className="flex mr-[30px] flex-col justify-between flex-shrink-0">
            <img src={logo} alt="logo" />
            <div className="text-xs text-white">
              <h3 className="mb-4">好室旅店。HOUSE HOTEL</h3>
              <ul className="flex flex-col space-y-[6px] font-light">
                <li>花蓮縣花蓮市國聯一路1號</li>
                <li className="openSans">03-8321155</li>
                <li className="openSans">HOUSE@HOTEL.COM</li>
              </ul>
            </div>
          </div>
          {/* 右邊房型區塊 */}
          <RoomList />
        </div>
      </div>
    </div>
  );
}
