import React, {useState, useEffect} from "react";
import {PDFViewer} from "@react-pdf/renderer";
import styled from "styled-components";

import Resume from "../templates/resume";
import {useJobs} from "../utils/useJobs";
import useSchools from "../utils/useSchools";
import useProjects from "../utils/useProjects";

const Container = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
`;

const ResumePage = () => {
    const [inBrowser, setInBrowser] = useState(false);
    const jobs = useJobs();
    const schools = useSchools();
    const projects = useProjects();

    useEffect(() => {
        setInBrowser(true);
    }, [jobs]);

    return (
        <Container>
            {inBrowser && <PDFViewer height="100%" width="100%">
                <Resume jobs={jobs} projects={projects} schools={schools} />
            </PDFViewer>}
        </Container>
    );
}

export default ResumePage;
