import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const NoteDisplay = ({data}) => {
  return (
    <>
    <h1>Display</h1>
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data?.titleValue) }}/>
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data?.textValue) }}/>
    </>
  );
}

export default NoteDisplay