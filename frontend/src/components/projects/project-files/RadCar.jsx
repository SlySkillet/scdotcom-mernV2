import ProjectCard from "../createProjectCard";
import { SiReact, SiPython, SiJavascript, SiDocker } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";

function RadCar() {
  return (
    <ProjectCard
      projectTitle={"RadCar Automobiles"}
      completedDate={"June, 2023"}
      imageUrls={[
        "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186842/project_screenshots/rad_car/radcar_main_page_d6cpoa.png",
        "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186842/project_screenshots/rad_car/service_history_ppbeum.png",
      ]}
      imageWidth={"170"}
      techIcons={[
        <SiReact />,
        <TbBrandDjango />,
        <SiPython />,
        <SiJavascript />,
        <SiDocker />,
      ]}
      description={
        "This was a challenging project I took on in the second module of Hack Reactor. Many thanks to my partner Mac Stephens! Together we put together three microservices to handle an auto-dealership's inventory, services and sales. After completing a functional application, I did some experimenting with the user interface and gained some valuable experience incorporating bootstrap and custom css in React."
      }
      liveLink={null}
      repoLink={"https://github.com/SlySkillet/radcar/tree/layout-experiment"}
      techStack={`Django | React | Python | Javascript | Docker`}
      rightOrLeft={"project-card-container right-project"}
    />
  );
}

export default RadCar;
