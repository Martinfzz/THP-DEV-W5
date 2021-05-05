import React from 'react';

const MarkdownInput = (props) => {

  return (
    <>
      <input onChange={(e) => props.onChangeTitle(e.target.value)} /><br/><br/>
      <textarea onChange={(e) => props.onChangeText(e.target.value)} /><br/>
      <button>Sauvegarder</button>
    </>
  );
}

export default MarkdownInput