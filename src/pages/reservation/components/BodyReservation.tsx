import React, { useEffect, useState } from 'react';
import { findAllReservations, findAllSensor } from '../../../services';
import { ReservationData, SensorData } from '../../../models';
import { sensorAdapter, reservationAdapter } from '../../../adapters';

export const BodyReservation = () => {
  const [availableSensor, setAvailableSensor] = useState<SensorData[]>([]);
  const [unavailableSensors, setUnavailableSensors] = useState<SensorData[]>([]);
  const [unavailableReservations, setUnavailableReservations] = useState<ReservationData[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const sensorData = await findAllSensor();
        const adaptedSensor = sensorData.map(sensorAdapter);

        // Filtrar sensores disponibles (estado false)
        const available = adaptedSensor.filter(sensor => sensor.estado === false);
        setAvailableSensor(available);

        // Filtrar sensores no disponibles (estado true)
        const unavailable = adaptedSensor.filter(sensor => sensor.estado === true);
        setUnavailableSensors(unavailable);

        const reservationsData = await findAllReservations();
        console.log(reservationsData)
        const adaptedReservations = reservationsData.map(reservationAdapter);
        console.log(adaptedReservations)



        // Filtrar solo las reservaciones activas
        const activeReservations = adaptedReservations.filter(reservation => reservation.activo !== false);
        console.log(activeReservations)

        // Filtrar los sensores inactivos que no están en reservación activa
        const inactiveSensorsWithReservations = activeReservations.map(reservation => reservation.sensor_activado?.id);
        const filteredUnavailableSensors = unavailable.filter(sensor => !inactiveSensorsWithReservations.includes(sensor.id));
        
        setUnavailableReservations(activeReservations);
        console.log(unavailableReservations)
        setUnavailableSensors(filteredUnavailableSensors);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  /*   const intervalId = setInterval(fetchReservations, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount */
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
                {availableSensor.map((sensor) => (
                  <div key={sensor.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4">
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
                      <div className="text-gray-800 dark:text-gray-200 font-medium text-center">{sensor.nombre}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm text-center">{sensor.ubicacion}</div>
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
                {unavailableSensors.map((sensor) => (
                  <div key={sensor.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4">
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
                      <div className="text-gray-800 dark:text-gray-200 font-medium text-center">{sensor.nombre}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm text-center">{sensor.ubicacion}</div>
                    </div>
                  </div>
                ))}
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