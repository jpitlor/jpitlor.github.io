import * as React from "react";

interface YoutubeProps {
    video: string;
}

const Youtube = ({video}: YoutubeProps) => {
    return (
        <div className="is-16by9" style={{width: "100%", height: "100%"}}>
            <iframe
                width="100%"
                height="100%"
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            />
        </div>
    );
};

export default Youtube;
