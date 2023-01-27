import { fireEvent, render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./pages/BookingPage";

// import App from "./App";

import BookingForm from "./component/BookingForm";

test("Renders the Make Your reservation", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes should return the correct expected value", () => {
  const result = initializeTimes();
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes should return the same value that is provided in the state", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "update" };
  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});

test("submits the form correctly", () => {
  const onSubmit = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const dispatch = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      onSubmit={onSubmit}
    />
  );

  const resDate = screen.getByLabelText(/Choose date/);
  fireEvent.change(resDate, {
    target: { value: "2022-05-15" },
  });
  const resTime = screen.getByLabelText(/Choose time/);
  fireEvent.change(resTime, {
    target: { value: "17:00" },
  });
  const noGuests = screen.getByLabelText(/Number of guests/);
  fireEvent.change(noGuests, {
    target: { value: 5 },
  });
  const occasion = screen.getByLabelText(/Occasion/);
  fireEvent.change(occasion, {
    target: { value: "Anniversary" },
  });
  // simulate form submission
  const submitButton = screen.getByText("Make Your reservation");
  fireEvent.click(submitButton);
  // assert that the form was submitted with the correct data
  expect(onSubmit).toHaveBeenCalledWith({
    date: "2022-05-15",
    time: "17:00",
    guests: "5",
    occasion: "Anniversary",
  });
});
