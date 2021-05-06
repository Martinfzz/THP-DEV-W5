import React from 'react';
const removeMd = require('remove-markdown');

const NoteListDisplay = ({ note, onSelect }) => {
    const { titleValue, textValue } = note;
    const plainText = removeMd(textValue);
    const shortText = plainText.substr(0, 60);

    return (
        <button className="btn btn-dark w-100" onClick={onSelect}>
            <h3 className="text-danger font-weight-bold">{titleValue}</h3>
            <p className="text-light">{shortText}{plainText.length > shortText.length && '...'}</p>
        </button>
    );
};

export default NoteListDisplay;
