import { VentaAdapter } from "../../adapters";
import { instanceReact } from "../../config/axiosConfig";
import { IAddVenta } from "../../interfaces";


export const createVenta = async (reservacion_id:IAddVenta) => {
    try {
        const newVenta = await instanceReact.post('/ventas/', VentaAdapter(reservacion_id))
        console.log(newVenta)
        return newVenta
    } catch (error) {
        console.error('Error creating reservation:', error);
        throw error;
    };
};
