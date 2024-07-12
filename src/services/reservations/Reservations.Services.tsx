import { ReservationDataResponse, ReservationData } from "../../models";
import { instanceDJ, instanceReact } from "../../config/axiosConfig";
import { reservationAdapter } from '../../adapters';
import axios from "axios";

export const createReservacion = async (formData: any, token: string) => {
  const { sensorId, placa } = formData;

  try {
    const response = await axios.post(
      'http://localhost:3004/api/reservacion',
      { sensorId, placa },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Reservación creada:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creando la reservación:', error);
    throw error;
  }
};



export async function findAllUserVehicles(userId: number) {
  try {
    const response = await instanceReact.get(`/vehicles?userId=${userId}`);
    return response.data; // Suponiendo que el endpoint devuelve los vehículos del usuario
  } catch (error) {
    console.error('Error fetching user vehicles:', error);
    throw new Error('Error fetching user vehicles');
  }
}

export const findAllReservations = async (): Promise<ReservationDataResponse[]> => {
  try {
    const response = await instanceDJ.get(`/reservacion/list/`);
    console.log("lista de reservacion",response.data)
    return response.data.map((reservation: ReservationDataResponse) => reservationAdapter(reservation));
  } catch (error) {
    console.error('Error fetching all reservations:', error);
    throw error;
  }
}

export const findOneReservations = async (reservationId: string): Promise<ReservationDataResponse> => {
  try {
    const response = await instanceDJ.get(`/reservacion/${reservationId}`);
    return reservationAdapter(response.data);
  } catch (error) {
    console.error('Error fetching reservation:', error);
    throw error;
  }
}

export const updateReservations = async (reservationId: string, reservationData: ReservationData): Promise<ReservationDataResponse> => {
  try {
    const response = await instanceDJ.patch(`/reservacion/${reservationId}`, reservationAdapter(reservationData));
    return reservationAdapter(response.data);
  } catch (error) {
    console.error('Error updating reservation:', error);
    throw error;
  }
}

export const deleteReservations = async (reservationId: string): Promise<void> => {
  try {
    await instanceDJ.delete(`/reservacion/${reservationId}`);
  } catch (error) {
    console.error('Error deleting reservation:', error);
    throw error;
  }
}

