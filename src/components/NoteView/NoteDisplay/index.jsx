import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const NoteDisplay = ({data}) => {
  
  return (
    <>
    <div className="d-flex flex-column">
      <h3 className="text-danger font-weight-bold" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data?.titleValue) }}/>
      <p className="text-light" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data?.textValue) }}/>
    </div>
    </>
  );
}

export default NoteDisplay