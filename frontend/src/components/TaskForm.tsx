import React, { useState } from 'react';

const TaskForm: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [activities, setActivities] = useState<any[]>([]); // Llenar actividades dentro del array

  const handleAddActivity = () => {
    const newActivity = {
      title: '',
      description: '',
      startHour: '',
      endHour: '',
    };
    setActivities([...activities, newActivity]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const taskData = {
      task_title: taskTitle,
      task_description: taskDescription,
      deadline,
      activities, 
    };

    try {
      const response = await fetch('http://localhost:3000/tasks', { //RECUERDA !
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error('Error al crear la tarea');
      }

      const data = await response.json();
      console.log('Tarea creada:', data);
      
      setTaskTitle('');
      setTaskDescription('');
      setDeadline('');
      setActivities([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4">Capturar Tarea</h2>
      <div className="mb-4">
        <label htmlFor="taskTitle" className="block mb-2 text-sm font-medium text-gray-700">Título de la tarea</label>
        <input
          type="text"
          id="taskTitle"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="taskDescription" className="block mb-2 text-sm font-medium text-gray-700">Descripción de la tarea</label>
        <textarea
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          required
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-700">Fecha límite</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <h3 className="text-xl mt-4 mb-2">Actividades</h3>
      {activities.map((activity, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`activityTitle_${index}`} className="block mb-2 text-sm font-medium text-gray-700">Título de la actividad</label>
          <input
            type="text"
            id={`activityTitle_${index}`}
            value={activity.title}
            onChange={(e) => {
              const newActivities = [...activities];
              newActivities[index].title = e.target.value;
              setActivities(newActivities);
            }}
            className="block w-full p-2 border border-gray-300 rounded"
          />
          <label htmlFor={`activityDescription_${index}`} className="block mb-2 text-sm font-medium text-gray-700">Descripción de la actividad</label>
          <textarea
            id={`activityDescription_${index}`}
            value={activity.description}
            onChange={(e) => {
              const newActivities = [...activities];
              newActivities[index].description = e.target.value;
              setActivities(newActivities);
            }}
            className="block w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-2">
              <label htmlFor={`activityStartHour_${index}`} className="block mb-2 text-sm font-medium text-gray-700">Hora de inicio</label>
              <input
                type="time"
                id={`activityStartHour_${index}`}
                value={activity.startHour}
                onChange={(e) => {
                  const newActivities = [...activities];
                  newActivities[index].startHour = e.target.value;
                  setActivities(newActivities);
                }}
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor={`activityEndHour_${index}`} className="block mb-2 text-sm font-medium text-gray-700">Hora de fin</label>
              <input
                type="time"
                id={`activityEndHour_${index}`}
                value={activity.endHour}
                onChange={(e) => {
                  const newActivities = [...activities];
                  newActivities[index].endHour = e.target.value;
                  setActivities(newActivities);
                }}
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      ))}
      <button type="button" onClick={handleAddActivity} className="transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-800 duration-300 w-72 py-1.5 px-2 text-white rounded-md font-regular mb-2">Agregar Actividad</button>
      <button type="submit" className="transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300 w-72 py-1.5 px-2 text-white rounded-md font-regular">Crear Tarea</button>
    </form>
  );
};

export default TaskForm;
