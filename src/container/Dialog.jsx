import { DialogBookingForm } from "./DialogBookingForm";
import { DialogRoomDetail } from "./DialogRoomDetail";
import DialogBgBlur from "../components/DialogBgBlur";
function Dialog({
  setBgStatus,
  register,
  handleSubmit,
  setValue,
  errors,
  sendData,
  closeBg,
  roomData,
  roomInfo,
  iconsAry,
  iconsName,
  itemsAry,
  bedType
}) {
  return (
    <>
      <DialogBgBlur closeBg={closeBg} />

      <div className="w-[1110px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border border-primary flex z-30">
        {/* 左邊輸入列 */}
        <DialogBookingForm
          setBgStatus={setBgStatus}
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          errors={errors}
          sendData={sendData}
        />

        {/* 右邊資訊區塊 */}
        <DialogRoomDetail
          setBgStatus={setBgStatus}
          roomData={roomData}
          roomInfo={roomInfo}
          iconsAry={iconsAry}
          iconsName={iconsName}
          itemsAry={itemsAry}
          bedType={bedType}
        />
      </div>
    </>
  );
}

export default Dialog;
