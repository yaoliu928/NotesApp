import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Note from './Note';
import CreateNote from './CreateNote';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');

  const textHandler = (event) => {
    setInputText(event.target.value);
  }

  const saveHandler = () => {
    setNotes((prevState) => [...prevState, {
      id: uuidv4(),
      text: inputText
    }]);
    setInputText('');
  }

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  }

  useEffect(() => {
    // getting data from localStorage
    const data = JSON.parse(localStorage.getItem('Notes'));
    // check undefine and empty arr
    if (!data) return;
    setNotes(data);
  }, []);

  useEffect(() => {
    // saving data to localStorage
    localStorage.setItem('Notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='notes'>
      {notes.map((note) =>
        <Note
          key={note.id}
          deleteNote={deleteNote}
          id={note.id}
          text={note.text}
        />
      )}
      <CreateNote textHandler={textHandler} inputText={inputText} saveHandler={saveHandler} />
    </div>
  )
}
