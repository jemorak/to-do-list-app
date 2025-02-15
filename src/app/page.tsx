"use client";
import "./globals.css";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import MenuContext from "@/components/MenuContext";
import { useEffect } from "react";
import {motion } from "framer-motion";

export default function Page() {
    const [isChecked, setIsChecked] = useState(false);
    const [tasks, setTasks] = useState<{ id: number; task: string; completed: boolean }[]>([]);
    const [task, setTask] = React.useState("");

    let nextId = 0;

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
        nextId = Math.max(...JSON.parse(storedTasks).map((task: { id: number }) => task.id), 0) + 1;
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    const handleAddTask = () => {
        if (task.trim() === "") return;

        const newTask = {
        id: tasks.length + 1,
        task: task,
        completed: false,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTask("");
    };

    const handleDeleteTask = (taskId: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const onChangeCheckBox = (taskId: number) => {
        setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task,
        ),
        );
    };

    return (
        <div className="App">
        <div className="flex flex-col items-center justify-center p-10 m-10 ">
            <Image
                src="/Blossom_Powerpuff_Girl.png"
                alt="picture of blossom"
                width={100}
                height={100}
            />
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0

                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .2
                    }
                },
            }}>
                <div className="p-10 m-10 border-2 box-border border-pink-500 text-center bg-pink-200 rounded-md ">
                    <h1 className="text-3xl font-bold underline">To do list app</h1>
                </div>
            </motion.div>
            

            <div className="p-10 m-5 border-4 box-border border-pink-500 text-center w-1/2 bg-pink-200 rounded-md">
            <h2 className="text-2xl font-serif mb-4 font-bold">
                Add a new task!
            </h2>

            {/* Task List */}
            <div className="flex items-center justify-center ">
                <ul>
                {tasks.map((task) => (
                    <>
                    <div className="flex flex-row">
                        <div></div>
                        <li
                        key={task.id}
                        className="border-2 border-black m-2 p-2 w-64 bg-white rounded-lg text-left"
                        >
                        <div className="flex flex-row ">
                            <div className="flex">
                            <div className="pr-3">
                                <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onChangeCheckBox(task.id)} // checked={item.checked}
                                />
                            </div>
                            <span
                                className={
                                task.completed ? "line-through text-gray-500" : ""
                                }
                            >
                                {task.task}
                            </span>
                            </div>
                        </div>
                        </li>
                        <button
                        className="border-2 border-black m-2 p-2 rounded-lg bg-white hover:bg-pink-100"
                        onClick={() => handleDeleteTask(task.id)}
                        >
                        Delete
                        </button>
                    </div>
                    </>
                ))}
                </ul>
            </div>

            {/* Input and Button */}
            <div className="mt-6">
                <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border-2 border-black m-2 p-2 w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Add a new task"
                />
                <button
                className="border-2 border-black m-2 p-2 rounded-lg bg-white hover:bg-pink-100 "
                onClick={handleAddTask}
                >
                Add
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}
