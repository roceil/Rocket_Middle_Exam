import logo from "../images/logo.svg";
import singleRoom from "../images/room1/singleRoom.jpeg";

export function Home() {
  return (
    <div className="HomePage">
      {/* Swiper */}
      <div className="bg-[url('./images/house/photo-1507149833265-60c372daea22.jpeg')] bg-no-repeat h-screen bg-cover absolute w-screen -z-10"></div>

      {/* Content */}
      <div className=" flex justify-center items-center h-screen ">
        <div className="container flex justify-between">
          {/* 左邊文字區塊 */}
          <div className="flex flex-col justify-between">
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
          <ul className="flex flex-wrap justify-end">
            <li>
              <img
                src={singleRoom}
                alt="singleRoom"
                className="w-[275px] h-[275px]" />
            </li>
            <li>
              <img
                src={singleRoom}
                alt="singleRoom"
                className="w-[275px] h-[275px]" />
            </li>
            <li>
              <img
                src={singleRoom}
                alt="singleRoom"
                className="w-[275px] h-[275px]" />
            </li>
            <li>
              <img
                src={singleRoom}
                alt="singleRoom"
                className="w-[275px] h-[275px]" />
            </li>
            <li>
              <img
                src={singleRoom}
                alt="singleRoom"
                className="w-[275px] h-[275px]" />
            </li>
            <li>
              <img
                src={singleRoom}
                alt="singleRoom"
                className="w-[275px] h-[275px]" />
            </li>
          </ul>
        </div>
      </div>
    </div> // <Rooms></Rooms>
  );
}
