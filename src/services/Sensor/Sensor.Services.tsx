import { DataSensorResponse, SensorData } from "../../models";
import {instanceDJ} from "../../config/axiosConfig";
import { sensorAdapter } from '../../adapters';

export const createSensor = async (reservationData: SensorData): Promise<DataSensorResponse> => {
  try {
    const response = await instanceDJ.post(`/sensor/list/`, sensorAdapter(reservationData));
  
    return response.data;
  } catch (error) {
    console.error('Error creating reservation:', error);
    throw error;
  }
}

export const findAllSensor = async (): Promise<DataSensorResponse[]> => {
  try {
    const response = await instanceDJ.get(`/sensor/list/`);
    console.log(response.data)
    return response.data.map((reservation: DataSensorResponse) => sensorAdapter(reservation));
  } catch (error) {
    console.error('Error fetching all reservations:', error);
    throw error;
  }
}

export const findOneSensor = async (reservationId: string): Promise<DataSensorResponse> => {
  try {
    const response = await instanceDJ.get(`/reservacion/${reservationId}`);
    return sensorAdapter(response.data);
  } catch (error) {
    console.error('Error fetching reservation:', error);
    throw error;
  }
}

export const updateSensor = async (reservationId: string, reservationData: SensorData): Promise<DataSensorResponse> => {
  try {
    const response = await instanceDJ.patch(`/reservacion/${reservationId}`, sensorAdapter(reservationData));
    return sensorAdapter(response.data);
  } catch (error) {
    console.error('Error updating reservation:', error);
    throw error;
  }
}

export const deleteSensor = async (reservationId: string): Promise<void> => {
  try {
    await instanceDJ.delete(`/reservacion/${reservationId}`);
  } catch (error) {
    console.error('Error deleting reservation:', error);
    throw error;
  }
}
