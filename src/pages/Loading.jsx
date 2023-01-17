import { useEffect } from "react";

// 流程：Home & Room 切換時就要顯示(Router)，要有 setTimeOut 讓資料有時間渲染

export function Loading() {
  
  useEffect(()=>{
    function LoadingPage(){
      setTimeout(function() {
        return(
          <div>
            <h1 className="bg-light-primary text-white">像家一樣・溫暖自在</h1>
          </div>
        )
      }, 1700)
    }

    LoadingPage()

  })


  setTimeout(function() {
    return (
      <div className="bg-light-primary w-full h-full flex justify-center">
        <h1 className=" text-white text-[50px]">像家一樣・溫暖自在</h1>
      </div>
    );
  }, 1700)
}
