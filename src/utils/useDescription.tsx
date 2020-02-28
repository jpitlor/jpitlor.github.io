import * as React from "react";

const useDescription = (description?: any) => {
    if (!description) return null;

    switch (description.nodeType) {
        case "document":
            return (
                <div className="content">
                    {description.content.map(useDescription)}
                </div>
            );
        case "unordered-list":
            return (
                <ul>
                    {description.content.map((content: any, i: number) => (
                        <li key={i}>{useDescription(content)}</li>
                    ))}
                </ul>
            );
        case "list-item":
            return (
                <li>
                    {description.content.map(useDescription)}
                </li>
            );
        case "paragraph":
            return (
                <p>
                    {description.content.map(useDescription)}
                </p>
            );
        case "text":
            return description.value;
        default:
            return "";
    }
};

export default useDescription;
