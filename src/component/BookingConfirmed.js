import { useLocation } from "react-router-dom";
import styles from "./BookingConfirmed.module.css";

const BookingConfirmed = () => {
  const location = useLocation();
  const formData = location.state.formData;
  return (
    <>
      <div className={styles.section}>
        <h2 className={styles.heading}>Booking Confirmed!</h2>
        <div className={styles.details}>
          <p>
            Thank you for choosing Little Lemon for your dining experience. We
            are thrilled to confirm your reservation.
            <span> Your reservation details are as follows:</span>
          </p>
          <div className={styles.details_data}>
            <h3>Date: {formData.date}</h3>
            <h3>Time: {formData.time}</h3>
            <h3> Number of Guests: {formData.guests}</h3>
            <h3>Occasion: {formData.occasion}</h3>
          </div>
          <p>
            We are looking forward to welcoming you to our restaurant and
            ensuring that you have an unforgettable dining experience. If there
            are any changes to your reservation or if you need to make any
            special requests, please feel free to contact us.
          </p>
        </div>
      </div>
    </>
  );
};

export default BookingConfirmed;
