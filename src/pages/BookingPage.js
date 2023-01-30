import BookingForm from "../component/BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../component/fetch_api";

export const initializeTimes = () => {
  const today = new Date();

  return fetchAPI(today);
  // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  if (action.type === "update") {
    // logic to update available times based on date
    // for now, returning the same times
    let selectedDate = action.date;
    if (!(selectedDate instanceof Date)) {
      selectedDate = new Date(selectedDate);
    }
    if (!selectedDate) {
      console.error("Error: Invalid date object passed to fetchAPI");
      return state;
    }
    return fetchAPI(selectedDate);
    // return fetchAPI(action.date);
    // ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  return state;
};

const BookingPage = () => {
  const submitHandler = (data) => {
    const result = submitAPI(data);
    if (result) {
      console.log("Form Submitted Successfully");
    } else {
      console.log("Form Submission Failed");
    }
    // console.log("Form Submitted", data);
  };

  const initialState = initializeTimes();
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  return (
    <BookingForm
      onSubmit={submitHandler}
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );
};

export default BookingPage;
