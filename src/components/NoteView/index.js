import React, { useEffect, useState } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from '../NoteView/NoteDisplay';

const NoteView = (props) => {
  const [currentNote, setcurrentNote] = useState(null);

  useEffect(() => {
    setcurrentNote(props.selectedNote);
  }, [props.selectedNote]);

  const handleChange = (type, value) => {
    if (type === 'title') {
      setcurrentNote({ ...currentNote, titleValue: value });
    } else if (type === 'text') {
      setcurrentNote({ ...currentNote, textValue: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { titleValue, textValue } = currentNote;

    const note = { id: props.selectedNote?.id || null, titleValue, textValue };
    props.onInputSave(note);
};

console.log(currentNote)

  return (
    <>
    {props.selectedNote && (
      <>
    <NoteDisplay data={currentNote}/>
    <MarkdownInput onChange={handleChange} onSubmit={handleSubmit} data={currentNote}/>
    </>
    )}
    </>
  )
}

export default NoteView;