import * as React from "react";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section = ({title, children}: SectionProps) => {
    return (
        <React.Fragment>
            <h2 className="title has-text-centered">{title}</h2>
            <div className="container" style={{maxWidth: "calc(100% - 2rem)"}}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default Section;
