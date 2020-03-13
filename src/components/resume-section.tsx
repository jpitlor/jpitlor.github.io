import * as React from "react";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
}

const ResumeSection = ({title, children}: ResumeSectionProps) => {
    return (
        <React.Fragment>
            <h2
                className="subtitle column has-text-centered"
                style={{width: "100%", backgroundColor: "whitesmoke"}}
            >
                {title}
            </h2>
            <div className="container" style={{marginBottom: "3rem"}}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default ResumeSection;
