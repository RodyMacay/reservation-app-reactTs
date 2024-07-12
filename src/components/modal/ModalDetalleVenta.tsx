import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVentaStore } from "../../store/venta/ventaStore";
import { IAddVenta } from "../../interfaces/venta/venta.interface";

interface ModalDetalleVentaProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalDetalleVenta: React.FC<ModalDetalleVentaProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const { venta } = useVentaStore();

  const handleConfirm = () => {
    // Aquí podrías realizar acciones adicionales antes de redirigir, si es necesario
    // Por ejemplo, limpiar el estado o realizar otras operaciones

    // Cerrar el modal
    onClose();

    // Redirigir al home
    navigate("/");
  };

  if (!isOpen) return null;

  console.log("venta ===", venta);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-black bg-opacity-50 absolute inset-0"
        onClick={onClose}
      ></div>
      <div className="bg-white dark:bg-gray-900 shadow-lg p-4 rounded-lg relative max-w-lg w-full mx-2">
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-400"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="bg-white dark:bg-gray-900 shadow-lg p-4 rounded-lg mt-4">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
            Detalles de la Venta
          </h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Usuario:
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  {venta?.venta?.usuario.username}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fecha de Venta:
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  {venta?.venta?.fecha_venta}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Iva (15%):
                </p>
                <p className="text-gray-800 dark:text-gray-200">{venta?.iva}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total:
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  {venta?.venta?.total}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Detalles de Reservación
              </h3>
              <div className="grid gap-4">
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Fecha de Reservación:
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {venta?.fecha_reservacion}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Matrícula:
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {venta?.matricula_vehiculo}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Espacio de Sensor:
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {venta?.espacio_sensor}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Precio:</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {venta?.precio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleConfirm}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mr-4"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
