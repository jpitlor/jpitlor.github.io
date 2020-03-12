import * as React from "react";
import {ContentfulMusic} from "../utils/schema";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Youtube from "./youtube";

interface PerformanceProps {
    performance: ContentfulMusic;
}

const Performance = ({performance}: PerformanceProps) => {
    return (
        <div className="column is-half">
            <div className="card" style={{height: "100%"}}>
                <div className="card-image">
                    <div className="is-16by9">
                        <Youtube video={performance.recording} />
                    </div>
                </div>
                <div className="card-content">
                    <h3 className="title is-4">{performance.title}</h3>
                    <p className="subtitle is-6">{performance.group}</p>
                    <div className="content">
                        {documentToReactComponents(performance.description.json)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
