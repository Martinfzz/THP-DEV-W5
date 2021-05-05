import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const NoteDisplay = ({data}) => {
  const {titleValue, textValue} = data;
  
  console.log(titleValue);
  console.log(textValue);

  return (
    <>
    <h1>Display</h1>
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(titleValue) }}/>
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(textValue) }}/>
    </>
  );
}

export default NoteDisplay