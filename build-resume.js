import React from "react";
import ReactPDF from '@react-pdf/renderer';
import fs from 'fs';

import Template from "src/resume";

const {
  jobs,
  projects,
  schools,
} = JSON.parse(fs.readFileSync("./resume-data.json", "utf-8"));
ReactPDF.render(
  <Template jobs={jobs} projects={projects} schools={schools} />,
  `${__dirname}/docs/Jordan Pitlor Resume.pdf`
);
