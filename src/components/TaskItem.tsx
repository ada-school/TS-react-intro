interface TaskItemProps {
  taskText: string;
  id: number;
  isCompleted?: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  id,
  taskText,
  isCompleted,
}) => {
  return (
    <li id={String(id)}>
      <input checked={isCompleted} type="checkbox" />
      {taskText}
    </li>
  );
};
