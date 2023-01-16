import arrow from "../images/amenities/icon_arrow.svg";
import step1 from "../images/amenities/reservationflow_step_1.svg";
import step2 from "../images/amenities/reservationflow_step_2.svg";
import step3 from "../images/amenities/reservationflow_step_3.svg";

export function DialogBookingStep() {
  return (
    <div>
      {/* 副標題區塊 */}
      <div className="relative">
        <h3 className="dialogTitle">預約流程</h3>
        <div className="dialogTitle_div"></div>
      </div>
      {/* 流程清單 */}
      <ul className="flex mt-[19px]">
        {/* step1 */}
        <li className="w-[160px]">
          {/* 上方圖片 */}
          <div className="bg-light-primary py-[9px] flex justify-center items-center h-[50px]">
            <img src={step1} alt="" />
          </div>
          {/* 下方文字 */}
          <div className="border border-light-primary h-[86px] rounded-br-[10px] rounded-bl-[10px]">
            <p className="text-xs text-primary mt-[14px] text-center">
              送出線上預約單
            </p>
          </div>
        </li>
        <li className="w-[31px] h-[50px] flex justify-center items-center">
          <img src={arrow} alt="" />
        </li>
        {/* step2 */}
        <li className="w-[160px]">
          {/* 上方圖片 */}
          <div className="bg-light-primary py-[9px] flex justify-center items-center h-[50px]">
            <img src={step2} alt="" />
          </div>
          {/* 下方文字 */}
          <div className="border border-light-primary h-[86px] rounded-br-[10px] rounded-bl-[10px]">
            <p className="text-xs text-primary mt-[14px] text-center px-[7px]">
              系統立即回覆是否預訂成功
              <br /> 並以簡訊發送訂房通知
              <br /> (若未收到簡訊請來電確認)
            </p>
          </div>
        </li>
        <li className="w-[31px] h-[50px] flex justify-center items-center">
          <img src={arrow} alt="" />
        </li>
        {/* step3 */}
        <li className="w-[160px]">
          {/* 上方圖片 */}
          <div className="bg-light-primary py-[9px] flex justify-center items-center h-[50px]">
            <img src={step3} alt="" />
          </div>
          {/* 下方文字 */}
          <div className="border border-light-primary h-[86px] rounded-br-[10px] rounded-bl-[10px]">
            <p className="text-xs text-primary mt-[14px] text-center px-[12px]">
              入住當日憑訂房通知
              <br /> 以現金或刷卡付款即可
              <br /> (僅接受VISA.JCB.銀聯卡)
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
