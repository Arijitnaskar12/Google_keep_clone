// src/components/NoteList.js
import React, { useState } from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onEdit,searchTerm,grid }) => {
 

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`note-list flex ${grid?"flex-row":"flex-col items-center"} flex-wrap`}>
     
      {filteredNotes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default NoteList;
