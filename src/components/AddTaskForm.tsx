import React, { useState } from "react";

interface AddTaskFormProps {
  onAddTask: (taskText: string) => void;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddTask(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <section id="add-task">
      <h1>Add your task</h1>
      <form>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Task Name"
        />
        <button onClick={handleClick}>Add Task</button>
      </form>
    </section>
  );
};
