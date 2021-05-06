import React from 'react';

const MarkdownInput = (props) => {
  // To display the text into the form if it's empty or not
  const emptyData = { titleValue: '', textValue: '' };
  const { titleValue, textValue } = props.data || emptyData;

  return (
    <>
      <form onSubmit={props.onSubmit} className="mt-5">
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
        </div>
        <input value={titleValue} type="text" className="inputValue form-control text-light bg-dark border-0" onChange={(e) => props.onChange("title", e.target.value)} /><br/><br/>

      </div>
        <textarea value={textValue} className="textValue input-group text-light bg-dark border-0" style={{height: "300px"}} onChange={(e) => props.onChange("text" , e.target.value)} /><br/>
        <input className="btn btn-danger" type="submit" value="Sauvegarder"/>
      </form>
      
    </>
  );
}

export default MarkdownInput