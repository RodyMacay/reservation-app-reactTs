
export interface SensorData {
    id: string
    nombre?: string;
    ubicacion: string;
    estado: boolean;
    active?: boolean;
  }
  
  export interface DataSensorResponse {
    id: string
    nombre?: string;
    ubicacion: string;
    estado: boolean;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
  }
  
  