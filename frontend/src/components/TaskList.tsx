import React from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <div className="bg-white rounded shadow-md w-96">
      <h2 className="text-xl mb-2 text-center">Lista de Tareas</h2>
      <ul>
        {tasks.length === 0 ? (
          <li className="p-4 text-center">No hay tareas disponibles</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={`p-4 ${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
