import React from 'react';
import { Link } from 'react-router-dom';

const TaskForm: React.FC = () => {
  return (
    <form className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4">Capturar Tarea</h2>
      <div className="mb-4">
        <label htmlFor="taskTitle" className="block mb-2 text-sm font-medium text-gray-700">Título de la tarea</label>
        <input
          type="text"
          id="taskTitle"
          placeholder="Título de la tarea"
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="taskDescription" className="block mb-2 text-sm font-medium text-gray-700">Descripción de la tarea</label>
        <textarea
          id="taskDescription"
          placeholder="Descripción de la tarea"
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-700">Fecha límite</label>
        <input
          type="date"
          id="deadline"
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="flex flex-col justify-end items-center">
        <button
          type="button"
          className="transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300 w-72 py-1.5 px-2 text-white rounded-md font-regular mb-2"
          onClick={() => alert('Actividad agregada!')} // Simulando la acción
        >
          Agregar Actividad
        </button>
        <Link to="/dashboard" className="transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300 w-72 py-1.5 px-2 text-white rounded-md font-regular">
          Crear Tarea
        </Link>
      </div>
    </form>
  );
};

export default TaskForm;