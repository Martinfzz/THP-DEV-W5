import React from 'react';

const MarkdownInput = (props) => {

  return (
    <>
      <input onChange={(e) => props.onChangeTitle(e.target.value)} /><br/><br/>
      <textarea onChange={(e) => props.onChangeText(e.target.value)} />
    </>
  );
}

export default MarkdownInput