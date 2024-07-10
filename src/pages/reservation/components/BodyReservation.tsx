import React, { useEffect, useState } from 'react';
import { findAllReservations, findAllSensor } from '../../../services'
import { ReservationData, SensorData } from '../../../models';
import { sensorAdapter, reservationAdapter } from '../../../adapters';

export const BodyReservation = () => {
  const [reservations, setReservations] = useState<SensorData[]>([]);
  const [availableSensor, setAvailableSensor] = useState<SensorData[]>([]);
  const [unavailableReservations, setUnavailableReservations] = useState<ReservationData[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const sensorData = await findAllSensor();
        const adaptedsensor = sensorData.map(sensorAdapter);
        setReservations(adaptedsensor);
        const available = adaptedsensor.filter(sensor => sensor.estado === false);
        setAvailableSensor(available);
        const reservationsData = await findAllReservations()
        const adaptedReservations = reservationsData.map(reservationAdapter);
        const unavailable = adaptedReservations.filter(reservation => reservation.activo !== false);
        console.log(unavailable)
        setUnavailableReservations(unavailable);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-500 to-gray-600 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gray-700 p-4">
              <h2 className="text-xl font-bold text-white">Espacios disponibles</h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {availableSensor.map((reservation) => (
                  <div key={reservation.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4">
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                      </svg>
                      <div className="text-gray-800 dark:text-gray-200 font-medium text-center">{reservation.nombre}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm text-center">{reservation.ubicacion}</div>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="sr-only">Ver información</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gray-700 p-4">
              <h2 className="text-xl font-bold text-white">Espacios no disponibles</h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {unavailableReservations.map((reservation) => (
                  <div key={reservation.idReservacion} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4">
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                      </svg>
                      <div className="text-gray-800 dark:text-gray-200 font-medium text-center">{reservation.usuario}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm text-center">{reservation.sensor_activado?.nombre}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm text-center">{reservation.placa}</div>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="sr-only">Ver información</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};