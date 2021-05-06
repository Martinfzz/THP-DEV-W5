import React from 'react';

const MarkdownInput = (props) => {
  // To display the text into the form if it's empty or not
  const emptyData = { titleValue: '', textValue: '' };
  const { titleValue, textValue } = props.data || emptyData;

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