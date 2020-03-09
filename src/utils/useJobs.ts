import {graphql, useStaticQuery} from "gatsby";
import {ContentfulJob} from "./schema";

export default function useJobs(): ContentfulJob[] {
    const {
        allContentfulJob: {nodes: jobs},
    } = useStaticQuery(graphql`
        query JobQuery {
            allContentfulJob {
                nodes {
                    isHourly
                    endPay
                    endDate
                    startDate
                    startPay
                    title
                    company
                    location {
                        lat
                        lon
                    }
                    description {
                        json
                    }
                }
            }
        }
    `);

    return jobs;
}
