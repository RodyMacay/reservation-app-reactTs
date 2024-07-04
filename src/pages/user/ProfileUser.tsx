import React from "react";
import {Link} from 'react-router-dom'
import { CardProfile } from '../../components/CardProfile';

export const ProfileUser = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <div className="bg-white dark:bg-gray-900 shadow-lg p-4 rounded-lg w-full max-w-3xl animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 animate-fade-in-up">Perfil</h2>
                    <Link to='/edit_profile'>
                    <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none">
                        Editar perfil
                    </button>
                    </Link>
                </div>
                <CardProfile />
            </div>
        </div>
    );
};
