import { HeroSection } from "./heroSection/HeroSection";
import { PracticeSection } from "./practice/PracticeSection";
import { RecentInsights } from "./recentInsights/RecentInsights";
import Testimonials from "./Testimonials/Testimonials";
import { WhyChoose } from "./whyChoose/WhyChoose";
import styles from "./Home.module.css"; 



export const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <PracticeSection />
      <WhyChoose />
      <RecentInsights />
      <Testimonials />
      
    </div>
  );
};
