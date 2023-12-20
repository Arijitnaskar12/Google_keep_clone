import React, { useState } from 'react';

const CreateNote = ({addNote}) => {
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[color,setColor]=useState("");
    const addingNote=()=>{
        if(title && description)
        {
            addNote({ id: Date.now(), title, content:description, color })
              setTitle('');
             setDescription('');
             setColor('');
        }
    }
  return (
    <div className='flex flex-col gap-4 justify-center font-semibold text-black items-center'>
        <input type='text' placeholder="Title"
        value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className='w-[40rem] p-2 rounded max-[450px]:w-1/2'
        />
        <textarea
        placeholder='Write a description...'
        rows="4" cols="50"
        value={description}
        onChange={(e) => setDescription(e.target.value )}
        className='p-2 rounded max-[450px]:w-1/2'
          />
           <div>
            <label htmlFor="colorPicker" className='text-white'>Color: </label>
            <input
              type="color"
              id="colorPicker"
              value={color}
              onChange={(e) => setColor(e.target.value )}
            />
          </div>
     <button className='bg-slate-950 text-white p-2 rounded hover:bg-white hover:text-black' onClick={addingNote}>
        Add Note
      </button>
    </div>
  ) 
}

export default CreateNote;