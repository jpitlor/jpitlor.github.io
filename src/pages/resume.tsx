import * as React from "react";
import {PDFViewer} from "@react-pdf/renderer";

import ResumeTemplate from "../templates/resume";

const Resume = () => (
    <PDFViewer>
        <ResumeTemplate />
    </PDFViewer>
);

export default Resume;
