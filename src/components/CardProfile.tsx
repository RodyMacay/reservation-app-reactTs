import React from 'react'

export const CardProfile = () => {
  return (
    <>
    
        <div className="grid gap-4 animate-fade-in-up">
        <div className="flex items-center gap-4 animate-fade-in-up">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold text-gray-500 dark:text-gray-400 animate-fade-in-up"></div>
            <div className="grid gap-1 animate-fade-in-up">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 animate-fade-in-up"> </h3>
            <p className="text-gray-500 dark:text-gray-400 animate-fade-in-up"></p>
            </div>
        </div>
        <div className="grid gap-2 animate-fade-in-up">
            <div className="grid grid-cols-2 gap-2 animate-fade-in-up">
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up">Número de Documento:</p>
                <p className="text-gray-800 dark:text-gray-200 animate-fade-in-up"></p>
            </div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up">Teléfono:</p>
                <p className="text-gray-800 dark:text-gray-200 animate-fade-in-up"></p>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-2 animate-fade-in-up">
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up">Género:</p>
                <p className="text-gray-800 dark:text-gray-200 animate-fade-in-up"></p>
            </div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up">Campo Relacionado:</p>
                <p className="text-gray-800 dark:text-gray-200 animate-fade-in-up"></p>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}

