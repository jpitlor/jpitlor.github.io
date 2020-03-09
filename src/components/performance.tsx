import * as React from "react";
import {ContentfulMusic} from "../utils/schema";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Youtube from "./youtube";

interface PerformanceProps {
    performance: ContentfulMusic;
}

const Performance = ({performance}: PerformanceProps) => {
    return (
        <div className="box">
            <div className="columns is-wrapped">
                <div className="column">
                    <h3 className="title is-4">{performance.title}</h3>
                    <div className="content">
                        {documentToReactComponents(performance.description.json)}
                    </div>
                </div>
                <div className="column">
                    <Youtube video={performance.recording} />
                </div>
            </div>
        </div>
    );
};

export default Performance;
