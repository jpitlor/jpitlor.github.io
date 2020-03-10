import * as React from "react";
import Section from "../components/section";
import Performance from "../components/performance";
import usePerformances from "../utils/usePerformances";

const Performances = () => {
    const performances = usePerformances();

    return (
        <Section title="Performance">
            <p className="is-tight-desktop" style={{marginBottom: "3rem"}}>
                I occasionally compose and arrange music. I don&apos;t do it in any
                professional capacity, but music is meant to be listened to, so here
                are some of my favorite compositions and arrangements.
            </p>
            <div className="container">
                <div className="columns is-multiline">
                    {performances.map((performance, i) => (
                        <Performance performance={performance} key={i} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Performances;
