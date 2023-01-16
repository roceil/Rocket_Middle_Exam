import { DialogFormInput } from "../components/DialogFormInput";

export function DialogBookingForm({
  setBgStatus,
  register,
  handleSubmit,
  setValue,
  errors,
}) {
  return (
    <div className="w-[40.090%] bg-primary  flex items-center flex-col pt-[50px] pb-[26px]">
      <DialogFormInput
        setBgStatus={setBgStatus}
        register={register}
        handleSubmit={handleSubmit}
        setValue={setValue}
        errors={errors}
      />
      <p className="text-white text-xs mt-[18px]">
        此預約系統僅預約功能，並不會對您進行收費
      </p>
    </div>
  );
}
