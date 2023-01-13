import { DialogBookingForm } from "./DialogBookingForm";
import { DialogRoomDetail } from "./DialogRoomDetail";

function Dialog() {
  return (
    <div className="w-[1110px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border border-primary flex">
      {/* 左邊輸入列 */}
      <DialogBookingForm />

      {/* 右邊資訊區塊 */}
      <DialogRoomDetail />
    </div>
  );
}

export default Dialog;
