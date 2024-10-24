import React from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center mb-2">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
