import {graphql, useStaticQuery} from "gatsby";
import {ContentfulMusic} from "./schema";

export default function useCompositions(): ContentfulMusic[] {
    const {
        allContentfulMusic: {nodes: compositions},
    } = useStaticQuery(graphql`
        query CompositionQuery {
            allContentfulMusic(filter: {group: {eq: "Composition"}}) {
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

    return compositions;
}
