import * as React from "react";

interface YoutubeProps {
    video: string;
}

const Youtube = ({video}: YoutubeProps) => {
    return (
        <iframe
            src={video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
        />
    );
};

export default Youtube;
