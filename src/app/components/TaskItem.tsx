import React, { useState } from "react";

type TaskItemProps = {
    task: { id: number; task: string; completed: boolean };
    onChangeCheckBox: (taskId: number) => void;
    onDeleteTask: (taskId: number) => void;
    onUpdateTask: (taskId: number, newTask: string) => void;
  }
  
function TaskItem({ task, onChangeCheckBox, onDeleteTask, onUpdateTask }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdateTask(task.id, editedTask);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };



    return (
      <div className="flex flex-row">
        <li
          key={task.id}
          className="border-2 border-black m-2 p-2 w-64 bg-white rounded-lg text-left"
        >
          <div className="flex flex-row">
            <div className="flex">
              <div className="pr-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onChangeCheckBox(task.id)}
                />
              </div>
              {isEditing ? (
              <input
                type="text"
                value={editedTask}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                autoFocus
                className="border-b border-gray-500 outline-none w-full bg-transparent"
      style={{ width: "100%" }}
              />
            ) : (
              <span
                className={task.completed ? "line-through text-gray-500" : ""}
              >
                {task.task}
              </span>
              )}
            </div>
          </div>
        </li>
        <button
          className="border-2 border-black m-2 p-2 rounded-lg bg-white hover:bg-red-500"
          onClick={() => onDeleteTask(task.id)}
        >
          X
        </button>
        <button className="border-2 border-black m-2 p-2 rounded-lg bg-white hover:bg-orange-500"
          onClick={() => handleEditClick()}
        >
          Edit
        </button>
      </div>
    );
  }
  
  export default TaskItem;
  
