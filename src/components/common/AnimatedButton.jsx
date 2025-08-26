import { motion } from "framer-motion";
import { ButtonBase } from "@mui/material";

const MotionButton = motion.create(ButtonBase);

export const AnimatedButton = ({ variant = "contained", children }) => {
  const isContained = variant === "contained";

  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      sx={{
        background: isContained
          ? "linear-gradient(45deg, #00e5ff, #00bcd4)"
          : "transparent",
        color: isContained ? "#fff" : "#00e5ff",
        border: isContained ? "none" : "2px solid #00e5ff",
        fontWeight: 600,
        borderRadius: 2,
        px: 3,
        py: 1.5,
        boxShadow: isContained ? "0 4px 12px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.3s ease",
        "&:hover": {
          background: isContained
            ? "linear-gradient(45deg, #00bcd4, #00e5ff)"
            : "rgba(0,229,255,0.1)",
          borderColor: "#00bcd4",
          color: "#00bcd4",
        },
      }}
    >
      {children}
    </MotionButton>
  );
};
