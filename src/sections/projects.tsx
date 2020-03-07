import * as React from "react";
import Project from "../components/project";
import useQuery, {DataType} from "../utils/useQuery";
import {GithubDataDataUserPinnedItemsNodes} from "../utils/schema";
import Section from "../components/section";

export default function Projects() {
    const pinnedRepositories = useQuery<GithubDataDataUserPinnedItemsNodes>(DataType.PROJECTS);

    return (
        <Section title="Projects">
            <p
                style={{
                    maxWidth: "40rem",
                    lineHeight: "1.5",
                    margin: "0 auto",
                }}
            >
                These are some of the projects I&apos;ve been working on that I want to
                showcase! This page is generated from my list of pinned repositories
                on Github, but if you want to see other things I&apos;ve done, you can
                visit <a href="https://github.com/piticent123">my profile</a>.
            </p>
            <br />
            <p
                style={{
                    maxWidth: "40rem",
                    lineHeight: "1.5",
                    margin: "0 auto",
                }}
            >
                As a disclaimer, most of my projects are unfinished (as is the case
                with most side projects). However, I try to delete the ones that
                are practically just the boilerplate.
            </p>
            <br />
            <br />
            <div className="container">
                <div className="columns is-multiline">
                    {pinnedRepositories.map((repo, i) => (
                        <Project repo={repo} key={i} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
