import React from "react";
import { FormUserProfile } from './FormProfile/FormUserProfile';

export const EditProfileUser = () => {
  const InputField = ({ label, id, name, type = "text", value, onChange, placeholder, accept }) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        accept={accept}
        className="w-full px-3 py-2 text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        placeholder={placeholder}
      />
    </div>
  );
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
    <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl w-full max-w-md overflow-hidden">
    <div className="bg-gray-500-600 dark:bg-purple-800 p-6">

    <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Crear Perfil</h2>
                <FormUserProfile />
    </div>
    </div>
    </div>
    )

};
