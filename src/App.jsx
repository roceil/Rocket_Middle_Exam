import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { Loading } from "./pages/Loading";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  // 整理 API 資料
  const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
  const token = 'Bearer IAlFGuHujADexllpJHWL1MenPYbizgbL00yxoV8wLs9zfZxS4hgs0wVo6E6b';
  const authorization = { 'headers': { 'Authorization': token } };

  const [data, setData] = useState([]);

  useEffect(() => {
    // 所有房型 API
    const getRoomImg = async () => {
      const res = await axios.get(`${url}`, authorization)
      setData(res.data);
    }
    getRoomImg();
  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route path="/" >
          <Route path="/" element={<Home data={data}/>} />
          <Route path=":id" element={<Rooms />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
