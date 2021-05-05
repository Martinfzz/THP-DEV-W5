import React, { useEffect, useState } from 'react';
import { v4 as generateUuid } from 'uuid';
import Notes from '../Notes';
import NoteView from '../NoteView';

const emptyNote = { id: null, titleValue: '', textValue: '' };

const BookNotes = () => {
  const [note, setNote] = useState(JSON.parse(localStorage.getItem('blocNote')) || []);
  const [selectedNote, setSelectedNote] = React.useState(null);
  
  // useEffect(() => {
  //   setDisplayValue(note);
  // }, [note])
  const handleNote = () => {
    setSelectedNote(emptyNote);
  }

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };
  


  const inputSave = (savedNote) => {
    
    if (savedNote.id) {
      setNote(note.map((element) => (
          (element.id === savedNote.id) ? savedNote : element
      )));
      return;
    }

    const newNote = { ...savedNote, id: generateUuid() };
    console.log(newNote);
    console.log(typeof note);
    setNote((prevNote) => [...prevNote, newNote]);
    setSelectedNote(newNote);
    
    //displaySave();
  }

  // const displaySave = () => {
  //   const dataStorage = JSON.parse(localStorage.getItem('blocNote'));
  //   setBlocNote(dataStorage);
  // }
  
  

  useEffect(() => {
    localStorage.setItem('blocNote', JSON.stringify(note));
  }, [note]);

  
  console.log(note)
  console.log(JSON.parse(localStorage.getItem('blocNote')))
    

  return (
    <>
    <Notes data={note} onHandleNote={handleNote} onSelectNote={handleSelectNote}/>
    <NoteView selectedNote={selectedNote} onInputSave={inputSave}/>
    </>
  );
}

export default BookNotes;