import { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const { availableTimes, dispatch } = props;

  const submitHnadler = (e) => {
    e.preventDefault();
    console.log("date: ", date);
    console.log("time: ", time);
    console.log("guests: ", guests);
    console.log("occasion: ", occasion);
    console.log("availableTimes: ", availableTimes);
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
        >
          {availableTimes.map((time, index) => (
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
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
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
