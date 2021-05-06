import React, { useEffect, useState } from 'react';
import { v4 as generateUuid } from 'uuid';
import Notes from '../Notes';
import NoteView from '../NoteView';



const BookNotes = () => {
  // Constants used
  const [note, setNote] = useState(JSON.parse(localStorage.getItem('blocNote')) || []);
  const [selectedNote, setSelectedNote] = React.useState(null);
  const emptyNote = { id: null, titleValue: '', textValue: '' };

  // To save the note
  const inputSave = (savedNote) => {
    // If the note you want to save has no id we create one.
    // If the note has an id we save the note with the current id
    if (savedNote.id) {
      setNote(note.map((element) => ((element.id === savedNote.id) ? savedNote : element)));
    } else {
      const newNote = { ...savedNote, id: generateUuid() };
      setNote((prevNote) => [...prevNote, newNote]);
      setSelectedNote(newNote);
    }
  }

  // Everytime the note is change, we save it in the loca storage
  useEffect(() => {
    localStorage.setItem('blocNote', JSON.stringify(note));
  }, [note]);

  // When we create a new note we initialize it with empty arguments
  const handleNote = () => {
    setSelectedNote(emptyNote);
  }

  // When we select a specific note
  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <>
    <Notes data={note} onHandleNote={handleNote} onSelectNote={handleSelectNote}/>
    <NoteView selectedNote={selectedNote} onInputSave={inputSave}/>
    </>
  );
}

export default BookNotes;