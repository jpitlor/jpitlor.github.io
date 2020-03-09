import * as React from "react";
import Section from "../components/section";
import useCompositions from "../utils/useCompositions";
import Composition from "../components/composition";

const Compositions = () => {
    const compositions = useCompositions();

    return (
        <Section title="Composition">
            <p className="is-tight-desktop" style={{marginBottom: "3rem"}}>
                I occasionally compose and arrange music. I don&apos;t do it in any
                professional capacity, but music is meant to be listened to, so here
                are some of my favorite compositions/arrangements.
            </p>
            <div className="container">
                {compositions.map((composition, i) => (
                    <Composition composition={composition} key={i} />
                ))}
            </div>
        </Section>
    );
};

export default Compositions;
