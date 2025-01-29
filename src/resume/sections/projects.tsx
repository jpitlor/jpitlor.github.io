import * as React from "react";
import Project from "../components/project";

interface ProjectsProps {
  data: any[];
}

const Projects = ({ data }: ProjectsProps) => {
  return (
    <React.Fragment>
      {data.map((repo) => (
        <Project project={repo} key={repo.name} />
      ))}
    </React.Fragment>
  );
};

export default Projects;
