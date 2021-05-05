import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarkdownInput from './components/MarkdownInput'
import NoteDisplay from './components/NoteDisplay'

const App = () => {
  const [titleValue, setTitleValue] = useState(JSON.parse(localStorage.getItem('blocNote')).titleValue);
  const [textValue, setTextValue] = useState(JSON.parse(localStorage.getItem('blocNote')).textValue);
  const [displayValue, setDisplayValue] = useState([]);
  const [blocNote, setBlocNote] = useState(JSON.parse(localStorage.getItem('blocNote')));

  //console.log(titleValue);
  //console.log(textValue);

  useEffect(() => {
    setDisplayValue({titleValue, textValue})
  }, [titleValue, textValue])


  const inputSave = () => {
    localStorage.setItem("blocNote", JSON.stringify(displayValue))
    displaySave()
  }

  const displaySave = () => {
    const dataStorage = JSON.parse(localStorage.getItem('blocNote'));
    console.log(dataStorage)
    setBlocNote(dataStorage)
  }
    console.log(blocNote)
    console.log()
    //setBlocNote(dataStorage)

  return (
    <>
    <NoteDisplay data={displayValue}/>
    <MarkdownInput onChangeTitle={title => setTitleValue(title)} onChangeText={text => setTextValue(text)} handleSave={() => inputSave()} data={blocNote}/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));