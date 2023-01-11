import { useState, useEffect } from "react";
import { API_GET_DATA } from '../../global/constants';
import Edit from "./components/Edit";
import List from "./components/List";

import "./index.css";
//从api中拿到data, 然后set到data里面，然后传到home的listData
async function fetchData(setData){
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    console.log(data);
   setData(data)
}

const Home = () => {
  const [data, setData] = useState([]);
  
  use
  // useEffect will excuted if data has change 
  useEffect(()=>{
   fetchData(setData)
  },[])

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
