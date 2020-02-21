import * as React from 'react';

interface Document {
    nodeType: 'document';
    content: Document;
}

interface UnorderedList {
    nodeType: 'unordered-list';
    content: UnorderedList[];
}

interface ListItem {
    nodeType: 'list-item';
    content: ListItem[];
}

interface Paragraph {
    nodeType: 'paragraph';
    content: Paragraph[];
}

interface Text {
    nodeType: 'text';
    value: string;
}

type Description = Document | UnorderedList | ListItem | Paragraph | Text;

const useDescription = (description: Description) => {
    switch (description.nodeType) {
        case 'document':
            return (
                <div>
                    {useDescription(description.content)}
                </div>
            );
        case 'unordered-list':
            return (
                <ul>
                    {description.content.map((content, i) => (
                        <li key={i}>{useDescription(content)}</li>
                    ))}
                </ul>
            );
        case 'list-item':
            return (
                <li>
                    {description.content.map(useDescription)}
                </li>
            );
        case 'paragraph':
            return (
                <p>
                    {description.content.map(useDescription)}
                </p>
            );
        case 'text':
            return description.value;
        default:
            return '';
    }
};

export default useDescription;
