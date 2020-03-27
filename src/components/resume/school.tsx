import * as React from "react";
import {View, Text} from "@react-pdf/renderer";

import {ContentfulSchool} from "../../utils/schema";

interface SchoolProps {
    school: ContentfulSchool;
}

const School = ({school}: SchoolProps) => (
    <View>
        <Text>
            {new Date(school.startDate).getFullYear()} - {new Date(school.endDate).getFullYear()}
        </Text>
        <Text>{school.name} - B.S. {school.major.join(", ")}</Text>
        <Text>Campus:</Text>
        <Text>{school.city}</Text>
        <Text>Minors:</Text>
        <Text>{school.minor.join(", ")}</Text>
        <Text>Concentrations:</Text>
        <Text>{school.concentration.join(", ")}</Text>
    </View>
);

export default School;
