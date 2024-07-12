import React, { useEffect, useState } from 'react';
import { findAllSensor } from '../../../services'
import { SensorData } from '../../../models';
import { sensorAdapter } from '../../../adapters';

export const BodyReservation = () => {
  const [reservations, setReservations] = useState<SensorData[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const reservationsData = await findAllSensor();
        const adaptedReservations = reservationsData.map(sensorAdapter);
        setReservations(adaptedReservations);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  /*   const intervalId = setInterval(fetchReservations, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount */
  }, []);

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-900 shadow-lg p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Espacios disponibles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {reservations.map((reservation) => (
              <div key={reservation.sensorId} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col items-center justify-center p-6">
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
                    className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-2"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                    <circle cx="7" cy="17" r="2"></circle>
                    <path d="M9 17h6"></path>
                    <circle cx="17" cy="17" r="2"></circle>
                  </svg>
                  <div className="text-gray-800 dark:text-gray-200 font-medium">{reservation.placa}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">Espacio 1</div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 mt-4">
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
                      className="w-5 h-5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                    <span className="sr-only">Ver información</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};