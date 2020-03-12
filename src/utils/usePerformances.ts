import {graphql, useStaticQuery} from "gatsby";
import _ from "lodash";
import {ContentfulMusic} from "./schema";

export default function usePerformances(): ContentfulMusic[] {
    const {
        allContentfulMusic: {nodes: performances},
    } = useStaticQuery(graphql`
        query PerformanceQuery {
            allContentfulMusic(filter: {group: {nin: "Composition"}}) {
                nodes {
                    title
                    group
                    year
                    description {
                        json
                    }
                    recording
                }
            }
        }
    `);

    return _.orderBy(performances, "year", "desc");
}
