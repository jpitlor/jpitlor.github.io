import * as React from "react";

interface SoundCloudProps {
    song: string;
}

const SoundCloud = ({song}: SoundCloudProps) => {
    return (
        <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={song}
        />
    );
};

export default SoundCloud;
