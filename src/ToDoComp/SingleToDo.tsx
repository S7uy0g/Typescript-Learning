import React from 'react'
import { model } from '../Models/model';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
interface props{
    toDo:model;
    todos:model[];
    setToDos:React.Dispatch<React.SetStateAction<string | number>>;
}


const SingleToDo = ({toDo,todos,setToDos}:props) => {
  return (
    <div className='flex flex-col items-center'>
      <form action="" className="w-1/2 flex justify-around items-end flex-wrap text-wrap px-4 py-4 rounded-xl bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <span className='w-2/3 break-words'>
            {toDo.toDo}
        </span>
        <div className='w-1/3 flex justify-between'>
            <span className='cursor-pointer hover:scale-125 transition duration-150 ease-in-out'><FaEdit/></span>
            <span className='cursor-pointer hover:scale-125 transition duration-150 ease-in-out'><MdDelete/></span>
            <span className='cursor-pointer hover:scale-125 transition duration-150 ease-in-out'><FaCheck/></span>
        </div>
      </form>
    </div>
  )
}

export default SingleToDo
