import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from '../../global/constants';
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

//从api中拿到data, 然后set到data里面，然后传到home的listData
async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
  }
  
  async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
  }
const Home = () => {
  const [data, setData] = useState([]);
  //useRef 预防不小心改变数据库的状态
  const submittingStatus = useRef(false);
  
  // useEffect will excuted if data has change 
  useEffect(()=>{
    if(!submittingStatus.current){
        return
    }
   fetchSetData(data)
   .then(data => submittingStatus.current = false)
  },[data])

  useEffect(()=>{
    fetchData(setData)
   },[])

  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List listDate={data} deleteData={setData} submittingStatus={submittingStatus} />
    </div>
  );
};
export default Home;

//edit and list 互相沟通，去改变home/index.js中的状态
//先定义一个data, 将data传给listData,listData is a prop,将listData传到List.js
