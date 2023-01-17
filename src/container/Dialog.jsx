import { DialogBookingForm } from "./DialogBookingForm";
import { DialogRoomDetail } from "./DialogRoomDetail";
import DialogBgBlur from "../components/DialogBgBlur";
function Dialog({
  setBgStatus,
  state,
  url,
  id,
  authorization,
  register,
  handleSubmit,
  setValue,
  errors,
  sendData,
}) {
  return (
    <>
      <div className="">
        <DialogBgBlur setBgStatus={setBgStatus} />

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
          <DialogRoomDetail setBgStatus={setBgStatus} />
        </div>
      </div>
    </>
  );
}

export default Dialog;
