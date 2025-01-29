import { graphql, useStaticQuery } from "gatsby";

export default function useSchools(): any[] {
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
