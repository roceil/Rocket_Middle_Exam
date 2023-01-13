function DialogBgBlur({ setBgStatus }) {
  const closeBg = () => {
    setBgStatus(false);
  };
  return <div className="h-full w-full blur" onClick={closeBg}></div>;
}
export default DialogBgBlur;
