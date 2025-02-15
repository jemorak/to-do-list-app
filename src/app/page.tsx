"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import ClearButton from "./components/ClearButton";
import MotionImage from "./components/MotionImage";
import MotionTitle from "./components/MotionTitle";

export default function Page() {
    const [tasks, setTasks] = useState<
    { id: number; task: string; completed: boolean }[]
    >([]);
    const [task, setTask] = useState("");
    let nextId = 0;

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
        nextId =
            Math.max(
            ...JSON.parse(storedTasks).map((task: { id: number }) => task.id),
            0
            ) + 1;
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    const handleClearStorage = () => {
        localStorage.clear();
        setTasks([]);
    };

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
        task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="flex flex-col items-center justify-center p-10 m-10">
            <MotionImage/>
            <MotionTitle/>
            <motion.div
                className="p-10 m-5 border-4 box-border border-pink-500 text-center w-1/2 bg-pink-200 rounded-md"
                whileHover={{
                position: "relative",
                zIndex: 1,
                background: "pink",
                scale: [1, 1.2, 1.1],
                rotate: [0, 10, -10, 0],
                transition: {
                    duration: 0.2,
                },
                }}
                >
                <h2 className="text-2xl font-serif mb-4 font-bold">Add a new task!</h2>
                <TaskList 
                    tasks={tasks}
                    onChangeCheckBox={onChangeCheckBox}
                    onDeleteTask={handleDeleteTask}
                />
                <TaskForm 
                    task={task} 
                    setTask={setTask} 
                    onAddTask={handleAddTask} 
                />
                <ClearButton onClearStorage={handleClearStorage} />
            </motion.div>
        </div>
  );
}
