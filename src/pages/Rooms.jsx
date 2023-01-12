import singleRoom from "../images/room1/singleRoom.jpeg";
import backHome from "../images/back home.png";
import AC from "../images/amenities/icon_amenities_Air-Conditioner.svg";
import OK from "../images/amenities/icons-ok.svg";

export function Rooms() {
  return (
    <div className="flex h-screen">
      {/* Nav */}
      <nav className="w-[573px]">
        {/* 輪播圖 */}
        <div className="relative">
          <img src={singleRoom} alt="singleRoom" className="gradient" />
          {/* 返回首頁按鈕 */}
          <button
            type="button"
            className="flex items-center absolute top-[87px] left-[128px]"
          >
            <img src={backHome} alt="backHome" className="m-[10px] " />
            <span className="font-light text-sm text-primary">
              查看其他房型
            </span>
          </button>
          {/* 價格＆預約按鈕 */}
          <div className=" flex flex-col items-center absolute bottom-[109px] left-[161px]">
            <div className="mb-[10px]">
              <span className="text-[36px] text-primary">$1,380 </span>
              <span className="text-xl text-primary"> / 1晚</span>
            </div>

            <button
              type="button"
              className="text-xl text-white bg-primary py-[8.5px] w-[252px] block"
            >
              Booking Now
            </button>
          </div>
        </div>
      </nav>

      {/* RoomInfo */}
      <div className="mt-[133px] w-[635px] ml-[30px] text-primary">
        <p className="w-full text-right mb-[47px]">
          1人・ 單人床・ 附早餐・衛浴1間・18平方公尺
        </p>
        <p className="mb-[35px] text-sm">
          平日（一～四）價格：1380 / 假日（五〜日）價格：1500 <br />
          入住時間：15：00（最早）/ 21：00（最晚）
          <br />
          退房時間：10：00
        </p>
        <ul className="text-primary text-sm font-light mb-12">
          <li>
            ・單人間僅供一位客人使用。
            <li>・臥室配有單人床和私人浴室。</li>
            <li>
              ・您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。
            </li>
            <li>・房間裡有AC，當然還有WiFi。</li>
          </li>
        </ul>
        {/* icons */}
        <ul className="">
          {/* 01 */}
          <li className="relative inline-block">
            <img src={AC} alt="" />
            <img
              src={OK}
              alt=""
              className="absolute top-0 -right-1 translate-x-[100%]"
            />
          </li>
          {/* 01 */}
          <li className="relative inline-block">
            <img src={AC} alt="" />
            <img
              src={OK}
              alt=""
              className="absolute top-0 -right-1 translate-x-[100%]"
            />
          </li>
          {/* 01 */}
          <li className="relative inline-block">
            <img src={AC} alt="" />
            <img
              src={OK}
              alt=""
              className="absolute top-0 -right-1 translate-x-[100%]"
            />
          </li>
          {/* 01 */}
          <li className="relative inline-block">
            <img src={AC} alt="" />
            <img
              src={OK}
              alt=""
              className="absolute top-0 -right-1 translate-x-[100%]"
            />
          </li>
          {/* 01 */}
          <li className="relative inline-block">
            <img src={AC} alt="" />
            <img
              src={OK}
              alt=""
              className="absolute top-0 -right-1 translate-x-[100%]"
            />
          </li>
          {/* 01 */}
          <li className="relative inline-block">
            <img src={AC} alt="" />
            <img
              src={OK}
              alt=""
              className="absolute top-0 -right-1 translate-x-[100%]"
            />
          </li>
          {/* 01 */}
          <li className="relative inline-block">
            <img src={AC} alt="" />
            <img
              src={OK}
              alt=""
              className="absolute top-0 -right-1 translate-x-[100%]"
            />
          </li>
          {/* 01 */}
          <li className="relative inline-block">
            <img src={AC} alt="" />
            <img
              src={OK}
              alt=""
              className="absolute top-0 -right-1 translate-x-[100%]"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
