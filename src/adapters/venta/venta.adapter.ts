import { IAddVenta } from "../../interfaces";



export const VentaAdapter = (reservacion_id:IAddVenta) => {

    const formatVenta = {
        reservacion_id: reservacion_id
    };

    return formatVenta
}