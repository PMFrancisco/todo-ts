import React, { useState } from "react";
import "./App.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  const handleTaskTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        name="task"
        type="text"
        value={taskTitle}
        onChange={handleTaskTitleChange}
      />
      <button
        onClick={() => {
          setTasks([
            ...tasks,
            {
              id: tasks.length + 1,
              title: taskTitle,
              completed: false,
            },
          ]);
          setTaskTitle("");
        }}
      >
        Add Task
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                setTasks(
                  tasks.map((t) =>
                    t.id === task.id ? { ...t, completed: !t.completed } : t
                  )
                );
              }}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>

            <button
              onClick={() => {
                setTasks(tasks.filter((t) => t.id !== task.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
