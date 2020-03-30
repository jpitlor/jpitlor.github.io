import * as React from "react";
import {View, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    ul: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
    },
})

interface ULProps {
    children: React.ReactNode;
}

const UL = ({children}: ULProps) => (
    <View style={styles.ul}>
        {children}
    </View>
);

export default UL;
