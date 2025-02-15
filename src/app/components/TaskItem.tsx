import React from "react";

interface TaskItemProps {
  task: { id: number; task: string; completed: boolean };
  onChangeCheckBox: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onChangeCheckBox,
  onDeleteTask,
}) => {
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
            <span
              className={task.completed ? "line-through text-gray-500" : ""}
            >
              {task.task}
            </span>
          </div>
        </div>
      </li>
      <button
        className="border-2 border-black m-2 p-2 rounded-lg bg-white hover:bg-pink-100"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
