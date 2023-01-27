import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, onSubmit }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const submitHnadler = (e) => {
    e.preventDefault();
    onSubmit({ date, time, guests, occasion });
  };

  return (
    <>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={submitHnadler}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          data-testid="res-date"
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: "update", date: e.target.value });
          }}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          data-testid="available-times"
        >
          {availableTimes &&
            availableTimes.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          data-testid="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          data-testid="occasion"
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
