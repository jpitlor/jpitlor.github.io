import { graphql, useStaticQuery } from "gatsby";
import { ContentfulSchool } from "./schema";

export default function useSchools(): ContentfulSchool[] {
  const {
    allContentfulSchool: { nodes: schools },
  } = useStaticQuery(graphql`
    query SchoolQuery {
      allContentfulSchool {
        nodes {
          endDate
          startDate
          name
          gpa
          inProgress
          major
          minor
          concentration
          city
          state
          logo {
            file {
              url
            }
          }
          location {
            lat
            lon
          }
        }
      }
    }
  `);

  return schools;
}
