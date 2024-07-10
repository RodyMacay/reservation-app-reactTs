import { SensorData, DataSensorResponse } from "../../models";



export const sensorAdapter = (sensor: DataSensorResponse): SensorData  => {
    const formatoSensor:SensorData = {
        id : sensor.id,
        nombre : sensor.nombre,
        ubicacion: sensor.ubicacion,
        estado : sensor.estado,
        active: sensor.active
    };

    return formatoSensor;
};