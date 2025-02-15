import React from "react";

type TaskFormProps = {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  onAddTask: () => void;
}

function TaskForm({task, setTask, onAddTask}: TaskFormProps){
    return (
    <div className="mt-6">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border-2 border-black m-2 p-2 w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Add a new task"
      />
      <button
        className="border-2 border-black m-2 p-2 rounded-lg bg-white hover:bg-green-500"
        onClick={onAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default TaskForm;
