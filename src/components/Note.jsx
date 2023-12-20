
import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
const Note = ({ note, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ ...note });

  const handleEdit = () => {
    onEdit(note.id, editedNote);
    setEditing(false);
  };

  return (
    <div className={`note ${isEditing ? 'editing' : ''} text-black w-fit rounded m-2`} style={{ backgroundColor: note.color }}>
      {!isEditing ? (
        <>
          <h3>{note.title}</h3>
          <p className='mb-[10px]'>{note.content}</p>
          <div className='flex gap-3'>
          <button  className="bg-red-950 p-2 rounded mt-[5px] text-white" onClick={() => onDelete(note.id)}><MdDelete/></button>
          <button className='bg-lime-400 p-2 rounded mt-[5px]' onClick={() => setEditing(true)}><MdModeEditOutline/></button>
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center text-white'>
          <input
            type="text"
            value={editedNote.title}
            onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
            className='bg-zinc-500 rounded p-1'
          />
          <textarea
            value={editedNote.content}
            onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}
            className='bg-slate-800 rounded p-2'
          />
          <div>
            <label htmlFor="colorPicker">Color: </label>
            <input
              type="color"
              id="colorPicker"
              value={editedNote.color}
              onChange={(e) => setEditedNote({ ...editedNote, color: e.target.value })}
            />
          </div>
          <button onClick={handleEdit} className='bg-amber-400 rounded p-2 text-black'>Save</button>
        </div>
      )}
    </div>
  );
};

export default Note;
