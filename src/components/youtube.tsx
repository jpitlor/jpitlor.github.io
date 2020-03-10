import * as React from "react";

interface YoutubeProps {
    video: string;
}

const Youtube = ({video}: YoutubeProps) => {
    return (
        <iframe
            width="100%"
            height="100%"
            style={{minHeight: "15rem"}}
            src={video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
        />
    );
};

export default Youtube;
