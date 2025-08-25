import HeroSection from "./heroSection/HeroSection"
import { PracticeSection } from "./practice/PracticeSection"
import { RecentInsights } from "./recentInsights/RecentInsights"
import { WhyChoose } from "./whyChoose/WhyChoose"
export const Home = () => {
    
    return (
      <>
        <HeroSection />
        <PracticeSection />
        <WhyChoose />
        <RecentInsights />
      </>
    );
}