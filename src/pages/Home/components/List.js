import Item from "./Item";

const List = ({ listDate, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listDate.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};
export default List;
