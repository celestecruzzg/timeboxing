import React from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';

const Login: React.FC = () => {
  return (
    <body className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex flex-col md:flex-row justify-center items-center flex-grow px-4 md:px-10 space-y-8 md:space-y-0 md:space-x-8 py-5">
        <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl w-full max-w-xl flex flex-col h-full md:h-auto mt-[-10]">
          <section className="flex">
            <div className="relative w-full flex flex-col justify-center px-8 py-5">
              <div className="flex flex-col md:flex-row justify-between mb-4 relative z-10">
                <Link to="/login" className="w-full md:w-1/2 md:mr-2">
                  <button className="w-full py-1 px-4 bg-slate-800 text-white border-2 border-slate-900 rounded-md font-regular">
                    Iniciar sesión
                  </button>
                </Link>
                <div className="m-1"></div>
                <Link to="/register" className="w-full md:w-1/2 md:ml-2">
                  <button className="w-full py-1 px-4 bg-white text-slate-800 border-2 border-slate-900 rounded-md font-regular">
                    Registrarse
                  </button>
                </Link>
              </div>
              <div className="my-4 border-t border-gray-300" />
              <div className="relative z-10 p-6 rounded-lg pb-10">
                <div className="flex items-center mb-4">
                  <img src={Logo} alt="Logo" className="h-11 mr-2" />
                  <a href="#" className="text-slate-900 font-semibold text-xl">timeboxing</a>
                </div>
                <h1 className="text-center text-3xl font-semibold mb-3 text-[#303030]">¡Hola, de nuevo!</h1>
                <h6 className="text-center font-light text-sm mb-6 text-gray-400">Ingresa tu correo y contraseña</h6>
                <form className="space-y-4 flex flex-col items-center">
                  <div className="relative w-full max-w-xs">
                    <input
                      type="email"
                      placeholder="Correo electrónico"
                      className="mt-1 block w-full pl-10 border border-gray-300 placeholder: font-light text-sm rounded-lg shadow-sm p-2"
                      required
                    />
                    <FiMail className="absolute left-3 top-3 text-[#303030] h-5 w-5" />
                  </div>
                  <div className="relative w-full max-w-xs">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="mt-1 block w-full pl-10 border border-[gray-300] placeholder: font-light text-sm rounded-lg shadow-sm p-2"
                      required
                    />
                    <FiLock className="absolute left-3 top-3 text-[#303030] h-5 w-5" />
                  </div>
                  <div className="flex flex-col justify-end items-center mt-4">
                    <Link to="/dashboard" className="transition ease-in-out delay-150 bg-slate-800 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300 w-64 py-1.5 px-2 text-white rounded-md font-regular text-center">
                      Iniciar sesión
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </body>
  );
};

export default Login;