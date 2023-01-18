export function DialogRoomBookingInfo({ roomData }) {
  return (
    <div className="mb-3">
      {/* 副標題區塊 */}
      <div className="relative">
        <h3 className="dialogTitle">訂房資訊</h3>
        <div className="dialogTitle_div"></div>
      </div>
      {/* 資訊清單 */}
      <ul className="mt-2 text-xs text-primary leading-[2.16666] font">
        <li>
          ・入住時間：最早{roomData.checkInAndOut.checkInEarly}
          ，最晚{roomData.checkInAndOut.checkInLate}；退房時間：
          {roomData.checkInAndOut.checkOut}，請自行確認行程安排。{" "}
        </li>
        <li>・平日定義週一至週四；假日定義週五至週日及國定假日。</li>
        <li>・好室旅店全面禁止吸菸。</li>
        <li>
          ・若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 -
          18:00 )。
        </li>
      </ul>
    </div>
  );
}
