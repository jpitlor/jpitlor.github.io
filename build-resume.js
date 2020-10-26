import React from "react";
import ReactPDF from '@react-pdf/renderer';
import fs from 'fs';

import Resume from "./src/templates/resume";

const {
  jobs,
  projects,
  schools,
} = JSON.parse(fs.readFileSync("./resume-data.json", "utf-8"));
ReactPDF.render(
  <Resume jobs={jobs} projects={projects} schools={schools} />,
  `${__dirname}/docs/Jordan Pitlor Resume.pdf`
);
