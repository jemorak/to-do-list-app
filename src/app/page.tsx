"use client";
import './globals.css'
import Image from 'next/image'
import { useState } from 'react'


export default function Page() {
    // State to manage the checkbox state
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle checkbox change
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div>
            <div className='flex flex-col items-center justify-center p-10 m-10 '>
                <Image 
                    src='/Blossom_Powerpuff_Girl.png'
                    alt="picture of blossom"
                    width={100}
                    height={100}
                />
                <div className='p-10 m-10 border-2 box-border border-pink-500 text-center bg-pink-200 rounded-md '>
                    <h1 className="text-3xl font-bold underline">To do list app</h1>
                </div>

                <div className='p-10 m-5 border-4 box-border border-pink-500 text-center w-1/2 bg-pink-200 rounded-md'>
                    <h2 className="text-2xl font-serif mb-4 font-bold">Add a new task!</h2>
                    
                    {/* Task List */}
                    <div className='flex items-center justify-center '>
                        <ul className='border-2 border-black m-2 p-2 w-64 bg-white rounded-lg'>
                            <li>Task 1</li>
                            <li>Task 2</li>
                            <li>Task 3</li>
                        </ul>  
                    </div>
                    
                    {/* Input and Button */}
                    <div className='mt-6'>
                        <input
                            type="text"
                            className="border-2 border-black m-2 p-2 w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="Add a new task"
                        />
                        <button className="border-2 border-black m-2 p-2 rounded-lg bg-white hover:bg-pink-100">
                            Add
                        </button>              
                    </div>
                </div>
            </div>
        </div>
    )
}
