import { DialogFormInput } from "../component/DialogFormInput";

export function DialogBookingForm() {
  return (
    <div className="w-[40.090%] bg-primary  flex items-center flex-col pt-[50px] pb-[26px]">
      <DialogFormInput/>
      <p className="text-white text-xs mt-[18px]">
        此預約系統僅預約功能，並不會對您進行收費
      </p>
    </div>
  );
}
