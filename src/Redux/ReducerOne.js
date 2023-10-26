import { combineReducers } from "redux";
import { ADD_REMINDER, CLEAR_REMINDER, DONE_REMINDER, REMOVE_REMINDER } from "./types";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

const Reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie("cookie")
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [
        ...state,
        {
          text: action.text,
          date: action.date,
          id: Math.random(),
        },
      ];
      bake_cookie("cookie", reminders);
      return reminders;
    case REMOVE_REMINDER:
      reminders = state.filter((ele) => ele.id !== action.id);
      bake_cookie("cookie", reminders);
      return reminders;
    case CLEAR_REMINDER:
      reminders = [];
      delete_cookie("cookie");
      return reminders;
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  Reminders,
});

export default Reminders;
