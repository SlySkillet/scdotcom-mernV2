import "./home-styles.css";

function HomePage() {
  return (
    <div className="home-container">
      <div className="about-container">
        <div className="name-container">
          <h1 className="about-content name">Simon</h1>
          <h1 className="about-content name">Conrad</h1>
        </div>
        <img
          alt="simon"
          className="portrait"
          src="https://res.cloudinary.com/ddgt67wcb/image/upload/v1707233141/simon_comic_new_lyse4a.jpg"
        />
      </div>
    </div>
  );
}

export default HomePage;
