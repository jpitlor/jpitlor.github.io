import * as React from "react";

interface SoundCloudProps {
    song: string;
}

const SoundCloud = ({song}: SoundCloudProps) => {
    return (
        <iframe
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={song}
        />
    );
};

export default SoundCloud;
