import FAQ from "../faq/FAQ";
import { HeroSection } from "./heroSection/HeroSection";
import { PracticeSection } from "./practice/PracticeSection";
import { RecentInsights } from "./recentInsights/RecentInsights";
import Testimonials from "./Testimonials/Testimonials";
import { WhyChoose } from "./whyChoose/WhyChoose";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

export const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        textAlign: "center",
        background: "#f9f9f9",
      }}
    >
      <HeroSection />
      <PracticeSection />
      <WhyChoose />
      <RecentInsights />
      <Testimonials />
      <FAQ />
    </motion.div>
  );
};
