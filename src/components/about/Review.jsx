import { useState } from "react";
import styles from "./Review.module.css";

export const Review = () => {
  const [rating, setRating] = useState(0); 
  const [hovered, setHovered] = useState(0); 

  return (
    <section className={styles["home-container"]}>
      <div className={styles["feedback-card"]}>
        <h2>Rate your experience</h2>
        <p>
          We highly value your feedback! Kindly take a moment to rate your
          experience and provide us with your valuable feedback.
        </p>

       
        <div className={styles["stars"]}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`${styles.star} ${
                star <= (hovered || rating) ? styles.active : ""
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
            >
              ★
            </span>
          ))}
        </div>

        
        <textarea
          placeholder="Tell us about your experience!"
          rows="4"
          className={styles.textarea}
        ></textarea>

        
        <button className={styles["send-btn"]}>Send</button>
      </div>
    </section>
  );
};
