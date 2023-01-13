export function DialogFormInput() {
  return (
    <form className="flex flex-col space-y-4">
      {/* 姓名 */}
      <label>
        <span className="block text-sm text-white mb-[7px]">姓名</span>
        <input type="text" className="w-[315px] py-[7px] outline-none pl-2" />
      </label>
      {/* 手機號碼 */}
      <label>
        <span className="block text-sm text-white mb-[7px]">手機號碼</span>
        <input type="tel" className="w-[315px] py-[7px] outline-none pl-2" />
      </label>
      {/* 入住日期 */}
      <label>
        <span className="block text-sm text-white mb-[7px]">入住日期</span>
        <input type="date" className="w-[315px] py-[7px] outline-none px-2" />
      </label>
      {/* 退房日期 */}
      <label>
        <span className="block text-sm text-white mb-[7px]">退房日期</span>
        <input type="date" className="w-[315px] py-[7px] outline-none px-2" />
      </label>

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
        type="button"
        className="text-white text-[18px] font-bold border border-white py-2 hover:bg-white hover:text-primary hover:duration-300"
      >
        確認送出
      </button>
    </form>
  );
}
