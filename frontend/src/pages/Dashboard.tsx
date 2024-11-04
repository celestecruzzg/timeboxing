import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TimeConfig from '../components/TimeConfig';
import { FiClock, FiCheckCircle, FiChevronDown, FiLogOut } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';

interface Task {
  id: number;
  task_title: string;
  task_description: string;
  deadline: string;
  activities: Activity[];
}

interface Activity {
  title: string;
  description: string;
  startHour: string;
  endHour: string;
}

interface User {
  name: string;
  email: string;
  avatar: string;
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<'tasks' | 'config'>('config');
  const [isTimeConfigured, setIsTimeConfigured] = useState(false);
  const [dayStartTime, setDayStartTime] = useState('');
  const [dayEndTime, setDayEndTime] = useState('');
  const [user, setUser ] = useState<User>({
    name: 'Celeste González',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=68',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3000/tasks');
        if (!response.ok) {
          throw new Error('Error fetching tasks');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (isTimeConfigured) {
      fetchTasks();
    }
  }, [isTimeConfigured]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSetTimes = (startTime: string, endTime: string) => {
    setDayStartTime(startTime);
    setDayEndTime(endTime);
    setIsTimeConfigured(true);
    setActiveTab('tasks');
    console.log(`Horario configurado: ${startTime} - ${endTime}`);
  };

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    setIsDropdownOpen(false);
    navigate('/login'); // Redirigir al login usando navigate
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg py-2">
        <div className="flex flex-col-2 px-4 sm:px-6 lg:px-8 py-2 justify-between items-center">
          {/* Logo y título alineados a la izquierda */}
          <div className="flex items-center">
            <img className="h-10 mr-2" src={Logo} alt="Logo" />
            <h1 className="text-2xl font-bold text-gray-800">timeboxing</h1>
          </div>

          {/* Usuario y dropdown alineados a la derecha */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{user.name}</span>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={user.avatar}
                  alt={`${user.name}'s avatar`}
                />
                <FiChevronDown className="ml-2" />
              </button>
              {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                <button
                                  onClick={handleLogout}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  <FiLogOut className="inline mr-2" />
                                  Cerrar sesión
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </nav>
              
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                      <div className="px-4 py-6 sm:px-0">
                        {isTimeConfigured && (
                          <div className="flex justify-center mb-6">
                            <nav className="flex space-x-4" aria-label="Tabs">
                              <button
                                onClick={() => setActiveTab('tasks')}
                                className={`${
                                  activeTab === 'tasks'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-500 hover:text-gray-700'
                                } px-3 py-2 font-medium text-sm rounded-md flex items-center`}
                              >
                                <FiCheckCircle className="h-5 w-5 mr-1" />
                                Tareas
                              </button>
                              <button
                                onClick={() => setActiveTab('config')}
                                className={`${
                                  activeTab === 'config'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-500 hover:text-gray-700'
                                } px-3 py-2 font-medium text-sm rounded-md flex items-center`}
                              >
                                <FiClock className="h-5 w-5 mr-1" />
                                Configurar Horario
                              </button>
                            </nav>
                          </div>
                        )}
              
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                          {!isTimeConfigured ? (
                            <div className="px-4 py-6 sm:p-6 mb-6">
                              <h2 className='text-xl mb-6'>¡Bienvenido(a) a <strong>timeboxing!</strong></h2>
                              <h2 className="text-lg leading-6 font-semibold text-gray-900 mb-4">Configura tu horario diario</h2>
                              <p className="text-sm text-gray-600 mb-10">
                                Antes de comenzar, por favor configura las horas de inicio y fin de tu día laboral.
                              </p>
                              <TimeConfig onSetTimes={handleSetTimes} />
                            </div>
                          ) : activeTab === 'tasks' ? (
                            <div className="px-4 py-5 sm:p-6">
                              <div className="flex flex-col md:flex-row md:space-x-4">
                                <div className="md:w-1/2 mb-6 md:mb-0">
                                  <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Crear Nueva Tarea</h2>
                                  <TaskForm onTaskCreated={addTask} dayStartTime={dayStartTime} dayEndTime={dayEndTime} />
                                </div>
                                <div className="md:w-1/2">
                                  <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Tus Tareas</h2>
                                  <TaskList tasks={tasks} />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="px-4 py-5 sm:p-6">
                              <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Configuración de Horario</h2>
                              <TimeConfig onSetTimes={handleSetTimes} initialStartTime={dayStartTime} initialEndTime={dayEndTime} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              };
              
              export default Dashboard;