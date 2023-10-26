import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addReminder, clearReminder, removeReminder } from "./Redux/actions";
import moment from "moment/moment";
import img from "./reminder.png";
import { bake_cookie, read_cookie } from "sfcookies";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Reminders);
  const [isActive, setIsActive] = useState(false);

  const handleAddReminder = (title, date) => {
    if (title !== "" && date !== "") {
      dispatch(addReminder(title, date));
      setTitle("");
      setDate("");
    }
  };
  const remove = (id) => {
    dispatch(removeReminder(id));
  };
  const done = (ele) => {
    setIsActive((current) => !current);
    // bake_cookie("status" , { textDecoration: "line-through"})
    
  };
  const renderReminders = () => {
    return (
      <ul className="list-group">
        {state.map((ele) => {
          return (
            <li
              key={ele.id}
              className="list-group-item d-flex justify-content-between align-items-center m-1"
            >
              <div className="info">
                <div >{ele.text}</div>
                <div>{moment(new Date(ele.date)).fromNow()}</div>
              </div>
              {ele.text !== "" && (
                <div className="icons">
                  <div
                    className="remove btn btn-danger"
                    onClick={() => {
                      remove(ele.id);
                    }}
                  >
                    Del
                  </div>
                  <div
                    className="done btn btn-primary"
                    onClick={() => done(ele)}
                  >
                    Done
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="App">
      <div className="reminder p-3">
        <img src={img} alt="logo" className="w-25 d-flex m-auto" />
        <h2 className="title">What Should U Do...?</h2>
        <input
          className="form-control m-1"
          type="text"
          placeholder="Enter What You Will Do ... "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="form-control m-1"
          type="datetime-local"
          placeholder="Enter What You Will Do ... ?"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>
      <div className="btns d-grid gap-1 m-1">
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            handleAddReminder(title, date);
          }}
        >
          Add Reminder
        </button>
        {renderReminders()}
        <button
          className="btn btn-danger btn-block"
          onClick={() => {
            dispatch(clearReminder());
          }}
        >
          Clear Reminders
        </button>
      </div>
    </div>
  );
}

export default App;
