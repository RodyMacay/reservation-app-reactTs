import { ReservationData, ReservationDataResponse } from "../../models";
import { sensorAdapter } from "../sensor";

export const reservationAdapter = (reservation: ReservationDataResponse): ReservationData => {
  return {
    idReservacion : reservation.idReservacion,
    usuario : reservation.usuario,
    fecha_reservacion: reservation.fecha_reservacion,
    placa: reservation.placa,
    sensor_activado: reservation.sensor_activado,
    activo : reservation.activo
  };
};