import React from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import '../css/Note.css';

export default function Note({ id, text, deleteNote }) {
  return (
    <div className='note'>
      <div className='note__body'>{text}
      </div>
      <div className='note__footer delete'>
        <DeleteForeverOutlinedIcon
          className='note__delete'
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  )
}
