import * as React from "react";
import useProjects from "../../utils/useProjects";
import Project from "../../components/resume/project";

const Projects = () => {
    const pinnedRepositories = useProjects();
    return (
        <React.Fragment>
            {pinnedRepositories.map(repo => <Project project={repo} key={repo.name} />)}
        </React.Fragment>
    )
};

export default Projects;
