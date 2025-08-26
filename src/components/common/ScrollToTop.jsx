import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return visible ? (
    <button
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        background: "#00bcd4",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "0.8rem",
        cursor: "pointer",
        fontSize: "1.2rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  ) : null;
};

export default ScrollToTop;
