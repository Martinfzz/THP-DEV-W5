import React from 'react';

const NoteListDisplay = ({ note, onSelect }) => {
    const { id, titleValue, textValue } = note;
    const safeText = textValue.replace(/(#|\*|\[|\])+/gm, '');
    const shortText = safeText.substr(0, 60);

    return (
        <button type="button" className="NoteListItem" onClick={onSelect}>
            <h3 className="NoteListItem__title">{titleValue}</h3>
            <p className="NoteListItem__text">
                {shortText}{safeText.length > shortText.length && '...'}
            </p>
            <p className="NoteListItem__id">#{id}</p>
        </button>
    );
};

export default NoteListDisplay;
