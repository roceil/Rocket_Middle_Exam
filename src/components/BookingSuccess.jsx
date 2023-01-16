import DialogBgBlur from "./DialogBgBlur";
import success from "../images/amenities/icon_booking_success.svg";
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
          <img src={success} alt="" />
        </div>

        <h2 className="text-[50px] ">預約成功</h2>
        <p className="text-[18px] font-light">
          請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，
          <br /> 若未收到簡訊請來電確認，謝謝您
        </p>
      </div>
    </>
  );
}

export default BookingSuccess;
