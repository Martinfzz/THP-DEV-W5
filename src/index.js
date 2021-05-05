import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookNotes from './components/BookNotes'

const App = () => {
  return (
    <BookNotes />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));