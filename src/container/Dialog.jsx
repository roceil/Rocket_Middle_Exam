import { useForm, useWatch } from "react-hook-form";
import dayjs from "dayjs";
import { DialogBookingForm } from "./DialogBookingForm";
import { DialogRoomDetail } from "./DialogRoomDetail";
import DialogBgBlur from "../components/DialogBgBlur";

function Dialog({ setBgStatus, state }) {
  let checkInDate = dayjs(state[0].startDate).format("YYYY-MM-DD");
  let checkOutDate = dayjs(state[0].endDate).format('YYYY-MM-DD')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    },
    mode: "onTouched",
  });
  return (
    <>
      <DialogBgBlur setBgStatus={setBgStatus} />
      <div className="w-[1110px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border border-primary flex z-30">
        {/* 左邊輸入列 */}
        <DialogBookingForm
          setBgStatus={setBgStatus}
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          errors={errors}
        />

        {/* 右邊資訊區塊 */}
        <DialogRoomDetail setBgStatus={setBgStatus} />
      </div>
    </>
  );
}

export default Dialog;
