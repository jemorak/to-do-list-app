import React from "react";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: { id: number; task: string; completed: boolean }[];
  onChangeCheckBox: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onUpdateTask: (taskId: number,  newTask: string) => void;
}

function TaskList({tasks, onChangeCheckBox, onDeleteTask, onUpdateTask}: TaskListProps) {
     return (
    <div className="flex items-center justify-center">
      <ul className="w-64 sm:w-80">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onChangeCheckBox={onChangeCheckBox}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
