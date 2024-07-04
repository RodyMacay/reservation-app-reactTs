import React, { useState } from 'react';
import { ModalDetalleVenta } from '../../components/modal/ModalDetalleVenta';

export const AddReservation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveReservacion = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para guardar la reservación
    // ...

    // Mostrar el modal después de guardar la reservación
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 flex flex-col">
      <div className="bg-white dark:bg-gray-900 shadow-lg p-4 rounded-lg">
        <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Reservar Asiento</h2>
        <form className="grid gap-4" onSubmit={handleSaveReservacion}>
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none" htmlFor="user">
              Usuario
            </label>
            <div className="relative">
              <button
                type="button"
                className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <span style={{ pointerEvents: 'none' }}></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-down h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <select
                id="user"
                className="absolute w-full h-full opacity-0 top-0 left-0"
                tabIndex="-1"
                aria-hidden="true"
              >
                <option value="1">John Doe</option>
                <option value="2">Jane Smith</option>
                <option value="3">Bob Johnson</option>
              </select>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none" htmlFor="date">
              Fecha de Reservación
            </label>
            <input
              type="datetime-local"
              id="date"
              className="w-full h-10 border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none" htmlFor="sensor">
              Sensor Activado
            </label>
            <div className="relative">
              <button
                type="button"
                className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <span style={{ pointerEvents: 'none' }}></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-down h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <select
                id="sensor"
                className="absolute w-full h-full opacity-0 top-0 left-0"
                tabIndex="-1"
                aria-hidden="true"
              >
                <option value="1">Sensor 1</option>
                <option value="2">Sensor 2</option>
                <option value="3">Sensor 3</option>
              </select>
            </div>
          </div>
          
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none" htmlFor="license-plate">
              Placa
            </label>
            <input
              type="text"
              id="license-plate"
              className="w-full h-10 border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
          >
            Guardar Reservación
          </button>
        </form>
      </div>

      {/* ModalDetalleVenta componente */}
      <ModalDetalleVenta isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
