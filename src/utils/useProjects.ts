import { graphql, useStaticQuery } from "gatsby";

export default function useProjects(): any[] {
  const {
    allGithubData: {
      nodes: [
        {
          data: {
            user: {
              pinnedItems: { nodes: repositories },
            },
          },
        },
      ],
    },
  } = useStaticQuery(graphql`
    query RepoQuery {
      allGithubData {
        nodes {
          data {
            user {
              pinnedItems {
                nodes {
                  name
                  description
                  homepageUrl
                  url
                  object {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return repositories;
}
