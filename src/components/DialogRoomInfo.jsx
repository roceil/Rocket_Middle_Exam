export function DialogRoomInfo({ roomData, bedType }) {
  return (
    <p className="mt-2 text-sm text-primary leading-[1.7] mb-[27px]">
      {roomData.descriptionShort.GuestMax}人・ {bedType}
      {roomData.descriptionShort.Bed.length}張・附早餐・ 衛浴
      {roomData.descriptionShort?.["Private-Bath"]}間・
      {roomData.descriptionShort.Footage}平方公尺
      <br /> 平日（一～四）價格：{roomData.normalDayPrice} / 假日（五〜日）價格：
      {roomData.holidayPrice}
    </p>
  );
}
