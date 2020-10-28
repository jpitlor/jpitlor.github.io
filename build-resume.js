import ReactPDF from "@react-pdf/renderer";
import fs from "fs";
import React from "react";

import Resume from "./src/resume";

const {
  jobs,
  projects,
  schools
} = JSON.parse(fs.readFileSync("./resume-data.json", "utf-8"));

for (let i = 0; i < jobs.length; i++) {
  if (jobs[i].startDate) {
    jobs[i].startDate = new Date(jobs[i].startDate);
  }
  
  if (jobs[i].endDate) {
    jobs[i].endDate = new Date(jobs[i].endDate);
  }
}

ReactPDF.render(
  <Resume jobs={jobs} projects={projects} schools={schools} />,
  `${__dirname}/docs/Jordan Pitlor Resume.pdf`
);
