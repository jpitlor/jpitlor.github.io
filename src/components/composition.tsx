import * as React from "react";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import SoundCloud from "./soundcloud";
import {ContentfulMusic} from "../utils/schema";

interface CompositionProps {
    composition: ContentfulMusic;
}

const Composition = ({composition}: CompositionProps) => {
    return (
        <div className="box">
            <div className="columns is-wrapped">
                <div className="column">
                    <h3 className="title is-4">{composition.title}</h3>
                    <div className="content">
                        {documentToReactComponents(composition.description.json)}
                    </div>
                </div>
                <div className="column">
                    <SoundCloud song={composition.recording} />
                </div>
            </div>
        </div>
    );
};

export default Composition;
