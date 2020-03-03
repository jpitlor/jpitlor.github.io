import * as React from "react";
import useQuery, {DataType} from "../utils/useQuery";
import {ContentfulJob, ContentfulSchool, GithubDataDataUserPinnedItemsNodes} from "../utils/schema";

const PrintableResume = () => {
    const jobs = useQuery<ContentfulJob>(DataType.JOBS);
    const schools = useQuery<ContentfulSchool>(DataType.SCHOOLS);
    const pinnedRepositories = useQuery<GithubDataDataUserPinnedItemsNodes>(DataType.PROJECTS);
    console.log(jobs, schools, pinnedRepositories);

    return (
        <h1>This is different text!</h1>
    )
};

export default PrintableResume;
