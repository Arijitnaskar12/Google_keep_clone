import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosRefresh } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = ({setSearchTerm,searchTerm,grid,setGrid}) => {
  
  return (
    <div className='flex items-center justify-between gap-32 m-2 p-2 border-b-[0.2px] max-[450px]:gap-2 max-[450px]:w-full max-[450px]:justify-around'>
    <div className='flex  items-center gap-3 max-[450px]:gap-1'>
    <IoMenuSharp className='hover:rounded hover:bg-zinc-500 w-10 h-10 p-2 max-[450px]:hidden'/>
    <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' className='max-[450px]:w-5'/>   
      <h1 className='text-2xl max-[450px]:text-xl'>Keep</h1>     
    </div>
        <div className='bg-zinc-600 rounded  flex items-center cursor-pointer focus:text-black'>
        <CiSearch  className='h-8 w-8  text-white absolute'/>
        <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='searchbar p-3 pl-8 text-lg text-black w-[40rem] placeholder:text-black rounded bg-transparent focus:bg-white max-[450px]:w-[10rem]'
      />
        </div>
        <div className='options flex gap-10 jusity-center cursor-pointer max-[450px]:hidden '>
        <IoIosRefresh className='hover:rounded hover:bg-zinc-500 w-10 h-10 p-2'/>
    
        <button onClick={()=>setGrid(!grid)}>{grid?<IoGridOutline className='hover:rounded hover:bg-zinc-500 w-10 h-10 p-2'/>:<FaList className='hover:rounded hover:bg-zinc-500 w-10 h-10 p-2'/>}</button>     
        <IoSettingsSharp className='hover:rounded hover:bg-zinc-500 w-10 h-10 p-2'/>
        <CgProfile className='hover:rounded hover:bg-zinc-500 w-10 h-10 p-2'/>
        </div>
        
    </div>
  )
}

export default Navbar