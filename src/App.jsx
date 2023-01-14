import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms"
import Dialog from "./container/Dialog";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </HashRouter>
      {/* <Home></Home> */}
      {/* <Rooms></Rooms> */}
      {/* <Dialog/> */}
    </>
  );
}

export default App;
