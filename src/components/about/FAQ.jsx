import { useState } from "react";
import styles from "./FAQ.module.css";

export const FAQ = () => {
  const faqs = [
    {
      question: "How can I submit my feedback?",
      answer:
        "You can submit feedback using the form on our homepage. Select your rating, write your comments, and click 'Send'.",
    },
    {
      question: "Is my feedback anonymous?",
      answer:
        "Yes, all feedback is collected anonymously unless you choose to share your contact details.",
    },
    {
      question: "How often do you review feedback?",
      answer:
        "We review feedback weekly to ensure we continuously improve our services.",
    },
    {
      question: "Can I edit my feedback after submission?",
      answer:
        "Currently, feedback cannot be edited after submission, but you can submit a new one anytime.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles["faq-container"]}>
      <h2 className={styles["faq-title"]}>Frequently Asked Questions</h2>
      <div className={styles["faq-list"]}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles["faq-item"]} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles["faq-question"]}>
              <span>{faq.question}</span>
              <span className={styles["faq-icon"]}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={styles["faq-answer"]}
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
