import * as React from "react";
import Project from "../components/project";
import { GithubDataDataUserPinnedItemsNodes } from "../../utils/schema";

interface ProjectsProps {
  data: GithubDataDataUserPinnedItemsNodes[];
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
