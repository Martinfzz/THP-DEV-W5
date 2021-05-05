import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarkdownInput from './components/MarkdownInput'
import NoteDisplay from './components/NoteDisplay'

const App = () => {
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [displayValue, setdisplayValue] = useState([]);

  console.log(titleValue);
  console.log(textValue);

  useEffect(() => {
    setdisplayValue({titleValue, textValue})

  }, [titleValue, textValue])
  

return (
  <>
  <NoteDisplay data={displayValue}/>
  <MarkdownInput onChangeTitle={title => setTitleValue(title)} onChangeText={text => setTextValue(text)}/>
  </>
);
}

ReactDOM.render(<App />, document.getElementById('root'));