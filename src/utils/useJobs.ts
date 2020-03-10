import {graphql, useStaticQuery} from "gatsby";
import {
    ContentfulJob,
    ContentfulJobDescriptionRichTextNode,
    ContentfulJobLocation,
} from "./schema";
import {useEffect, useState} from "react";
import _ from "lodash";

export function useJobsRaw(): ContentfulJob[] {
    const {
        allContentfulJob: {nodes: jobs},
    } = useStaticQuery(graphql`
        query JobQuery {
            allContentfulJob {
                nodes {
                    isHourly
                    endPay
                    endDate
                    startDate
                    startPay
                    title
                    company
                    location {
                        lat
                        lon
                    }
                    description {
                        json
                    }
                }
            }
        }
    `);

    return jobs;
}

async function getGoogleMapLocation({lat, lon}: any): Promise<string> {
    const route = "https://maps.googleapis.com/maps/api/geocode/json";
    const queryString = `?latlng=${lat},${lon}&key=${process.env.GATSBY_GOOGLE_MAPS_API_TOKEN}`;
    const fetchResult = await fetch(route + queryString);
    const apiResult = await fetchResult.json();

    return apiResult.results[0].place_id;
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
    description: ContentfulJobDescriptionRichTextNode;
    endDate?: Date;
    endPay: number;
}

type JobGroup = [number, Job[]];

export function useJobs(): JobGroup[] {
    const rawJobs = useJobsRaw();
    const [jobs, setJobs] = useState<JobGroup[]>([]);

    useEffect(() => {
        (async () => {
            const transformedJobs: Job[] = _.sortBy(
                await Promise.all(rawJobs.map(async j => ({
                    ...j,
                    startDate: new Date(j.startDate),
                    endDate: j.endDate ? new Date(j.endDate) : undefined,
                    location: await getGoogleMapLocation(j.location),
                }))),
                "startDate"
            );
            const groupedJobs: Record<string, Job[]> = _.groupBy(transformedJobs, j => Math.floor(j.startDate.getFullYear() / 5));
            const entries = Object.entries(groupedJobs).map(([key, val]) => ([Number(key), val]) as JobGroup);
            setJobs(entries);
        })();
    });

    return jobs;
}
