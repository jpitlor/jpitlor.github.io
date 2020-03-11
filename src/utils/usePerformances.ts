import {graphql, useStaticQuery} from "gatsby";
import {ContentfulMusic} from "./schema";

export default function usePerformances(): ContentfulMusic[] {
    const {
        allContentfulMusic: {nodes: performances},
    } = useStaticQuery(graphql`
        query PerformanceQuery {
            allContentfulMusic(filter: {group: {nin: "Composition"}}) {
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
