import singleRoom from "../images/room1/singleRoom.jpeg";
import backHome from "../images/back home.png";
import AC from "../images/amenities/icon_amenities_Air-Conditioner.svg";
import OK from "../images/amenities/icons-ok.svg";

export function Rooms() {
  const iconAry = [];
  for (let i = 0; i < 8; i++) {
    iconAry.push('')
  }

  return (
    <div className="flex h-screen">
      {/* Nav */}
      <nav className="w-[573px]">
        {/* 輪播圖 */}
        <div className="relative">
          <div className="w-full h-screen">
            <img src={singleRoom} alt="singleRoom" />
          </div>
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
              className="text-xl text-white bg-primary py-[8.5px] w-[252px] block hover:opacity-50"
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
            )
          })}
        </ul>
        <p className="text-primary text-sm font-medium mb-2">空房狀態查詢</p>
      </div>
    </div>
  );
}
