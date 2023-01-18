import { NavLink } from "react-router-dom";

function RoomList({data}) {
  return (
    <>
      <ul className="flex flex-wrap justify-end w-[825px] min-h-[550px]">
        {
          data.items?.map((item) => {
            return (
              <li key={item.id} className="w-[33%] relative group">
                <NavLink to={item.id}>
                  {/* hover區塊 */}
                  <div className="duration-300 bg-transparent w-full h-full absolute top-0 group-hover:bg-[#38470B] opacity-60 items-center"></div>
                  <h2 className="hidden group-hover:block w-full openSans text-white text-lg text-center absolute top-[50%] translate-y-[-50%]">{item.name}</h2>
                  {/* API 圖片區塊 */}
                  <img
                    src={item.imageUrl}
                    alt="singleRoom"
                    className="w-full h-[275px]" />
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default RoomList;