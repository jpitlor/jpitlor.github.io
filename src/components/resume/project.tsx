import * as React from "react";
import {GithubDataDataUserPinnedItemsNodes} from "../../utils/schema";
import useReadme from "../../utils/useReadme";

interface ProjectProps {
    project: GithubDataDataUserPinnedItemsNodes;
}

const Project = ({project}: ProjectProps) => {
    const {title} = useReadme(project.object.text);

    return (
        <div style={{marginBottom: "1.5rem"}}>
            <span className="is-size-4">{title}</span>
            <br />
            <span className="is-size-6">{project.description}</span>
        </div>
    );
};

export default Project;
