import { useState } from "react";

import Edit from "./components/Edit";
import List from "./components/List";

import "./index.css";
const Home = () => {
  const [data, setData] = useState([1, 2, 3]);
  return (
    <div className="app">
      <Edit add={setData} />
      <List listDate={data} deleteData={setData} />
    </div>
  );
};
export default Home;

//edit and list 互相沟通，去改变home/index.js中的状态
//先定义一个data, 将data传给listData,listData is a prop,将listData传到List.js
