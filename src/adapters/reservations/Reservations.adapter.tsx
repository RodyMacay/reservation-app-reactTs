import { SensorData, DataSensorResponse } from "../../models";



export const sensorAdapter = (reservation: DataSensorResponse): SensorData  => {
    const formatoSensor:SensorData = {
        nombre : reservation.nombre,
        ubicacion: reservation.ubicacion,
        estado : reservation.estado,
        active: reservation.active
    };

    return formatoSensor;
};