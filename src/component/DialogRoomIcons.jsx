import breakfast from "../images/amenities/icon_amenities_Breakfast.svg";
import wifi from "../images/amenities/icon_amenities_Wi-Fi.svg";
import tel from "../images/amenities/icon_amenities_Television.svg";
import refrigerator from "../images/amenities/icon_amenities_Refrigerator.svg";
import pet from "../images/amenities/icon_amenities_Pet-Friendly.svg";
import smoke from "../images/amenities/icon_amenities_Smoke-Free.svg";
import ac from "../images/amenities/icon_amenities_Air-Conditioner.svg";

export function DialogRoomIcons() {
  return (
    <ul className="flex text-light-primary space-x-[30px] mb-[26px]">
      {/* 早餐 */}
      <li className="flex flex-col justify-center items-center space-y-2">
        <img className="max-h-[30px]" src={breakfast} alt="breakfast" />
        <p className="text-[10px]">早餐</p>
      </li>
      {/* wifi */}
      <li className="flex flex-col justify-center items-center space-y-2">
        <img className="max-h-[30px]" src={wifi} alt="wifi" />
        <p className="text-[10px]">Wifi</p>
      </li>
      {/* 電話 */}
      <li className="flex flex-col justify-center items-center space-y-2">
        <img className="max-h-[30px]" src={tel} alt="tel" />
        <p className="text-[10px]">電話</p>
      </li>
      {/* 冰箱 */}
      <li className="flex flex-col justify-center items-center space-y-2">
        <img className="max-h-[30px]" src={refrigerator} alt="refrigerator" />
        <p className="text-[10px]">冰箱</p>
      </li>
      {/* 攜帶寵物 */}
      <li className="flex flex-col justify-center items-center space-y-2">
        <img className="max-h-[30px]" src={pet} alt="pet" />
        <p className="text-[10px]">攜帶寵物</p>
      </li>
      {/* 全面禁煙 */}
      <li className="flex flex-col justify-center items-center space-y-2">
        <img className="max-h-[30px]" src={smoke} alt="smoke" />
        <p className="text-[10px]">全面禁煙</p>
      </li>
      {/* 空調 */}
      <li className="flex flex-col justify-center items-center space-y-2">
        <img className="max-h-[30px]" src={ac} alt="ac" />
        <p className="text-[10px]">空調</p>
      </li>
    </ul>
  );
}
