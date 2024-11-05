import React, { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';

interface TimeConfigProps {
  onSetTimes: (startTime: string, endTime: string) => void;
  initialStartTime?: string;
  initialEndTime?: string;
}

const TimeConfig: React.FC<TimeConfigProps> = ({ onSetTimes, initialStartTime = '', initialEndTime = '' }) => {
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);

  useEffect(() => {
    setStartTime(initialStartTime);
    setEndTime(initialEndTime);
  }, [initialStartTime, initialEndTime]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSetTimes(startTime, endTime);
  };

  return (
    <div className="flex flex-col min-h-min justify-center items-center">
      <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl w-full max-w-xl flex flex-col h-full md:h-auto">
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          <div>
            <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 py-2">
              Hora de Inicio del Día
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiClock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                className="focus:ring-slate-800 focus:border-slate-800 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 py-2">
              Hora de Fin del Día
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiClock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="time"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="focus:ring-slate-800 focus:border-slate-800 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300 w-64 py-1.5 px-2 text-white rounded-md font-regular"
            >
              Guardar Horario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TimeConfig;
