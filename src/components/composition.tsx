import * as React from "react";

interface CompositionProps {
    composition: object;
}

const Composition = ({composition}: CompositionProps) => {
    console.log(composition);

    return (
        <span />
    );
};

export default Composition;
