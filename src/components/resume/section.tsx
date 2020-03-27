import * as React from "react";
import {Text, View} from "@react-pdf/renderer";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
}

const Section = ({title, children}: ResumeSectionProps) => {
    return (
        <React.Fragment>
            <Text>{title}</Text>
            <View>{children}</View>
        </React.Fragment>
    );
};

export default Section;
