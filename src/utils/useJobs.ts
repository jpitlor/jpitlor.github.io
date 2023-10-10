import { graphql, useStaticQuery } from "gatsby";
import { useEffect, useState } from "react";
import orderBy from "lodash.orderby";
import groupBy from "lodash.groupby";

export function useJobsRaw(): Queries.ContentfulJob[] {
  const {
    allContentfulFeatured: {
      nodes: [{ resumeJobs }],
    },
  } = useStaticQuery(graphql`
    query JobQuery {
      allContentfulFeatured {
        nodes {
          resumeJobs {
            isHourly
            endPay
            endDate
            startDate
            startPay
            title
            company
            city
            state
            location {
              lat
              lon
            }
            description {
              raw
            }
          }
        }
      }
    }
  `);

  return resumeJobs;
}

const cache: Record<string, string> = {};

async function getGoogleMapLocation({ lat, lon }: any): Promise<string> {
  if (cache[`${lat},${lon}`] || !fetch) return cache[`${lat},${lon}`];

  const route = "https://maps.googleapis.com/maps/api/geocode/json";
  const queryString = `?latlng=${lat},${lon}&key=${process.env.GATSBY_GOOGLE_MAPS_API_TOKEN}`;
  const fetchResult = await fetch(route + queryString);
  const apiResult = await fetchResult.json();

  cache[`${lat},${lon}`] = apiResult.results?.[0]?.place_id || "";
  return apiResult.results?.[0]?.place_id;
}

export interface Job {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  startPay: number;
  isHourly: boolean;
  city: string;
  state: string;
  description: Queries.ContentfulJobDescription;
  endDate?: Date;
  endPay: number;
}

export type JobGroup = [number, Job[]];

export function useJobs(): JobGroup[] {
  const rawJobs = useJobsRaw();
  const [jobs, setJobs] = useState<JobGroup[]>([]);

  useEffect(() => {
    (async () => {
      const transformedJobs: Job[] = orderBy(
        await Promise.all(
          rawJobs.map(
            async (j) =>
              ({
                ...j,
                startDate: new Date(j.startDate ?? ""),
                endDate: j.endDate ? new Date(j.endDate) : undefined,
                location: await getGoogleMapLocation(j.location),
              }) as Job,
          ),
        ),
        "startDate",
        "desc",
      );
      const groupedJobs: Record<string, Job[]> = groupBy(transformedJobs, (j) =>
        Math.floor(j.startDate.getFullYear() / 5),
      );
      const entries = orderBy(
        Object.entries(groupedJobs).map(
          ([key, val]) => [Number(key) * 5, val] as JobGroup,
        ),
        "0",
        "desc",
      );
      setJobs(entries);
    })();
  }, []);

  return jobs;
}
