import React, { useEffect } from 'react';

const MarkdownInput = (props) => {
  const emptyData = { titleValue: '', textValue: '' };

  const { titleValue, textValue } = props.data || emptyData;

  useEffect(() => {
    document.querySelector(".inputValue").value = titleValue;
    document.querySelector(".textValue").value = textValue;
  }, [titleValue, textValue])


  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input value={titleValue} type="text" className="inputValue" onChange={(e) => props.onChange("title", e.target.value)} /><br/><br/>
        <textarea value={textValue} className="textValue" onChange={(e) => props.onChange("text" , e.target.value)} /><br/>
        <input type="submit" value="Sauvegarder"/>
      </form>
    </>
  );
}

export default MarkdownInput