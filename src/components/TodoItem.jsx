import { useState, useRef, useEffect } from 'react';

export default function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-white p-3 my-2 shadow rounded">
      <div className="flex items-center gap-2 w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <input
            ref={inputRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          <span
            className={`flex-1 ${
              todo.completed ? 'line-through text-gray-400' : ''
            }`}
            onDoubleClick={handleEdit}
          >
            {todo.text}
          </span>
        )}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        Delete
      </button>
    </li>
  );
}
