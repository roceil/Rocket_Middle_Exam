import Cancel from "../images/amenities/icons-Cancel.svg";
import OK from "../images/amenities/icons-ok.svg";

function RoomDetail({
  roomData,
  roomInfo,
  iconsAry,
  iconsName,
  itemsAry,
  bedType,
}) {
  // console.log(data);

  // useEffect(() => {
  // // //     // // 字串轉中文（待處理）
  // // //     // roomDescription = new Intl.Locale(roomData.description, 'zh-TW');
  // // //     //   if(roomData.description !== undefined){
  // // //     //   roomDescription = new Intl.Locale(roomData.description, 'zh-TW');
  // // //     // }

  return (
    <>
      <p className="w-full mb-12 text-right mb-[47px]leading-6">
        {roomData.descriptionShort?.["GuestMax"]}人 ・ {bedType}{" "}
        {roomData.descriptionShort?.["Bed"].length}張 ・ 附早餐 ・
        {roomData.descriptionShort?.["Private-Bath"]}衛浴間 ・
        {roomData.descriptionShort?.Footage}平方公尺
      </p>
      <p className="mb-[35px] text-sm leading-6">
        平日（一～四）價格：{roomData.normalDayPrice} / 假日（五〜日）價格：
        {roomData.holidayPrice} <br />
        入住時間：{roomData.checkInAndOut?.checkInEarly}（最早）/{" "}
        {roomData.checkInAndOut?.checkInLate}（最晚）
        <br />
        退房時間：{roomData.checkInAndOut?.checkOut}
      </p>
      {/* description（待處理：轉中文） */}
      <ul className="text-primary text-sm font-light mb-12 leading-6">
        {roomInfo?.map((item, index) => (
          <li key={index}>・{item}</li>
        ))}
      </ul>
      {/* icons */}
      <ul className="flex flex-wrap gap-x-9 gap-y-[26px] mb-7">
        {iconsAry.map((item, i) => {
          return (
            <li key={i} className="flex mb-[26px] ">
              <div className="flex flex-col space-y-2 items-center">
                <img
                  src={item}
                  alt=""
                  className={
                    itemsAry[i] ? "w-10 h-10 " : "opacity-30 w-10 h-10"
                  }
                />
                <p
                  className={
                    itemsAry[i]
                      ? "text-[10px] mt-2 text-center"
                      : "opacity-30 text-[10px] mt-2 text-center"
                  }
                >
                  {iconsName[i]}
                </p>
              </div>
              <img
                src={itemsAry[i] ? OK : Cancel}
                alt=""
                className={
                  itemsAry[i]
                    ? "w-[15px] h-[15px] ml-1"
                    : "opacity-30 w-[15px] h-[15px] ml-1"
                }
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default RoomDetail;
