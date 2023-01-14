export function BookingFormDate({ register, labelTag, rules, errors, labelName }) {
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
        type="date"
        {...register(labelName, rules)}
        className="w-[315px] py-[7px] outline-none px-2" />
    </label>
  );
}
