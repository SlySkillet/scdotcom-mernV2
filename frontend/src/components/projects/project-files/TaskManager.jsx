import ProjectCard from "../createProjectCard";
import { SiPython, SiPlotly } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";

function TaskManager() {
  return (
    <ProjectCard
      projectTitle={"Task Manager"}
      completedDate={"April, 2023"}
      imageUrls={[
        "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/my_tasks_f1tqob.png",
        "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/project_view_fv3vby.png",
      ]}
      imageWidth={"170"}
      techIcons={[<TbBrandDjango />, <SiPython />, <SiPlotly />]}
      description={
        "This is the first application I built from scratch using Django. It is a task manager for a contributors to a project to organize and visualize team progress. This was my first try at implementing a 3rd party api (plotly) and data visualization. I built a full stack application from scratch giving a project manager the ability to assign and monitor progress through a clean user interface with Django 4 framework. I inncorporated gantt charts in the user interface to provide visual representation of project tasks, their due dates and progress towards completion by integrating Plotly API."
      }
      liveLink={null}
      repoLink={
        "https://github.com/SlySkillet/task-manager/tree/chart_experiment"
      }
      techStack={`Django | Python | Plotly API`}
      rightOrLeft={"project-card-container left-project"}
    />
  );
}

export default TaskManager;
