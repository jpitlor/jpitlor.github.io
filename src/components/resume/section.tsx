import * as React from "react";
// @ts-ignore
import styled from "@react-pdf/styled-components";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
}

const Title = styled.Text`
    font-family: "Merriweather";
    font-size: 16px;
`;

const Content = styled.View`
    margin-bottom: 2rem;
    font-family: "Rubik";
    font-size: 12px;
`;

const Section = ({title, children}: ResumeSectionProps) => {
    return (
        <React.Fragment>
            <Title>{title}</Title>
            <Content>{children}</Content>
        </React.Fragment>
    );
};

export default Section;
