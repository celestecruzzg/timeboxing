import { Link } from "react-router-dom";
import { useState } from "react";
import { FiLock, FiMail, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import Logo from '../assets/images/logo.png'



const Register: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <main className="flex flex-col md:flex-row justify-center items-center flex-grow px-4 md:px-10 space-y-8 md:space-y-0 md:space-x-8 py-5">
                {/* Contenedor de formulario de registro */}
                <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl w-full max-w-xl flex flex-col h-full md:h-auto">
                    <section className="flex">
                        <div className="relative w-full flex flex-col justify-center px-8 py-5 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                            />
                            <div className="flex flex-col md:flex-row justify-between mb-4 relative z-10">
                                <Link to="/login" className="w-full md:w-1/2 md:mr-2">
                                    <button className="w-full py-1 px-4 bg-white text-[var(--color-red)] border-2 border-slate-900 rounded-md font-regular">
                                        Iniciar sesión
                                    </button>
                                </Link>
                                <div className='m-1'></div>
                                <Link to="/register" className='w-full md:w-1/2 md:ml-2'>
                                    <button className="w-full py-1 px-4 bg-slate-800 text-white border-2 border-slate-900 rounded-md font-regular">
                                        Registrarse
                                    </button>
                                </Link>
                            </div>

                            {/* Separador */}
                            <div className="my-4 border-t border-gray-300" />

                            <div className="relative z-10 p-5 rounded-lg pb-12">
                                {/* Logo */}
                                <div className="flex items-center mb-4">
                                    <img src={Logo} alt="Logo" className="h-11 mr-2" />
                                    <a href='#' className="text-[var(--color-red)] font-semibold text-xl">timeboxing</a>
                                </div>
                                <h1 className="text-center text-3xl font-semibold mb-3 text-[#303030]">
                                    ¡Hola! ¿Eres nuevo por aquí?
                                </h1>
                                <h6 className="text-center font-light text-sm mb-6 text-gray-400">
                                    Ingresa tus datos, por favor
                                </h6>

                                <form className="space-y-4 flex flex-col items-center">
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="text"
                                            placeholder="Nombre(s)"
                                            className="mt-1 block w-full pl-10 border border-gray-300 placeholder: font-light text-sm rounded-lg shadow-sm p-2"
                                            required
                                        />
                                        <FiUser className="absolute left-3 top-3 text-[#303030] h-5 w-5" />
                                    </div>
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="text"
                                            placeholder="Apellidos"
                                            className="mt-1 block w-full pl-10 border border-gray-300 placeholder: font-light text-sm rounded-lg shadow-sm p-2"
                                            required
                                        />
                                        <FiUser className="absolute left-3 top-3 text-[#303030] h-5 w-5" />
                                    </div>
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="text"
                                            placeholder="Correo electrónico"
                                            className="mt-1 block w-full pl-10 border border-gray-300 placeholder: font-light text-sm rounded-lg shadow-sm p-2"
                                            required
                                        />
                                        <FiMail className="absolute left-3 top-3 text-[#303030] h-5 w-5" />
                                    </div>
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            placeholder="Contraseña"
                                            className="mt-1 block w-full pl-10 border border-gray-300 placeholder: font-light text-sm rounded-lg shadow-sm p-2"
                                            required
                                        />
                                        <FiLock className="absolute left-3 top-3 text-[#303030] h-5 w-5" />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                            {isPasswordVisible ? (
                                                <FiEyeOff onClick={togglePasswordVisibility} className="text-gray-400 h-5 w-5" />
                                            ) : (
                                                <FiEye onClick={togglePasswordVisibility} className="text-gray-400 h-5 w-5" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end items-center">
                                        <button type="submit" className="transition ease-in-out delay-150 bg-slate-800 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300 w-64 py-1.5 px-2 mt-4 text-white rounded-md font-regular">
                                            Registrarse
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Register;