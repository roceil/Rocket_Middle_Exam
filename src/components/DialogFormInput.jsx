import { BookingFormDate } from "./BookingFormDate";
import { BookingForms } from "./BookingForms";

export function DialogFormInput({ register, handleSubmit, setValue, errors,sendData }) {
  const resetInput = () => {
    setValue("name", "");
    setValue("tel", "");
    console.log(`已重置`);
  };
  const onSubmit = (e) => {
    sendData()
    // resetInput();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      {/* 姓名 */}
      <BookingForms
        register={register}
        errors={errors}
        labelName={"name"}
        labelTag={"姓名"}
        labelType={"text"}
        labelPlaceHolder={"請填寫預訂人姓名"}
        rules={{
          required: {
            value: true,
            message: "*此欄位為必填",
          },
        }}
      />
      {/* 手機號碼 */}
      <BookingForms
        register={register}
        errors={errors}
        labelName={"tel"}
        labelTag={"手機號碼"}
        labelType={"tel"}
        labelPlaceHolder={"請填寫預訂人電話"}
        rules={{
          required: {
            value: true,
            message: "*此欄位為必填",
          },
        }}
      />
      {/* 入住日期 */}
      <BookingFormDate
        register={register}
        errors={errors}
        labelTag={"入住日期"}
        labelName={"checkInDate"}
        rules={{
          required: {
            value: true,
            message: "*此欄位為必填",
          },
        }}
      />
      {/* 退房日期 */}
      <BookingFormDate
        register={register}
        errors={errors}
        labelTag={"退房日期"}
        labelName={"checkOutDate"}
        rules={{
          required: {
            value: true,
            message: "*此欄位為必填",
          },
        }}
      />

      {/* 天數顯示 */}
      <div className="">
        <p className="border-b border-[#949C7C] w-full pb-[14px] text-[#949C7C]">
          2天，1晚平日
        </p>
      </div>

      {/* 總計 */}
      <div className="text-white text-right">
        <p className=" text-sm ">總計</p>
        <p className="text-[26px] openSans font-semibold">$1,380</p>
      </div>

      {/* 送出按鈕 */}
      <button
        // onClick={onSubmit}
        type="submit"
        className="text-white text-[18px] font-bold border border-white py-2 hover:bg-white hover:text-primary hover:duration-300"
      >
        確認送出
      </button>
    </form>
  );
}
