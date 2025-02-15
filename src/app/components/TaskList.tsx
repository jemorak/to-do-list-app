import React from "react";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: { id: number; task: string; completed: boolean }[];
  onChangeCheckBox: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onChangeCheckBox,
  onDeleteTask,
}) => {
  return (
    <div className="flex items-center justify-center">
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onChangeCheckBox={onChangeCheckBox}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
