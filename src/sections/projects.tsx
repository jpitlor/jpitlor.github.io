import * as React from "react";
import Repository from "../components/repository";
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 50%);
	grid-column-gap: 1rem;
	
	@media(max-width: 576px) {
		grid-template-columns: auto;
	}
`;

export default function Projects() {
    const {
        allGithubData: {
            nodes: [{
                data: {
                    user: {
                        pinnedItems: {
                            nodes: pinnedRepositories,
                        },
                    },
                },
            }],
        },
    } = useStaticQuery(graphql`
        query ProjectsQuery {
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

    return (
        <React.Fragment>
            <h2 className="title has-text-centered">Projects</h2>
            <p className="sm-column">
                These are some of the projects I&apos;ve been working on that I want to
                showcase! This page is generated from my list of pinned repositories
                on Github, but if you want to see other things I&apos;ve done, you can
                visit <a href="https://github.com/piticent123">my profile</a>.
            </p>
            <br />
            <p className="sm-column">
                As a disclaimer, most of my projects are unfinished (as is the case
                with most side projects). However, I try to delete the ones that
                are practically just the boilerplate.
            </p>
            <br />
            <br />
            <div className="container">
                <div className="columns is-multiline">
                    {pinnedRepositories.map((repo: any, i: any) => (
                        <Repository repo={repo} key={i} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
