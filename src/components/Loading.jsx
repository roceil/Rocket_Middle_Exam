export function Loading({text}) {

  return (
      <div className="animate-fadeOut w-screen h-screen bg-light-primary fixed z-99 flex justify-center items-center opacity-100  ease-in-out">
        <p className="bg-light-primary text-white text-2xl font-light">{text}</p>
        <div className="ml-4">
          <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash"></span>
          <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.4s]"></span>
        </div>
      </div>   
  );
}