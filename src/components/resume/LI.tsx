import * as React from "react";
import {View, Text, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    li: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        width: "100%",
    },
    text: {
        paddingLeft: "1mm",
        flex: 1,
    },
})

interface LIProps {
    children: React.ReactNode;
}

const LI = ({children}: LIProps) => (
    <View style={styles.li}>
        <Text>•</Text>
        <Text style={styles.text}>{children}</Text>
    </View>
);

export default LI;
