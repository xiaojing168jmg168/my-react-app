import { useState } from "react";
import { v4 } from "uuid";
const Edit = ({ add }) => {
  // First set note for " ", then setnote to e.taget.value,
  // when input change, call noteChange
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (prevData) {
      return [
        
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>Memo</h1>
      <p>Note:</p>
      <input type="text" value={note} onChange={noteChange}></input>
      <p>Date</p>
      <input type="date" value={date} onChange={dateChange}></input>
      <p>Time</p>
      <input type="time" value={time} onChange={timeChange}></input>
      <button onClick={addItem} className="add">
        Add
      </button>
    </div>
  );
};
export default Edit;
