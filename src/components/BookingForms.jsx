export function BookingForms({
  register, errors, labelName, labelType, labelTag, rules, labelPlaceHolder,
}) {
  return (
    <label>
      {/* 欄位名稱及提示文字 */}
      <div className="flex mb-[7px] text-white text-sm space-x-2 ">
        <span className="">{labelTag}</span>
        <span
          className={`text-red-400 ${errors?.[labelName] ? "block" : "hidden"}`}
        >
          {errors?.[labelName]?.message}
        </span>
      </div>
      <input
        type={labelType}
        {...register(labelName, rules)}
        placeholder={labelPlaceHolder}
        className="w-[315px] py-[7px] outline-none pl-2" />
    </label>
  );
}
