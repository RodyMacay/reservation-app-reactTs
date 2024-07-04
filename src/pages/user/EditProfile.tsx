import React from "react";
import { FormUserProfile } from './FormProfile/FormUserProfile';

export const EditProfileUser = () => {
    return (
<div className="w-full bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center">
  <div className="bg-white dark:bg-gray-900 shadow-lg p-4 rounded-lg w-full max-w-md">
    <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Crear Perfil</h2>
                <FormUserProfile />
    </div>
    </div>

    );
};
