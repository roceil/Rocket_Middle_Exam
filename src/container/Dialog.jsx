import { DialogBookingForm } from "./DialogBookingForm";
import { DialogRoomDetail } from "./DialogRoomDetail";
import DialogBgBlur from "../component/DialogBgBlur";

function Dialog({ setBgStatus }) {
  return (
    <>
      <DialogBgBlur setBgStatus={setBgStatus}/>
      <div className="w-[1110px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border border-primary flex z-30">
        {/* 左邊輸入列 */}
        <DialogBookingForm setBgStatus={setBgStatus}/>

        {/* 右邊資訊區塊 */}
        <DialogRoomDetail  setBgStatus={setBgStatus}/>
      </div>
    </>
  );
}

export default Dialog;
