import Item from "./Item";

const List = ({ listDate, deleteData }) => {
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
          />
        );
      })}
    </div>
  );
};
export default List;
