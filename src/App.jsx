// src/App.js
import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import Navbar from './components/Navbar';
import CreateNote from './components/CreateNote';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes'))||[]);
  const [searchTerm, setSearchTerm] = useState('');
  const[grid,setGrid]=useState(true);
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    if(confirm("Do you really want to delete the note?")){
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    }
  };

  const editNote = (id, updatedNote) => {
    const updatedNotes = notes.map((note) => (note.id === id ? updatedNote : note));
    setNotes(updatedNotes);
  };
  return (
    <div className="app overflow-hidden">
    <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} grid={grid} setGrid={setGrid}/>
    <CreateNote addNote={addNote}/>
      <NoteList searchTerm={searchTerm} grid={grid} notes={notes} onDelete={deleteNote} onEdit={editNote}  />
    </div>
  );
};

export default App;
