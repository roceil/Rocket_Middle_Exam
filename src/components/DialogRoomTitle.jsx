export function DialogRoomTitle({roomData}) {
  return (
    <div className="relative">
      <h3 className="dialogTitle text-2xl">{roomData.name}</h3>
      <div className="dialogTitle_div"></div>
    </div>
  );
}
