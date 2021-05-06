import React, { useEffect, useState } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from '../NoteView/NoteDisplay';

const NoteView = (props) => {
  // Constant used
  const [currentNote, setcurrentNote] = useState(null);

  // Everytime the selected note change, we set the current note with the new informations
  useEffect(() => {
    setcurrentNote(props.selectedNote);
  }, [props.selectedNote]);

  // We save the informations in the current note everytime something is put into the form
  const handleChange = (type, value) => {
    if (type === 'title') {
      setcurrentNote({ ...currentNote, titleValue: value });
    } else if (type === 'text') {
      setcurrentNote({ ...currentNote, textValue: value });
    }
  };

  // When we submit, we send the datas to the onInputSave function with the datas
  const handleSubmit = (e) => {
    e.preventDefault();
    const { titleValue, textValue } = currentNote;
    const note = { id: props.selectedNote?.id || null, titleValue, textValue };
    props.onInputSave(note);
  };

  return (
    <>
    {props.selectedNote && (
      <>
      <div className="d-flex flex-column mx-5 mt-3 w-75">
        <NoteDisplay data={currentNote}/>
        <MarkdownInput onChange={handleChange} onSubmit={handleSubmit} data={currentNote}/>
      </div>
    </>
    )}
    </>
  )
}

export default NoteView;