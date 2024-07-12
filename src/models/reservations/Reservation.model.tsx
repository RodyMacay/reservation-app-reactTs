import { SensorData } from '..'
export interface ReservationData {
    idReservacion : string;
    usuario : string;
    fecha_reservacion?: Date;
    sensor_activado?: SensorData;
    placa: string;
    activo : boolean;
  }

  
  export interface ReservationDataResponse {
    idReservacion : string;
    usuario : string;
    fecha_reservacion?: Date;
    placa: string;
    sensor_activado?: SensorData;
    activo : boolean;
    createdAt?: string;
    updatedAt?: string;
  }
  