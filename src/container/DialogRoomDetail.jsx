import close from "../images/icons8-cancel.png";
import { DialogRoomTitle } from "../components/DialogRoomTitle";
import { DialogRoomInfo } from "../components/DialogRoomInfo";
import { DialogRoomIcons } from "../components/DialogRoomIcons";
import { DialogRoomBookingInfo } from "./DialogRoomBookingInfo";
import { DialogBookingStep } from "../components/DialogBookingStep";

export function DialogRoomDetail({
  setBgStatus,
  roomData,
  roomInfo,
  iconsAry,
  iconsName,
  itemsAry,
  bedType
}) {
  const closeBg = () => {
    setBgStatus(false);
  };
  return (
    <div className="bg-white w-[59.91%] pt-[50px] pb-[26px] pl-[30px] pr-[38px]">
      {/* 關閉按鈕 */}
      <button
        onClick={closeBg}
        type="button"
        className="w-full flex justify-end"
      >
        <img src={close} alt="" />
      </button>

      {/* 標題區塊 */}
      <DialogRoomTitle roomData={roomData} />

      {/* 房型資訊 */}
      <DialogRoomInfo roomData={roomData}  bedType={bedType}/>

      {/* 房型icons */}
      <DialogRoomIcons
        roomData={roomData}
        roomInfo={roomInfo}
        iconsAry={iconsAry}
        iconsName={iconsName}
        itemsAry={itemsAry}
        bedType={bedType}
      />

      {/* 訂房資訊 */}
      <DialogRoomBookingInfo roomData={roomData} />

      {/* 預約流程 */}
      <DialogBookingStep />
    </div>
  );
}
