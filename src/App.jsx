import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms"
import singleRoom from "./images/room1/singleRoom.jpeg";


function App() {
  const [count, setCount] = useState(0);
  const imgAry = [singleRoom];
  console.log(imgAry);
  return (
<<<<<<< HEAD
    <>
      <Home></Home>
      <Rooms></Rooms>
    </>
=======
    <Home></Home>

    // <Rooms></Rooms>
>>>>>>> main
  );
}

export default App;
