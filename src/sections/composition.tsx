import * as React from "react";
import Section from "../components/section";
// import Project from "../components/project";
// import useData, {DataType} from "../utils/useData";

const Composition = () => {
    // const compositions = null;//useData(DataType.COMPOSITIONS);

    return (
        <Section title="Composition">
            <p className="is-tight-desktop">
                I occasionally compose and arrange music. I don&apos;t do it in any
                professional capacity, but music is meant to be listened to, so here
                are some of my favorite compositions/arrangements.
            </p>
            <div className="container">
                <div className="columns is-multiline">
                    {/* {compositions.map((composition, i) => ( */}
                    {/*    // <Composition composition={composition} key={i} /> */}
                    <span />
                    {/* ))} */}
                </div>
            </div>
        </Section>
    );
};

export default Composition;
