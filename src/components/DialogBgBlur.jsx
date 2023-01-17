function DialogBgBlur({ closeSuccess, closeFail, closeBg }) {
  return (
    <div
      className="h-full w-full blur"
      onClick={() => {
        if (closeSuccess !== undefined) {
          closeSuccess();
        } else if (closeFail !== undefined) {
          closeFail();
        } else {
          closeBg();
        }
      }}
    ></div>
  );
}
export default DialogBgBlur;
