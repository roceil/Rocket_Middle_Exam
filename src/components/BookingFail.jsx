import DialogBgBlur from "./DialogBgBlur";
import fail from "../images/amenities/icon_booking_fail.svg";
import close from "../images/icons8-cancel-white.png";
function BookingSuccess() {
  return (
    <>
      <DialogBgBlur />
      <div className="w-[1110px] h-[600px] bookingSuccess pt-[38.86px]">
        <button type="button" className="w-full flex justify-end pr-[38.86px] closeBtnHover">
          <img src={close} alt="" />
        </button>
        <div>
          <img src={fail} alt="" />
        </div>

        <h2 className="text-[50px] ">預約失敗</h2>
        <p className="text-[18px] font-light">
        哎呀！晚了一步！您預約的日期已經被預約走了，<br /> 再看看其它房型吧
        </p>
      </div>
    </>
  );
}

export default BookingSuccess;
