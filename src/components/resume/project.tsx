import * as React from "react";
import {View, Text} from "@react-pdf/renderer";

import {GithubDataDataUserPinnedItemsNodes} from "../../utils/schema";
import useReadme from "../../utils/useReadme";

interface ProjectProps {
    project: GithubDataDataUserPinnedItemsNodes;
}

const Project = ({project}: ProjectProps) => {
    const {title} = useReadme(project.object.text);

    return (
        <View>
            <Text>{title}</Text>
            <Text>{project.description}</Text>
        </View>
    );
};

export default Project;
