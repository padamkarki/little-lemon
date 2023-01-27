import BookingForm from "../component/BookingForm";
import { useReducer } from "react";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  if (action.type === "update") {
    // logic to update available times based on date
    // for now, returning the same times
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  return state;
};

const BookingPage = () => {
  const submitHnadler = (data) => {
    console.log("Form Submitted", data);
  };
  const initialState = initializeTimes();
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  return (
    <BookingForm
      onSubmit={submitHnadler}
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );
};

export default BookingPage;
