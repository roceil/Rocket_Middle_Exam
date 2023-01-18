export function DialogRoomIcons({ iconsAry, iconsName, itemsAry }) {
  return (
    <ul className="flex flex-wrap gap-x-[30px]">
      {iconsAry.map((item, i) => {
        return (
          <li
            key={i}
            className={`flex mb-[26px] ${itemsAry[i] ? null : "hidden"}`}
          >
            <div className="flex flex-col space-y-2 items-center">
              <img
                src={item}
                alt=""
                className={
                  itemsAry[i]
                    ? "w-[30px] h-[30px] "
                    : "opacity-30 w-10 h-10 hidden"
                }
              />
              <p
                className={
                  itemsAry[i]
                    ? "text-[10px] mt-2 text-center text-light-primary"
                    : "opacity-30 text-[10px] mt-2 text-center hidden"
                }
              >
                {iconsName[i]}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
