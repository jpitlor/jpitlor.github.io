import {graphql, useStaticQuery} from "gatsby";
import _ from "lodash";
import {ContentfulMusic} from "./schema";

interface Performances {
    allPerformances: ContentfulMusic[];
    featuredPerformances: ContentfulMusic[];
}

export default function usePerformances(): Performances {
    const {
        allContentfulMusic: {nodes: performances},
        allContentfulFeatured: {nodes: [{sitePerformances: featuredPerformances}]},
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

            allContentfulFeatured {
                nodes {
                    sitePerformances {
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
        }
    `);

    return {
        featuredPerformances: featuredPerformances,
        allPerformances: _.orderBy(performances, "year", "desc"),
    };
}
