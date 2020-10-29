import * as React from "react";
import Project from "../components/project";
import useProjects from "../utils/useProjects";
import Section from "../components/section";

export default function Projects() {
    const pinnedRepositories = useProjects();

    return (
        <Section title="Projects">
            <p className="is-tight-desktop">
                These are some of the projects I&apos;ve been working on that I want to
                showcase! This page is generated from my list of pinned repositories
                on Github, but if you want to see other things I&apos;ve done, you can
                visit <a href="https://github.com/piticent123">my profile</a>.
            </p>
            <br />
            <br />
            <div className="columns is-multiline">
                {pinnedRepositories.map((repo, i) => (
                    <Project repo={repo} key={i} />
                ))}
            </div>
        </Section>
    );
}
