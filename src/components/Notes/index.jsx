import React from 'react';
import NoteListDisplay from './NoteListDisplay'

const Notes = ({data, onHandleNote, onSelectNote}) => {
  
  return (
    <div className="d-flex flex-column border-right border-light w-25">
      <button onClick={onHandleNote} className="btn btn-danger my-5">Ajouter une note</button>
      {data.map((note) => (
        <div className="mb-3">
          <NoteListDisplay note={note} onSelect={() => onSelectNote(note)}/>
        </div>
        ))}
    </div>
  )
}

export default Notes;