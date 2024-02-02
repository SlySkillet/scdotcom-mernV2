import ProjectCard from "../createProjectCard";
import { DiNodejsSmall } from "react-icons/di";
import {
  SiReact,
  SiMongodb,
  SiDocker,
  SiExpress,
  SiDigitalocean,
  SiNginx,
} from "react-icons/si";

function BlogProject() {
  return (
    <ProjectCard
      projectTitle={"My Blog"}
      completedDate={"August, 2023"}
      imageWidth={"170"}
      techIcons={[
        <SiMongodb />,
        <SiExpress />,
        <SiReact />,
        <DiNodejsSmall />,
        <SiNginx />,
        <SiDigitalocean />,
        <SiDocker />,
      ]}
      description={
        "I created this to be a living document of my research and learning in tech. I am actively sharing developments in the tech industry and documenting my learning and personal projects. I created a database to store my entries for this portion of my site. I built a node server, containerized my code, configured nginx as a reverse proxy and deployed it to digital ocean."
      }
      liveLink={"/blog"}
      repoLink={"https://github.com/SlySkillet/scdotcom-mernV2"}
      techStack={`MongoDB | Express.js | React | Node.js | Nginx | Digital Ocean`}
      rightOrLeft={"project-card-container right-project first"}
      iconClass={"project-icon right-icon"}
      icon={<DiNodejsSmall />}
      iconID="DiNodejsSmall"
    />
  );
}

export default BlogProject;
