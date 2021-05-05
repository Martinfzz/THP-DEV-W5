import React from 'react';
import NoteListDisplay from './NoteListDisplay'

const Notes = ({data, onHandleNote, onSelectNote}) => {
  
  return (
    <div>
      <button onClick={onHandleNote}>Ajouter une note</button>
      {data.map((note) => (
            <NoteListDisplay
                key={note.id}
                note={note}
                onSelect={() => onSelectNote(note)}
            />
        ))}
    </div>
  )
}

export default Notes;