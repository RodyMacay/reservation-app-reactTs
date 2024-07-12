import React, { useState, useEffect } from 'react';
import { ModalDetalleVenta } from '../../components/modal/ModalDetalleVenta';
import { useAuthStore } from '../../store';
import { createReservacion, findAllSensor, getProfileById } from '../../services';
import { IAddVenta } from '../../interfaces';
import { useVentaStore } from '../../store/venta/ventaStore';

export const AddReservation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReservation, setIsReservation] = useState<IAddVenta>({
    reservacion_id: ''
  });
  const [availableSensors, setAvailableSensors] = useState<any[]>([]);
  const [profile, setProfile] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    sensorId: '',
    placa: '',
  });
  const authStore = useAuthStore();
  const { addVenta } = useVentaStore();

  useEffect(() => {
    fetchAvailableSensors();
    fetchUserProfile();
  }, []);

  const fetchAvailableSensors = async () => {
    try {
      const sensorData = await findAllSensor();
      const available = sensorData.filter(sensor => sensor.estado === false);
      setAvailableSensors(available);
    } catch (error) {
      console.error('Error fetching available sensors:', error);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const fetchedProfile = await getProfileById(authStore.token);
      setProfile(fetchedProfile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {  sensorId, placa } = formData;
    const token = authStore.token;

    console.log('Form Data:', formData); // Mensaje de depuración para verificar el formData

    try {
      if (!sensorId || !placa) {
        console.error('Debe seleccionar un sensor y una placa válida');
        return;
      }

      console.log('FormData enviado:', formData); // Mensaje de depuración para verificar el FormData antes de enviarlo

      const reservacion = await createReservacion(formData, token);

      const id_reserva = reservacion.message.reservacion_id;

      addVenta(id_reserva) 
      
      setIsModalOpen(true); // Mostrar modal de éxito o realizar otra acción
    } catch (error) {
      console.error('Error creating reservation:', error);
      // Manejar el error según tus necesidades
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg w-full max-w-md overflow-hidden">
        <div className="bg-gray-700 p-6">
          <h2 className="text-xl font-bold text-white">Reservar Asiento</h2>
        </div>
        <div className="p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="sensor">
                  Sensor Activado
                </label>
                <select
                  id="sensor"
                  name="sensorId"
                  className="w-full h-10 border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  value={formData.sensorId}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccionar sensor</option>
                  {availableSensors.map(sensor => (
                    <option key={sensor.id} value={sensor.id}>
                      {sensor.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="license-plate">
                  Placa
                </label>
                <select
                  id="license-plate"
                  name="placa"
                  className="w-full h-10 border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  value={formData.placa}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccionar placa</option>
                  {profile?.vehiculos.map((vehicle: any) => (
                    <option key={vehicle.id} value={vehicle.placa}>
                      {vehicle.placa}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Guardar Reservación
            </button>
          </form>
        </div>
      </div>
      <ModalDetalleVenta isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
