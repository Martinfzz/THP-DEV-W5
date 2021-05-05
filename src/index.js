import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarkdownInput from './components/MarkdownInput'
import NoteDisplay from './components/NoteDisplay'

const App = () => {
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');

  // const onChangeTitle = (title) => {
  //   setTitleValue(title);
  // };

  console.log(titleValue);
  console.log(textValue);

return (
  <>
  <MarkdownInput onChangeTitle={title => setTitleValue(title)} onChangeText={text => setTextValue(text)}/>
  <NoteDisplay />
  </>
);
}

ReactDOM.render(<App />, document.getElementById('root'));