import {graphql, useStaticQuery} from "gatsby";
import {ContentfulComposition} from "./schema";

export default function useCompositions(): ContentfulComposition[] {
    const {
        allContentfulComposition: {nodes: compositions},
    } = useStaticQuery(graphql`
        query CompositionQuery {
            allContentfulComposition {
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
