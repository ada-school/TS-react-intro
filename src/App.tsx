import React, { useState } from "react";
import { TaskItem } from "./components/TaskItem";
import { AddTaskForm } from "./components/AddTaskForm";

interface Task {
  taskText: string;
  id: number;
  isCompleted?: boolean;
}

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const handleOnAddTask = (newTaskText: string) => {
    const newArray = [
      ...tasks,
      { id: tasks.length, taskText: newTaskText, isCompleted: false },
    ];

    setTasks(newArray);
  };

  return (
    <main>
      <AddTaskForm onAddTask={handleOnAddTask} />
      <section id="task-list">
        <h2>Task List</h2>
        <ul>
          {tasks.map(({ id, taskText, isCompleted }) => (
            <TaskItem id={id} taskText={taskText} isCompleted={isCompleted} />
          ))}
        </ul>
      </section>
    </main>
  );
};
