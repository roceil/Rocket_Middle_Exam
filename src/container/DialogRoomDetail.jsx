import close from "../images/icons8-cancel.png";
import { DialogRoomTitle } from "../component/DialogRoomTitle";
import { DialogRoomInfo } from "../component/DialogRoomInfo";
import { DialogRoomIcons } from "../component/DialogRoomIcons";
import { DialogRoomBookingInfo } from "./DialogRoomBookingInfo";
import { DialogBookingStep } from "../component/DialogBookingStep";

export function DialogRoomDetail({ setBgStatus }) {
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
      <DialogRoomTitle />

      {/* 房型資訊 */}
      <DialogRoomInfo />

      {/* 房型icons */}
      <DialogRoomIcons />

      {/* 訂房資訊 */}
      <DialogRoomBookingInfo />

      {/* 預約流程 */}
      <DialogBookingStep />
    </div>
  );
}
