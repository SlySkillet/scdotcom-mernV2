import ProjectCard from "../createProjectCard";
import {
  SiFastapi,
  SiReact,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
} from "react-icons/si";

function Plunge() {
  return (
    <ProjectCard
      projectTitle={"Plunge"}
      completedDate={"August, 2023"}
      imageUrls={[
        "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186839/project_screenshots/plunge_screenshots/main-page_revxhz.png",
        "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186841/project_screenshots/plunge_screenshots/location-page_myt9ii.png",
        "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/plunge_screenshots/categories-page_d4shhc.png",
      ]}
      imageWidth={"170"}
      techIcons={[
        <SiFastapi />,
        <SiReact />,
        <SiPython />,
        <SiJavascript />,
        <SiPostgresql />,
        <SiGooglecloud />,
        <SiDocker />,
      ]}
      description={
        "I created this peer-to-peer marketplace application from scratch in a team of four cohort-mates at Hack Reactor. We began with the idea to build a platform housing informal classes for local people to share their knowledge, acquire new skills and foster community. This was my first experience taking a full stack application from seed to deployment. Over 6 weeks we wire-framed our vision for the application, built a development environment with docker, created our backend using Fast API and a SQL database, and created a dynamic user interface with React.js. I am particularly proud of my work in implementing the Google Maps API and Redux toolkit into this project. The map centers on the authenticated user's address provided in their account information and accessed through the Redux store. Learning to work with global state and Google API were my highest priority learning objectives in this project and I'm very happy with our product."
      }
      liveLink={"https://luckythirteen.gitlab.io/plunge/"}
      repoLink={"https://github.com/SlySkillet/plunge"}
      techStack={`React | FastAPI | Python | Javascript | SQL | GoogleMaps`}
      rightOrLeft={"project-card-container left-project first"}
    />
  );
}

export default Plunge;
