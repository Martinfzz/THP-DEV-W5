import React, { useEffect } from 'react';

const MarkdownInput = (props) => {
  const {titleValue, textValue} = props.data;

  useEffect(() => {
    document.querySelector(".inputValue").value = titleValue;
    document.querySelector(".textValue").value = textValue;
  }, [titleValue, textValue])


  return (
    <>
      <input className="inputValue" onChange={(e) => {console.log(e.target.value); props.onChangeTitle(e.target.value)}} /><br/><br/>
      <textarea className="textValue" onChange={(e) => props.onChangeText(e.target.value)} /><br/>
      <button onClick={() => props.handleSave()}>Sauvegarder</button>
    </>
  );
}

export default MarkdownInput