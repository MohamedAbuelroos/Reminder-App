import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from "./types"

export const addReminder = (text, date) =>{
  return {
    type: ADD_REMINDER,
    text,
    date
  }
}

export const removeReminder = (id) => {
  return {
    type: REMOVE_REMINDER,
    id
  }
}

export const clearReminder = () => {
  return {
    type: CLEAR_REMINDER
  }
}

