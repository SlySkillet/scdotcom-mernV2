import "./home-styles.css";
import TitleSection from "./home-components/TitleSection";
import BioContent from "./home-components/BioContent";
import FeaturedProject from "./home-components/FeaturedProject";

function HomePage() {
  return (
    <div className="home-container">
      <TitleSection />
      <BioContent />
      <FeaturedProject />
    </div>
  );
}

export default HomePage;
