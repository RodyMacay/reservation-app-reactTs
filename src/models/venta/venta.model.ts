import { UserDataResponse } from "../auth/user.model";




export interface Venta {
    id:      string;
    fecha_venta:    Date;
    total:          number;
    usuario:        UserDataResponse;
    detalles:       VentaDetalle[];
}

export interface VentaDetalle {
    fecha_reservacion:      Date;
    matricula_vehiculo:     string;
    espacio_sensor:         string;
    precio:                 number;
    iva:                    number;
    venta?:                 Venta;
}