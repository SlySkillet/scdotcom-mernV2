import "./home-styles.css";
import TitleSection from "./home-components/TitleSection";
import BioContent from "./home-components/BioContent";
import FeaturedProject from "./home-components/FeaturedProject";
import Footer from "./home-components/Footer";

function HomePage() {
  return (
    <div className="home-container">
      <TitleSection />
      <BioContent />
      <FeaturedProject />
      <Footer />
    </div>
  );
}

export default HomePage;
