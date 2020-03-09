import {graphql, useStaticQuery} from "gatsby";
import {ContentfulMusic} from "./schema";

export default function usePerformances(): ContentfulMusic[] {
    const {
        allContentfulMusic: {nodes: performances},
    } = useStaticQuery(graphql`
        query PerformanceQuery {
            allContentfulMusic(filter: {type: {eq: "Performance"}}) {
                nodes {
                    title
                    description {
                        json
                    }
                    recording
                }
            }
        }
    `);

    return performances;
}
