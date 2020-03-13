import * as React from "react";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
}

const Section = ({title, children}: ResumeSectionProps) => {
    return (
        <React.Fragment>
            <h2
                className="title is-4 has-text-centered"
                style={{width: "100%", padding: "0.75rem", backgroundColor: "whitesmoke"}}
            >
                {title}
            </h2>
            <div className="container" style={{marginBottom: "3rem"}}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default Section;
